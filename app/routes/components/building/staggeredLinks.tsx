import { motion } from "framer-motion";
import { CSSProperties } from "react";
import { PiFlowerLotus } from "react-icons/pi";
import Icon from "~/buildingBlockComponents/icon";
import {
  Flex,
  HStack,
  transitionVariants,
} from "~/buildingBlockComponents/mainContainers";

export type StaggeredLinkType = {
  text: string;
  icon?: string;
  link: string;
};

export default function StaggeredLinks({
  links,
  direction = "flex-col",
  initialDelay = 0.2,
  textClassName = "transition-300 textShadow",
  iconClassName,
  gap = "gap-1.5vh",
  animationVariants = "fadeSlideInRightQuarter",
  staggerDelay = 0.1,
  containerClassName = "items-end",
  textContainerClassName,
  hoverIcon = PiFlowerLotus,
  transitionType = "spring",
  stiffness = 44,
  ease,
  transitionDuration,
  iconGap = "gap-1vh",
  buttonClassName = "hover:border-b-cyan-300 rounded-none transition-300 hover:text-cyan-300",
}: {
  links: StaggeredLinkType[];
  direction?: string;
  initialDelay?: number;
  textClassName?: string;
  iconClassName?: string;
  iconGap?: string;
  textContainerClassName?: string;
  gap?: string;
  staggerDelay?: number;
  transitionType?: string;
  stiffness?: number;
  ease?: string;
  transitionDuration?: number;
  containerClassName?: string;
  animationVariants?: keyof typeof transitionVariants;
  buttonClassName?: string;
  hoverIcon?: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
}) {
  const variants = transitionVariants[animationVariants];
  return (
    <Flex className={`${gap} ${direction} ${containerClassName} z-10`}>
      {links.map((link, index) => (
        <motion.button
          key={index}
          initial={variants.initial as any}
          animate={variants.animate as any}
          transition={{
            delay: initialDelay + index * staggerDelay,
            type: transitionType,
            stiffness: stiffness,
            ease: ease ? ease : undefined,
            duration: transitionDuration ? transitionDuration : undefined,
          }}
          className={`${buttonClassName} group hover:cursor-pointer border-transparent border-[0.2vh]`}
        >
          <HStack className="items-center hover:cursor-pointer" gap={iconGap}>
            {hoverIcon && (
              <Icon
                icon={hoverIcon}
                iconClassName={`text-transparent ${iconClassName} transition-300`}
              />
            )}
            <Flex className={textContainerClassName}>
              <span className={textClassName}>{link.text}</span>
            </Flex>
          </HStack>
        </motion.button>
      ))}
    </Flex>
  );
}
