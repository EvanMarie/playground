import { Flex, Wrap } from "~/buildingBlockComponents/mainContainers";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function PopUpContent({
  contents,
  height = "100svh",
  width = "100vw",
  contentPadding = "p-1.5vh",
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

  // Animation variants for staggering and zooming in
  const itemVariants = {
    hidden: { opacity: 0, scale: 0, x: 0, y: 0 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        delay: 0.1 + index * 0.1,
        type: "spring",
        stiffness: 70,
      },
    }),
  };

  return (
    <Flex className="bg-gray-800/40" style={{ width, height }}>
      <Wrap
        className="w-full h-full justify-evenly"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        {contents.map((content, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            style={{
              width: contentWidth,
              height: contentHeight,
              maxWidth: contentWidth,
              minWidth: contentWidth,
              maxHeight: contentHeight,
              minHeight: contentHeight,
            }}
            className={`flex-shrink-0 flex ${contentPadding}`}
          >
            {content}
          </motion.div>
        ))}
      </Wrap>
    </Flex>
  );
}
