import { Text, View, Link, StyleSheet } from "@react-pdf/renderer";
import { parse } from "node-html-parser";
import React from "react";
import { PDFVStackFull } from "../../modules+/pdfPrinting/pdfBuildingComponents";

const styles = StyleSheet.create({
  // Text wrapper styles to ensure consistent alignment
  textWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  h1: {
    fontSize: "16px",
    fontFamily: "Roboto-Semibold",
    marginBottom: "8px",
    color: "indigo",
    textIndent: 0,
  },
  h2: {
    fontSize: "13px",
    fontFamily: "Roboto-Semibold",
    marginBottom: "5px",
    color: "indigo",
    textIndent: 0,
  },
  h3: {
    fontSize: "11px",
    fontFamily: "Roboto-Semibold",
    marginBottom: "3px",
    color: "indigo",
    textIndent: 0,
  },
  p: {
    fontSize: "10px",
    marginBottom: "8px",
    textIndent: 0,
  },
  ul: {
    marginLeft: "20px",
    marginBottom: "5px",
  },
  li: {
    fontSize: "10px",
    marginBottom: "2px",
    paddingLeft: "5px",
  },
  nestedUl: {
    marginLeft: "15px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  nestedLi: {
    fontSize: "10px",
    marginBottom: "2px",
    paddingLeft: "5px",
  },
  strong: {
    fontFamily: "Roboto-Semibold",
    color: "indigo",
  },
  link: {
    color: "darkviolet",
    textDecoration: "underline",
    fontFamily: "Roboto-Semibold",
    marginBottom: "5px",
  },
  // Container styles
  ulContainer: {
    marginLeft: "20px",
    marginBottom: "8px",
  },
  nestedUlContainer: {
    marginLeft: "15px",
    marginTop: "5px",
    marginBottom: "3px",
  },
  liContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "5px",
  },
  nestedLiContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3px",
  },

  // Text styles
  liText: {
    fontSize: "10px",
    textIndent: 0,
    paddingLeft: "5px",
  },
  nestedLiText: {
    fontSize: "10px",
    textIndent: 0,
    paddingLeft: "5px",
  },

  // Update multi-item list styles
  multiItemLiContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3px",
  },
  multiItemNestedLiContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "2px",
  },
  multiItemLiText: {
    fontSize: "10px",
    textIndent: 0,
    paddingLeft: "5px",
    display: "flex",
    flexDirection: "row",
  },
  multiItemNestedLiText: {
    fontSize: "10px",
    textIndent: 0,
    paddingLeft: "5px",
    display: "flex",
    flexDirection: "row",
  },
  arrowPrefix: {
    fontSize: "10px",
    marginRight: "5px",
    color: "indigo",
    fontFamily: "Roboto-Semibold",
  },
  bulletPrefix: {
    fontSize: "10px",
    marginRight: "5px",
    color: "indigo",
  },

  contentBlock: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#f0ffff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginVertical: "8px",
    display: "flex",
    flexDirection: "column",
  },
  // Add these new styles for lists inside content blocks
  contentBlockUl: {
    marginLeft: "20px",
    marginBottom: "8px",
  },
  contentBlockLi: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "5px",
  },
  contentBlockLiText: {
    fontSize: "10px",
    textIndent: 0,
    paddingLeft: "5px",
  },
  contentBlockNestedUl: {
    marginLeft: "15px",
    marginTop: "5px",
    marginBottom: "3px",
  },
  contentBlockNestedLi: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "3px",
  },
  contentBlockNestedLiText: {
    fontSize: "10px",
    textIndent: 0,
    paddingLeft: "5px",
  },
  incorrect: {
    color: "#dc2626", // red-600
    fontFamily: "Roboto-Bold",
    fontSize: "12px",
  },
  correct: {
    color: "#16a34a", // green-600
    fontFamily: "Roboto-Bold",
    fontSize: "12px",
  },
});

