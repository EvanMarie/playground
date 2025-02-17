import { marked } from "marked";
import "katex/dist/katex.min.css";

interface MardownToPDFRendererProps {
  content: string;
}

const preprocessContent = (content: string): string => {
  return content
    .replace(/\(\(\s*(.*?)\s*\)\)/g, "$$$1$$")
    .replace(/\\\(/g, "$")
    .replace(/\\\)/g, "$")
    .replace(/\\\[/g, "$$")
    .replace(/\\\]/g, "$$");
};

const MardownToPDFRenderer = ({
  content,
}: MardownToPDFRendererProps): string => {
  const processedContent = preprocessContent(content);
  return marked(processedContent);
};

export default MardownToPDFRenderer;
