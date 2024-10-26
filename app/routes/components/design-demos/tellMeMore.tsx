import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import Icon from "~/buildingBlockComponents/icon";
import { HStack } from "~/buildingBlockComponents/mainContainers";

export default function TellMeMoreButton() {
  return (
    <motion.button className="text-cyan-300 group border-cyan-300 border-[0.2vh] px-4vh py-1.5vh rounded-4vh hover:scale-102 transition-300 z-10 ">
      <HStack className="items-center hover:cursor-pointer" gap="gap-1.5vh">
        <span className="text-xl">Tell Me More</span>
        <HStack gap="gap-[0px]" className="hover:cursor-pointer">
          <Icon
            icon={IoIosArrowForward}
            iconClassName="text-xl group-hover:translate-x-[2vh] transition-500"
          />
          <Icon
            icon={IoIosArrowForward}
            iconClassName="text-xl group-hover:translate-x-[2vh] transition-400"
          />
          <Icon
            icon={IoIosArrowForward}
            iconClassName="text-xl group-hover:translate-x-[2vh] transition-300"
          />
        </HStack>
      </HStack>
    </motion.button>
  );
}
