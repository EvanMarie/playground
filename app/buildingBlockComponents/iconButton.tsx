import { MouseEventHandler, MutableRefObject, RefObject } from "react";
import { SpinnerSmall } from "./spinner";
import Icon from "./icon";
import Tooltip, { TooltipPlacement } from "./tooltip";
import { motion } from "framer-motion";
import { Flex } from "./mainContainers";
import { NavLink } from "@remix-run/react";

// Define the type of button
export type IconButtonType =
  | "normal"
  | "smallNormal"
  | "largeNormal"
  | "negative"
  | "smallNegative"
  | "largeNegative"
  | "unstyled"
  | "smallUnstyled"
  | "largeUnstyled";

// Props for the combined IconButton/NavIconButton component
interface IconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  containerClassName?: string;
  iconClassName?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  ref?: MutableRefObject<HTMLButtonElement | null> | RefObject<HTMLDivElement>;
  isLoading?: boolean;
  isDisabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  label?: string;
  tooltipPlacement?: TooltipPlacement;
  style?: React.CSSProperties;
  tabIndex?: number;
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
  to?: string;
  target?: string;
  type?: IconButtonType;
}

// Combined IconButton component
export default function IconButton({
  icon,
  containerClassName,
  iconClassName,
  onClick,
  ref,
  isLoading,
  isDisabled,
  htmlType = "button",
  label,
  tooltipPlacement = "bottom",
  style,
  tabIndex = -1,
  onMouseEnter,
  to, // Optional: If passed, renders as a NavLink
  target,
  type = "normal",
}: IconButtonProps) {
  // Determine the button classes based on type
  const buttonClass =
    type === "normal"
      ? "normalButtonStyles"
      : type === "smallNormal"
      ? "smallButtonStyles"
      : type === "largeNormal"
      ? "largeButtonStyles"
      : type === "negative"
      ? "negativeButtonStyles"
      : type === "smallNegative"
      ? "smallNegativeButtonStyles"
      : type === "largeNegative"
      ? "largeNegativeButtonStyles"
      : type === "unstyled"
      ? "unstyledButtonStyles"
      : type === "smallUnstyled"
      ? "smallUnstyledButtonStyles"
      : "largeUnstyledButtonStyles";

  // Set icon size based on type
  const displayIconSize =
    type === "normal"
      ? "text-[2.5vh]"
      : type === "smallNormal"
      ? "text-[1.6vh]"
      : type === "largeNormal"
      ? "text-[4vh]"
      : type === "negative"
      ? "text-[2.5vh]"
      : type === "smallNegative"
      ? "text-[1.6vh]"
      : type === "largeNegative"
      ? "text-[5vh]"
      : type === "unstyled"
      ? "text-[2.5vh]"
      : type === "smallUnstyled"
      ? "text-[1.6vh]"
      : "text-[3.5vh]";

  // Set icon button size based on type
  const iconButtonSize =
    type === "normal"
      ? "w-[3.5vh] h-[3.5vh]"
      : type === "smallNormal"
      ? "w-[3vh] h-[3vh]"
      : type === "largeNormal"
      ? "w-[6vh] h-[6vh]"
      : type === "negative"
      ? "w-[3.5vh] h-[3.5vh]"
      : type === "smallNegative"
      ? "w-[3vh] h-[3vh]"
      : type === "largeNegative"
      ? "w-[6vh] h-[6vh]"
      : "w-[3.5vh] h-[3.5vh]";

  // Render button content
  const ButtonContent = (
    <motion.button
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      type={htmlType}
      ref={ref as MutableRefObject<HTMLButtonElement>}
      className={containerClassName}
      whileHover={{ scale: 1.01, rotate: -0.6 }}
      whileTap={{ scale: 0.97, rotate: 0.6 }}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
    >
      <Flex className={`${iconButtonSize} ${buttonClass}`} style={style}>
        {isLoading ? (
          <SpinnerSmall />
        ) : (
          <Icon
            icon={icon}
            iconClassName={`${displayIconSize} ${iconClassName}`}
            containerClassName="flex w-full h-full justify-center items-center hover:cursor-pointer"
          />
        )}
      </Flex>
    </motion.button>
  );

  // Render as NavLink if "to" is provided, otherwise as a standard button
  return (
    <Tooltip label={label} placement={tooltipPlacement}>
      {to ? (
        <NavLink to={to} target={target}>
          <motion.div
            className={`flex ${containerClassName}`}
            ref={ref as RefObject<HTMLDivElement>}
            whileHover={{ scale: 1.01, rotate: -0.6 }}
            whileTap={{ scale: 0.97, rotate: 0.6 }}
          >
            {ButtonContent}
          </motion.div>
        </NavLink>
      ) : (
        ButtonContent
      )}
    </Tooltip>
  );
}
