import { motion } from "framer-motion";
import { VStack } from "~/buildingBlockComponents/mainContainers";

export default function StaggeredTextLines({
  textLines,
  alignContent = "items-start",
}: {
  textLines: string[];
  alignContent?: string;
}) {
  return (
    <VStack align={alignContent}>
      {textLines.map((textLine, index) => (
        <motion.div
          key={index}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            delay: (0.5 + index) * 0.3,
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
