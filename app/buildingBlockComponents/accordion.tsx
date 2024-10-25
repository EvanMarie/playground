import { useState, ReactNode, CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiExpandVertical, BiCollapseVertical } from "react-icons/bi";
import Text from "./text";
import Icon from "./icon";
import { FlexFull, HStack, HStackFull, VStackFull } from "./mainContainers";

interface AccordionProps {
  titleText?: string;
  titleComponent?: ReactNode;
  titlePadding?: string;
  children: ReactNode;
  titleStyles?: string;
  contentStyles?: string;
  titleTextClassName?: string;
  index?: number;
  iconColor?: string;
  iconSize?: string;
  isDefaultOpen?: boolean;
  shadow?: string;
  titleIcon?: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
  iconClassName?: string;
}

export default function Accordion({
  titleText,
  titleComponent,
  children,
  titlePadding = "pl-1vh pr-1vh py-0.6vh",
  titleStyles = "bg-col-300 hover:bg-col-200 bg-gradient-to-r from-col-140 via-col-120 to-col-140 transition-300 shadowNarrowTight hover:shadowNarrowLoose",
  contentStyles = "p-1vh md:p-2vh bg-col-100 bg-radial1op50 text-col-900 text-stroke-6-900 lightTextShadow h-fit ",
  titleTextClassName = "text-col-800 text-stroke-10-800 text-2.5vh font-cursive lightTextShadow leading-[2.5vh]",
  iconColor = "text-col-900",
  iconSize = "text-2.3vh",
  index,
  shadow = "shadowNarrowNormal",
  titleIcon,
  iconClassName = "text-2.3vh text-col-900",
  isDefaultOpen = (index || 0) < 4 ? true : false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  return (
    <FlexFull className={`${shadow} bg-col-200 rounded-[0.6vh]`}>
      <FlexFull className="border-900-md rounded-[0.6vh]">
        <VStackFull
          className="overflow-hidden rounded-[0.4vh] shadowNarrowNormal"
          gap="gap-[0px]"
          align="items-start"
        >
          <button
            className={`w-full text-left ${titlePadding} ${titleStyles} transition-300 ${
              isOpen ? "rounded-t-[0.4vh] rounded-b-none" : "rounded-[0.4vh]"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <HStackFull className="rounded-none justify-between hover:cursor-pointer items-center">
              <HStack
                className="items-center hover:cursor-pointer"
                gap="gap-1vh"
              >
                {titleIcon && (
                  <Icon iconClassName={iconClassName} icon={titleIcon} />
                )}
                {titleText && (
                  <Text className={titleTextClassName} noOfLines={1}>
                    {titleText}
                  </Text>
                )}
              </HStack>
              {titleComponent || null}
              <Icon
                icon={isOpen ? BiCollapseVertical : BiExpandVertical}
                iconClassName={`${iconSize} ${iconColor}`}
              />
            </HStackFull>
          </button>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { height: "auto", opacity: 1 },
                  collapsed: { height: 0, opacity: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="w-full overflow-hidden rounded-none "
              >
                <div className={`w-full ${contentStyles} rounded-none`}>
                  {children}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </VStackFull>
      </FlexFull>
    </FlexFull>
  );
}
