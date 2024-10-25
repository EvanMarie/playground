import { motion } from "framer-motion";
import {
  transitionVariants,
  VStack,
} from "~/buildingBlockComponents/mainContainers";

export default function StaggeredTextLines({
  textLines,
  alignContent = "items-end",
  initialDelay = 1.5,
  textClassName,
  gap = "gap-1.5vh",
  hoverClassName,
  animationVariants = "fadeSlideInRightQuarter",
  staggerDelay = 0.2,
}: {
  textLines: string[];
  alignContent?: string;
  initialDelay?: number;
  textClassName?: string;
  gap?: string;
  hoverClassName?: string;
  staggerDelay?: number;
  animationVariants?: keyof typeof transitionVariants;
}) {
  const variants = transitionVariants[animationVariants];
  return (
    <VStack align={alignContent} gap={gap}>
      {textLines.map((textLine, index) => (
        <motion.div
          key={index}
          initial={variants.initial as any}
          animate={variants.animate as any}
          transition={{
            delay: initialDelay + index * staggerDelay,
            type: "spring",
            stiffness: 44,
          }}
          className={`${textClassName} ${hoverClassName}`}
        >
          {textLine}
        </motion.div>
      ))}
    </VStack>
  );
}