function renderNode(
  node: any,
  depth: number = 0,
  isMultiItem: boolean = false,
  isInContentBlock: boolean = false
): React.ReactNode {
  if (node.nodeType === 3) {
    // Handle special characters in text nodes
    const text = node.text;
    if (text.includes("❌") || text.includes("✓") || text.includes("✔️")) {
      const parts = text.split(/(❌|✓|✔️)/);
      return parts.map((part: string, index: number) => {
        if (part === "❌") {
          return (
            <Text key={index} style={styles.incorrect}>
              Incorrect
            </Text>
          );
        } else if (part === "✓" || part === "✔️") {
          return (
            <Text key={index} style={styles.correct}>
              Correct
            </Text>
          );
        }
        return part;
      });
    }
    return text;
  }

  // Special handling for ul elements to check number of li children
  if (node.tagName?.toLowerCase() === "ul") {
    const liCount = node.childNodes.filter(
      (child: any) => child.tagName?.toLowerCase() === "li"
    ).length;
    const hasMultipleItems = liCount > 1;

    const children = node.childNodes.map((child: any, index: number) => (
      <React.Fragment key={index}>
        {renderNode(child, depth, hasMultipleItems, isInContentBlock)}
      </React.Fragment>
    ));

    const ulStyle = isInContentBlock
      ? depth > 0
        ? styles.contentBlockNestedUl
        : styles.contentBlockUl
      : depth > 0
      ? styles.nestedUlContainer
      : styles.ulContainer;

    return <View style={ulStyle}>{children}</View>;
  }

  // Special handling for list items with nested content
  if (node.tagName?.toLowerCase() === "li") {
    const textContent: any[] = [];
    const nestedLists: any[] = [];

    node.childNodes.forEach((child: any) => {
      if (child.tagName?.toLowerCase() === "ul") {
        nestedLists.push(renderNode(child, depth + 1, false, isInContentBlock));
      } else {
        textContent.push(renderNode(child, depth, false, isInContentBlock));
      }
    });

    const containerStyle = isInContentBlock
      ? depth > 0
        ? styles.contentBlockNestedLi
        : styles.contentBlockLi
      : isMultiItem
      ? depth > 0
        ? styles.multiItemNestedLiContainer
        : styles.multiItemLiContainer
      : depth > 0
      ? styles.nestedLiContainer
      : styles.liContainer;

    const textStyle = isInContentBlock
      ? depth > 0
        ? styles.contentBlockNestedLiText
        : styles.contentBlockLiText
      : isMultiItem
      ? depth > 0
        ? styles.multiItemNestedLiText
        : styles.multiItemLiText
      : depth > 0
      ? styles.nestedLiText
      : styles.liText;

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>
          <Text style={styles.bulletPrefix}>
            {depth === 0 ? "\u2022" : "-"}{" "}
          </Text>
          {textContent}
        </Text>
        {nestedLists}
      </View>
    );
  }

  const children = node.childNodes.map((child: any, index: number) => (
    <React.Fragment key={index}>
      {renderNode(child, depth, false, isInContentBlock)}
    </React.Fragment>
  ));

  switch (node.tagName?.toLowerCase()) {
    case "h1":
      return (
        <View style={styles.textWrapper}>
          <Text style={styles.h1}>{children}</Text>
        </View>
      );
    case "h2":
      return (
        <View style={styles.textWrapper}>
          <Text style={styles.h2}>{children}</Text>
        </View>
      );
    case "h3":
      return (
        <View style={styles.textWrapper}>
          <Text style={styles.h3}>{children}</Text>
        </View>
      );
    case "p":
      return (
        <View style={styles.textWrapper}>
          <Text style={styles.p}>{children}</Text>
        </View>
      );
    case "strong":
      return <Text style={styles.strong}>{children}</Text>;
    case "a":
      const href = node.getAttribute("href");
      return (
        <Link style={styles.link} src={href}>
          {children}: {href}
        </Link>
      );
    case "article":
    case "section":
    case "figure":
      return (
        <View style={[styles.textWrapper, styles.contentBlock]} wrap={false}>
          {node.childNodes.map((child: any, index: number) => (
            <React.Fragment key={index}>
              {renderNode(child, depth, false, true)}
            </React.Fragment>
          ))}
        </View>
      );
    default:
      return children;
  }
}

export default function HTMLToPDFContent({
  content,
  breakWithPage = true,
  outerPadding = "10px",
  padding = "10px 20px 10px 20px",
  backgroundColor,
  borderRadius = "10px",
  border,
  borderColor,
  isMarkdown = false,
}: {
  content: string;
  breakWithPage?: boolean;
  outerPadding?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  borderColor?: string;
  isMarkdown?: boolean;
}) {
  // Remove extra line breaks and normalize whitespace
  const cleanedContent = content
    .replace(/\n+/g, " ") // Replace multiple line breaks with a single space
    .replace(/\s+/g, " ") // Normalize multiple spaces into a single space
    .trim(); // Remove leading/trailing whitespace

  const root = parse(cleanedContent);

  return (
    <>
      <View
        key={content}
        style={{
          padding: outerPadding,
        }}
        wrap={breakWithPage ? true : false}
      >
        <PDFVStackFull
          style={{
            padding: isMarkdown ? "" : padding,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            border: border,
            borderColor: borderColor,
          }}
        >
          {renderNode(root)}
        </PDFVStackFull>
      </View>
    </>
  );
}
