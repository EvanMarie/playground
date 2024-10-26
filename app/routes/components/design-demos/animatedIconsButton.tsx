import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Icon from "~/buildingBlockComponents/icon";
import { HStack } from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function AnimatedIconsButton({
  text,
  bg = "",
  textColor = "text-cyan-300",
  border = "border-cyan-300 border-[0.2vh]",
  padding = "px-4vh py-1.5vh",
  rounded = "rounded-4vh",
  hoverScale = "hover:scale-102",
  gap = "gap-1.5vh",
  textSize = "text-xl",
  iconSize = "text-xl",
  hoverAnimation = "group-hover:translate-x-[2vh]",
  icon = IoIosArrowForward,
}: {
  text: string;
  bg?: string;
  textColor?: string;
  border?: string;
  padding?: string;
  rounded?: string;
  hoverScale?: string;
  gap?: string;
  textSize?: string;
  iconSize?: string;
  hoverAnimation?: string;
  icon?: any;
}) {
  return (
    <ScrollTransition>
      <motion.button
        className={`${textColor} ${border} ${bg} ${padding} ${rounded} ${hoverScale} transition-300 z-10 group`}
      >
        <HStack className="items-center hover:cursor-pointer" gap={gap}>
          <span className={textSize}>{text}</span>
          <HStack gap="gap-[0px]" className="hover:cursor-pointer">
            <Icon
              icon={IoIosArrowForward}
              iconClassName={`${iconSize} group-hover:translate-x-[2vh] transition-500`}
            />
            <Icon
              icon={IoIosArrowForward}
              iconClassName={`${iconSize} group-hover:translate-x-[2vh]  transition-400`}
            />
            <Icon
              icon={IoIosArrowForward}
              iconClassName={`${iconSize} group-hover:translate-x-[2vh] transition-300`}
            />
          </HStack>
        </HStack>
      </motion.button>
    </ScrollTransition>
  );
}
