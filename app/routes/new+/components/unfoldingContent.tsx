import Transition, {
  Flex,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import { useState, useEffect } from "react";

export default function UnfoldingContent({
  contents,
  height = "100svh",
  width = "100vw",
  contentPadding = "p-1vh",
}: {
  contents: React.ReactNode[];
  height?: string;
  width?: string;
  contentPadding?: string;
}) {
  const lenContents = contents.length;

  // State to store calculated dimensions after mounting
  const [containerHeight, setContainerHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  // Effect to calculate dimensions only on the client
  useEffect(() => {
    const parseDimension = (dimension: string, reference: number) => {
      if (dimension.endsWith("vh") || dimension.endsWith("svh")) {
        return (reference * parseFloat(dimension)) / 100;
      } else if (dimension.endsWith("vw")) {
        return (window.innerWidth * parseFloat(dimension)) / 100;
      } else if (dimension.endsWith("px")) {
        return parseFloat(dimension);
      }
      return reference;
    };

    // Set dimensions based on parsed values
    setContainerHeight(parseDimension(height, window.innerHeight));
    setContainerWidth(parseDimension(width, window.innerWidth));
  }, [height, width]);

  // Calculate columns and rows
  const cols = Math.ceil(Math.sqrt(lenContents));
  const rows = Math.ceil(lenContents / cols);

  // Calculate content sizes
  const contentWidth = `${(containerWidth / cols).toFixed(2)}px`;
  const contentHeight = `${(containerHeight / rows).toFixed(2)}px`;

  return (
    <Flex className="bg-gray-800/40" style={{ width, height }}>
      <Wrap
        className="w-full h-full justify-evenly"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {contents.map((content, index) => (
          <Transition
            delay={0.7 + index * 0.1}
            key={index}
            style={{
              width: contentWidth,
              height: contentHeight,
              maxWidth: contentWidth,
              minWidth: contentWidth,
              maxHeight: contentHeight,
              minHeight: contentHeight,
            }}
            className={`flex-shrink-0 ${contentPadding}`}
          >
            {content}
          </Transition>
        ))}
      </Wrap>
    </Flex>
  );
}
