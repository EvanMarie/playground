import { motion } from "framer-motion";
import { VStack } from "~/buildingBlockComponents/mainContainers";

export default function StaggeredTextLines({
  textLines,
  alignContent = "items-end",
  initialDelay = 1.5,
}: {
  textLines: string[];
  alignContent?: string;
  initialDelay?: number;
}) {
  return (
    <VStack align={alignContent}>
      {textLines.map((textLine, index) => (
        <motion.div
          key={index}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: initialDelay + index * 0.3,
            type: "spring",
            stiffness: 44,
          }}
        >
          {textLine}
        </motion.div>
      ))}
    </VStack>
  );
}
