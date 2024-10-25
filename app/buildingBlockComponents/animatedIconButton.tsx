import { NavLink } from "@remix-run/react";
import { motion } from "framer-motion";
import Icon from "./icon";
import Text from "./text";
import { HStack } from "./mainContainers";

export default function AnimatedIconButton({
  link,
  onClick,
  type,
  target,
  icon,
  text,
  isActive,
  iconClassName = "text-[2.5vh]",
  iconRotation = "group-hover:rotate-90",
  dimensionsClassName = `h-[3.5vh] px-[1vh] text-[1.5vh] md:text-[2vh]`,
}: {
  link?: string;
  onClick?: () => void;
  type?: "submit" | "button";
  target?: string;
  icon?: any;
  iconClassName?: string;
  iconRotation?: string;
  text: string;
  isActive?: boolean;
  dimensionsClassName?: string;
}) {
  const defaultStyles =
    "bg-col-800 hover:bg-col-700 bg-gradient-to-br from-col-130 via-col-230 to-col-130 text-col-white subtleTextShadow shadowNarrowTight";
  return (
    <>
      {link ? (
        <NavLink to={link} className="group" target={target}>
          <motion.div
            whileHover={{
              scale: isActive ? 1 : 1.05,
              transition: { duration: 0.4 },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.4 },
            }}
          >
            <HStack
              className={` hover:cursor-pointer gap-0.6vh ${dimensionsClassName} ${defaultStyles} items-center`}
              gap="gap-[0.4vh]"
            >
              {icon && (
                <Icon
                  icon={icon}
                  hoverCursor="cursor-pointer"
                  iconClassName={iconClassName}
                  containerClassName={`${iconRotation} transition-400`}
                />
              )}
              {text && <Text>{text}</Text>}
            </HStack>
          </motion.div>
        </NavLink>
      ) : (
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.4 },
          }}
          whileTap={{
            scale: 0.9,
            transition: { duration: 0.4 },
          }}
          className="group"
          onClick={onClick}
          type={type}
        >
          <HStack
            className={` hover:cursor-pointer  gap-0.6vh ${dimensionsClassName} ${defaultStyles}  items-center`}
          >
            {icon && (
              <Icon
                hoverCursor="cursor-pointer"
                icon={icon}
                iconClassName={iconClassName}
                containerClassName={`${iconRotation} transition-400`}
              />
            )}
            {text && <Text>{text}</Text>}
          </HStack>
        </motion.button>
      )}
    </>
  );
}
