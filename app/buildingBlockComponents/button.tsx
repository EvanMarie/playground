import { MouseEventHandler, MutableRefObject } from "react";
import Icon from "./icon";
import { motion } from "framer-motion";
import Text from "./text";
import { NavLink } from "@remix-run/react";
import BouncingDots from "./bouncingDots";
import { FlexFull, HStack } from "./mainContainers";

// Define the type of button
export type ButtonType =
  | "normal"
  | "smallNormal"
  | "negative"
  | "smallNegative"
  | "unstyled"
  | "smallUnstyled";

// Props for the combined button component
interface ButtonProps {
  className?: string;
  buttonText?: string;
  padding?: string;
  to?: string; // Optional, if present will render a NavLink
  target?: string;
  ref?: MutableRefObject<HTMLButtonElement | null>;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  iconLeft?: React.ComponentType<{ className?: string }>;
  iconRight?: React.ComponentType<{ className?: string }>;
  iconStyle?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  width?: string;
  height?: string;
  textStroke?: string;
  type?: ButtonType | "normal";
  onMouseEnter?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  className,
  buttonText = "",
  padding = "px-[1vh] py-[0px]",
  to, // Optional: If passed, will render a NavLink
  target,
  ref,
  onClick,
  iconLeft,
  iconRight,
  iconStyle,
  isLoading,
  isDisabled,
  htmlType = "button",
  width = "w-fit",
  height,
  textStroke = "text-stroke-0-900 hover:text-stroke-5-900",
  type = "normal",
  onMouseEnter,
}: ButtonProps) {
  // Determine the button classes based on type
  const buttonClass =
    type === "normal"
      ? "normalButtonStyles"
      : type === "smallNormal"
      ? "smallButtonStyles"
      : type === "negative"
      ? "negativeButtonStyles"
      : type === "smallNegative"
      ? "smallNegativeButtonStyles"
      : type === "unstyled"
      ? "unstyledButtonStyles"
      : "smallUnstyledButtonStyles";

  // Set button height based on type
  const buttonHeight = height
    ? height
    : type === "normal"
    ? "h-[3.5vh]"
    : type === "smallNormal"
    ? "h-[2.6vh]"
    : type === "negative"
    ? "h-[3.5vh]"
    : type === "smallNegative"
    ? "h-[2.6vh]"
    : "h-[2.6vh]";

  // Set icon size based on type
  const displayIconSize =
    type === "normal"
      ? "text-[2.5vh]"
      : type === "smallNormal"
      ? "text-[1.7vh]"
      : type === "negative"
      ? "text-[2.3vh]"
      : type === "smallNegative"
      ? "text-[1.7vh]"
      : "text-[1.7vh]";

  // Set font size based on type
  const fontSize =
    type === "normal"
      ? "text-[2.1vh]"
      : type === "smallNormal"
      ? "text-[1.5vh]"
      : type === "negative"
      ? "text-[2.1vh]"
      : type === "smallNegative"
      ? "text-[1.5vh]"
      : "text-[1.5vh]";

  // Combine all classes and include conditional classes for disabled state
  const combinedClasses = `gap-0.7vh hover:cursor-pointer ${buttonClass} ${width} ${buttonHeight} ${className} ${padding} font-500 relative transition-400 ${
    isDisabled ? "opacity-40 cursor-not-allowed" : ""
  }`;

  // Render the button as either a NavLink or a normal button based on the "to" prop
  const ButtonContent = (
    <motion.button
      className="hover:cursor-pointer"
      onClick={!isDisabled ? onClick : undefined}
      disabled={isDisabled}
      type={htmlType}
      ref={ref}
      whileHover={{ scale: 1.01, rotate: -0.6 }}
      whileTap={{ scale: 0.97, rotate: 0.6 }}
      onMouseEnter={onMouseEnter}
    >
      <HStack
        className={combinedClasses}
        style={{
          transition:
            "background-color 0.4s ease-in-out, color 0.4s ease-in-out, border-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out, text-shadow 0.4s ease-in-out",
        }}
      >
        {isLoading && buttonText !== "" && type !== "unstyled" && (
          <FlexFull className="absolute top-0 left-0 h-full justify-center items-center z-10">
            <BouncingDots dotCount={3} color="white" dotSize={7} speed="3s" />
          </FlexFull>
        )}

        {iconLeft && (
          <Icon
            icon={iconLeft}
            iconClassName={`${displayIconSize} ${iconStyle}`}
          />
        )}
        <Text className={`${textStroke} ${fontSize} text-nowrap`}>
          {buttonText}
        </Text>
        {iconRight && (
          <Icon
            icon={iconRight}
            iconClassName={`${displayIconSize} ${iconStyle}`}
          />
        )}
      </HStack>
    </motion.button>
  );

  // If the "to" prop is present, return the NavLink; otherwise, return the standard button
  return to ? (
    <NavLink to={to} target={target}>
      {ButtonContent}
    </NavLink>
  ) : (
    ButtonContent
  );
}
