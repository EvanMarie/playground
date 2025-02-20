import React, { useState, useEffect } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface ContentParserProps {
  content: string;
}

const MathRenderer: React.FC<{ mathExpression: string }> = ({
  mathExpression,
}) => {
  const [rendered, setRendered] = useState(false);
  const uniqueId = `math-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    const container = document.getElementById(uniqueId);

    try {
      if (container && !rendered) {
        let latexMath = mathExpression
          .replace(/^\\\[|\\\]$/g, "")
          .replace(/^\$|\$$/g, "")
          .replace(/^\[|\]$/g, "")
          .trim();

        latexMath = latexMath
          .replace(/(?<!\\)rac\{/g, "\\frac{")
          .replace(/(?<!\\)frac\{/g, "\\frac{")
          .replace(/([bm])_(\d+)(?!\})/g, "$1_{$2}")
          .replace(/([bm])_\{(\d+)\}/g, "$1_{$2}")
          .replace(/\^(-?\d+|\{[^{}]+\})/g, "^{$1}")
          .replace(/(?<=[^{0-9])-(?=\d)/g, "{-}")
          .replace(/([=+\-*/])/g, " $1 ")
          .replace(/(\d+),(\d{3})/g, "$1{,}$2")
          .replace(/\\propto/g, "\\propto")
          .replace(/\s+/g, " ")
          .trim();

        if (typeof window !== "undefined" && window.DOMParser) {
          katex.render(latexMath, container, {
            throwOnError: false,
          });
        }

        setRendered(true);
      }
    } catch (error) {
      console.error("Error rendering math:", error);
    }
  }, [mathExpression, rendered, uniqueId]);

  return <span id={uniqueId} />;
};

const ContentParser: React.FC<ContentParserProps> = ({ content }) => {
  const [parsedContent, setParsedContent] = useState<React.ReactNode[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const parseMathAndHtml = (input: string) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input, "text/html");

      const processNode = (node: Node): React.ReactNode => {
        if (node.nodeType === Node.TEXT_NODE) {
          const text = node.textContent || "";

          // Split the text into segments that might contain math or currency
          const segments = [];
          let currentSegment = "";
          let inMath = false;

          for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const nextChar = text[i + 1];

            // Check for currency pattern
            if (char === "$" && /\d/.test(nextChar)) {
              // Look ahead to see if this is a currency amount
              let j = i + 1;
              let isCurrency = false;
              let currencyStr = "$";

              while (j < text.length) {
                if (/[\d,.]/.test(text[j])) {
                  currencyStr += text[j];
                  j++;
                } else {
                  break;
                }
              }

              // Verify this matches currency pattern
              if (/^\$\d+(?:,\d{3})*(?:\.\d{2})?$/.test(currencyStr)) {
                if (currentSegment) {
                  segments.push({ type: "text", content: currentSegment });
                  currentSegment = "";
                }
                segments.push({ type: "text", content: currencyStr });
                i = j - 1; // Move index to end of currency string
                continue;
              }
            }

            // Check for math delimiters
            if (char === "$" || char === "\\" || char === "[") {
              if (char === "$" && text[i - 1] !== "\\") {
                inMath = !inMath;
              }
              if (currentSegment) {
                segments.push({
                  type: inMath ? "math" : "text",
                  content: currentSegment,
                });
                currentSegment = "";
              }
            }

            currentSegment += char;
          }

          if (currentSegment) {
            segments.push({
              type: inMath ? "math" : "text",
              content: currentSegment,
            });
          }

          // Process segments
          return segments.map((segment, index) => {
            if (segment.type === "math") {
              const mathPattern = new RegExp(
                [
                  /\\\[[^\]]+\\\]/,
                  /\[[^\]]+\]/,
                  /\$\$[^$]+\$\$/,
                  /\\\([^)]+\\\)/,
                  /\$[^$]+\$/,
                  /\\frac\{[^}]+\}\{[^}]+\}/,
                  /\\?rac\{[^}]+\}\{[^}]+\}/,
                  /[A-Z]propto[A-Z]\^[0-9]+/,
                  /[A-Z]\s*=\s*sqrt\[[0-9]+\{[A-Z]\}\]/,
                  /[bm]_\d+/,
                  /[bm]_\{\d+\}/,
                  /[A-Z]\s*\\propto\s*[A-Z]\^\{[^}]+\}/,
                  /[A-Z]\s*=\s*[0-9]+[A-Z]_\{odot\}/,
                  /\([^)]*[A-Z]_\{odot\}[^)]*\)/,
                ]
                  .map((pattern) => pattern.source)
                  .join("|")
              );

              if (segment.content.match(mathPattern)) {
                return (
                  <MathRenderer key={index} mathExpression={segment.content} />
                );
              }
            }
            return segment.content;
          });
        }

        if (node.nodeType === Node.ELEMENT_NODE && node instanceof Element) {
          const props: { [key: string]: any } = {};

          Array.from(node.attributes).forEach((attr) => {
            let name = attr.name;
            if (name === "class") name = "className";
            props[name] = attr.value;
          });

          const children = Array.from(node.childNodes).map((child, index) => (
            <React.Fragment key={index}>{processNode(child)}</React.Fragment>
          ));

          return React.createElement(
            node.tagName.toLowerCase(),
            { ...props, key: Math.random() },
            ...children
          );
        }

        return null;
      };

      return Array.from(doc.body.childNodes).map((node, index) => (
        <React.Fragment key={index}>{processNode(node)}</React.Fragment>
      ));
    };

    setParsedContent(parseMathAndHtml(content));
  }, [content, isClient]);

  if (!isClient) {
    return <div className="content-parser" />;
  }

  return <div className="content-parser">{parsedContent}</div>;
};

export default ContentParser;
