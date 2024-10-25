import { motion } from "framer-motion";
import {
  Flex,
  transitionVariants,
  VStack,
} from "~/buildingBlockComponents/mainContainers";

export type StaggeredLinkType = {
  text: string;
  icon?: string;
  link: string;
};

export default function StaggeredLinks({
  links,
  direction = "flex-col",
  initialDelay = 1.5,
  textClassName,
  gap = "gap-1.5vh",
  hoverClassName,
  animationVariants = "fadeSlideInRightQuarter",
  staggerDelay = 0.1,
  containerClassName = "items-end",
}: {
  links: StaggeredLinkType[];
  direction?: string;
  initialDelay?: number;
  textClassName?: string;
  gap?: string;
  hoverClassName?: string;
  staggerDelay?: number;
  containerClassName?: string;
  animationVariants?: keyof typeof transitionVariants;
}) {
  const variants = transitionVariants[animationVariants];
  return (
    <Flex className={`${gap} ${direction} ${containerClassName}`}>
      {links.map((link, index) => (
        <motion.button
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
          {link.text}
        </motion.button>
      ))}
    </Flex>
  );
}
