import React, { CSSProperties, MouseEvent, ReactNode, RefObject } from "react";
import { motion, Variants } from "framer-motion";

// -------------------------- BOX COMPONENT -------------------------- //
interface BoxProps {
  children?: ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  ref?: RefObject<HTMLDivElement>;
  tabIndex?: number;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps & any>(
  (
    {
      children,
      tabIndex = -1,
      onClick,
      onKeyDown,
      style = {},
      className = "",
      onMouseEnter,
      onMouseLeave,
      ...motionProps // Pass motion props
    },
    ref
  ) => {
    return (
      <motion.div
        role="button"
        tabIndex={tabIndex}
        className={`${className} hover:cursor-default`}
        style={{ ...style }}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        {...motionProps} // Spread motion props onto the component
      >
        {children}
      </motion.div>
    );
  }
);
Box.displayName = "Box";

// -------------------------- FLEX COMPONENT -------------------------- //
interface FlexProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void;
  id?: string;
  tabIndex?: number;
}

export const Flex = React.forwardRef<HTMLDivElement, FlexProps & any>(
  (
    {
      children,
      style,
      onClick,
      className = "",
      id,
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        id={id}
        className={`flex ${className}`}
        style={{ ...style }}
        onClick={onClick as any}
        tabIndex={tabIndex}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
Flex.displayName = "Flex";

// -------------------------- FLEX FULL COMPONENT -------------------------- //
export const FlexFull = React.forwardRef<HTMLDivElement, FlexProps & any>(
  (
    { children, className = "", onClick, id, style = {}, ...motionProps },
    ref
  ) => {
    return (
      <Flex
        className={`w-full ${className}`}
        id={id}
        ref={ref}
        onClick={onClick}
        style={{ ...style }}
        {...motionProps} // Spread motion props to allow motion features
      >
        {children}
      </Flex>
    );
  }
);
FlexFull.displayName = "FlexFull";

// -------------------------- HSTACK COMPONENT -------------------------- //
interface HStackProps {
  children?: React.ReactNode;
  gap?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  style?: CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  tabIndex?: number;
}

export const HStack = React.forwardRef<HTMLDivElement, HStackProps & any>(
  (
    {
      children,
      onClick = () => ({}),
      onKeyDown,
      gap = "",
      className = "",
      style = {},
      onMouseEnter,
      onMouseLeave,
      onFocus,
      onBlur,
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        role="button"
        tabIndex={tabIndex}
        className={`flex flex-row ${gap} ${className} hover:cursor-default`}
        onClick={onClick}
        onKeyDown={onKeyDown}
        ref={ref}
        style={{ ...style }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        {...motionProps} // Spread motion props to allow motion features
      >
        {children}
      </motion.div>
    );
  }
);
HStack.displayName = "HStack";

// -------------------------- HSTACK FULL COMPONENT -------------------------- //
export const HStackFull = React.forwardRef<HTMLDivElement, HStackProps & any>(
  (
    { children, className = "", gap = "", onClick, style = {}, ...motionProps },
    ref
  ) => {
    return (
      <HStack
        className={`w-full ${gap} ${className}`}
        onClick={onClick}
        style={{ ...style }}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </HStack>
    );
  }
);
HStackFull.displayName = "HStackFull";

// -------------------------- VSTACK COMPONENT -------------------------- //
export const VStack = React.forwardRef<HTMLDivElement, HStackProps & any>(
  (
    {
      children,
      gap = "",
      className = "",
      style = {},
      align = "items-center",
      onClick,
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        tabIndex={tabIndex}
        onClick={onClick}
        className={`flex flex-col ${align} ${gap} ${className}`}
        ref={ref}
        style={{ ...style }}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
VStack.displayName = "VStack";

// -------------------------- VSTACK FULL COMPONENT -------------------------- //
export const VStackFull = React.forwardRef<HTMLDivElement, HStackProps & any>(
  (
    {
      children,
      className = "",
      gap = "",
      onClick,
      style = {},
      align = "items-center",
      tabIndex = -1,
      ...motionProps
    },
    ref
  ) => {
    return (
      <VStack
        ref={ref}
        className={`w-full ${gap} ${className}`}
        onClick={onClick}
        style={{ ...style }}
        align={align}
        tabIndex={tabIndex}
        {...motionProps} // Spread motion props
      >
        {children}
      </VStack>
    );
  }
);
VStackFull.displayName = "VStackFull";

// -------------------------- CENTER COMPONENT -------------------------- //
export const Center = React.forwardRef<HTMLDivElement, FlexProps & any>(
  ({ children, className, onClick, id, style = {}, ...motionProps }, ref) => {
    return (
      <Flex
        className={`justify-center items-center ${className}`}
        id={id}
        ref={ref}
        onClick={onClick}
        style={{ ...style }}
        {...motionProps} // Spread motion props
      >
        {children}
      </Flex>
    );
  }
);
Center.displayName = "Center";

// -------------------------- CENTER FULL COMPONENT -------------------------- //
export const CenterFull = React.forwardRef<HTMLDivElement, FlexProps & any>(
  ({ children, className, onClick, id, style = {}, ...motionProps }, ref) => {
    return (
      <Flex
        className={`w-full justify-center items-center ${className}`}
        id={id}
        ref={ref}
        onClick={onClick}
        style={{ ...style }}
        {...motionProps} // Spread motion props
      >
        {children}
      </Flex>
    );
  }
);
CenterFull.displayName = "CenterFull";

// -------------------------- TRANSITION VARIANTS -------------------------- //
export const transitionVariants: Record<string, Variants> = {
  slide: {
    initial: { x: "-100vw" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  slideHalf: {
    initial: { x: "-50vw" },
    animate: { x: 0 },
    exit: { x: "-50%" },
  },
  slideInLeft: {
    initial: { x: "-100vw" },
    animate: { x: 0 },
    exit: { x: "-100%" },
  },
  slideInLeftHalf: {
    initial: { x: "-50vw" },
    animate: { x: 0 },
    exit: { x: "-50%" },
  },
  slideInTopLeft: {
    initial: { x: "-100vw", y: "-100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-100%", y: "-100%" },
  },
  slideInTopLeftHalf: {
    initial: { x: "-50vw", y: "-50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-50%", y: "-50%" },
  },
  slideInBottomLeft: {
    initial: { x: "-100vw", y: "100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-100%", y: "100%" },
  },
  slideInBottomLeftHalf: {
    initial: { x: "-50vw", y: "50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-50%", y: "50%" },
  },
  slideInTop: {
    initial: { y: "-100vh" },
    animate: { y: 0 },
    exit: { y: "-100vh" },
  },
  slideInTopHalf: {
    initial: { y: "-50vh" },
    animate: { y: 0 },
    exit: { y: "-50vh" },
  },
  slideInTopRight: {
    initial: { x: "100vw", y: "-100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "100vw", y: "-100vh" },
  },
  slideInTopRightHalf: {
    initial: { x: "50vw", y: "-50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "50vw", y: "-50vh" },
  },
  slideInRight: {
    initial: { x: "100vw" },
    animate: { x: 0 },
    exit: { x: "100vw" },
  },
  slideInRightHalf: {
    initial: { x: "50vw" },
    animate: { x: 0 },
    exit: { x: "50vw" },
  },
  slideInBottomRight: {
    initial: { x: "100vw", y: "100vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "100vw", y: "100vh" },
  },
  slideInBottomRightHalf: {
    initial: { x: "50vw", y: "50vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "50vw", y: "50vh" },
  },
  slideInBottom: {
    initial: { y: "100vh" },
    animate: { y: 0 },
    exit: { y: "100vh" },
  },
  slideInBottomHalf: {
    initial: { y: "50vh" },
    animate: { y: 0 },
    exit: { y: "50vh" },
  },
  fadeSlideInRight: {
    initial: { x: "100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100vw", opacity: 0 },
  },
  fadeSlideInRightHalf: {
    initial: { x: "50vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "50vw", opacity: 0 },
  },
  fadeSlideInLeft: {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100vw", opacity: 0 },
  },
  fadeSlideInLeftHalf: {
    initial: { x: "-50vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-50vw", opacity: 0 },
  },
  fadeSlideInTopLeft: {
    initial: { x: "-100vw", y: "-100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-100vw", y: "-100vh", opacity: 0 },
  },
  fadeSlideInTopLeftHalf: {
    initial: { x: "-50vw", y: "-50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-50vw", y: "-50vh", opacity: 0 },
  },
  fadeSlideInBottomLeft: {
    initial: { x: "-100vw", y: "100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-100vw", y: "100vh", opacity: 0 },
  },
  fadeSlideInBottomLeftHalf: {
    initial: { x: "-50vw", y: "50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-50vw", y: "50vh", opacity: 0 },
  },
  fadeSlideInTop: {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100vh", opacity: 0 },
  },
  fadeSlideInTopHalf: {
    initial: { y: "-50vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-50vh", opacity: 0 },
  },
  fadeSlideInTopRight: {
    initial: { x: "100vw", y: "-100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "100vw", y: "-100vh", opacity: 0 },
  },
  fadeSlideInTopRightHalf: {
    initial: { x: "50vw", y: "-50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "50vw", y: "-50vh", opacity: 0 },
  },
  fadeSlideInBottomRight: {
    initial: { x: "100vw", y: "100vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "100vw", y: "100vh", opacity: 0 },
  },
  fadeSlideInBottomRightHalf: {
    initial: { x: "50vw", y: "50vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "50vw", y: "50vh", opacity: 0 },
  },
  fadeSlideInBottom: {
    initial: { y: "100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100vh", opacity: 0 },
  },
  fadeSlideInBottomHalf: {
    initial: { y: "50vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "50vh", opacity: 0 },
  },
  slideThird: {
    initial: { x: "-33vw" },
    animate: { x: 0 },
    exit: { x: "-33%" },
  },
  slideInLeftThird: {
    initial: { x: "-33vw" },
    animate: { x: 0 },
    exit: { x: "-33%" },
  },
  slideInTopLeftThird: {
    initial: { x: "-33vw", y: "-33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-33%", y: "-33%" },
  },
  slideInBottomLeftThird: {
    initial: { x: "-33vw", y: "33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-33%", y: "33%" },
  },
  slideInTopThird: {
    initial: { y: "-33vh" },
    animate: { y: 0 },
    exit: { y: "-33vh" },
  },
  slideInTopRightThird: {
    initial: { x: "33vw", y: "-33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "33vw", y: "-33vh" },
  },
  slideInRightThird: {
    initial: { x: "33vw" },
    animate: { x: 0 },
    exit: { x: "33vw" },
  },
  slideInBottomRightThird: {
    initial: { x: "33vw", y: "33vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "33vw", y: "33vh" },
  },
  slideInBottomThird: {
    initial: { y: "33vh" },
    animate: { y: 0 },
    exit: { y: "33vh" },
  },
  fadeSlideInRightThird: {
    initial: { x: "33vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "33vw", opacity: 0 },
  },
  fadeSlideInLeftThird: {
    initial: { x: "-33vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-33vw", opacity: 0 },
  },
  fadeSlideInTopLeftThird: {
    initial: { x: "-33vw", y: "-33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-33vw", y: "-33vh", opacity: 0 },
  },
  fadeSlideInBottomLeftThird: {
    initial: { x: "-33vw", y: "33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-33vw", y: "33vh", opacity: 0 },
  },
  fadeSlideInTopThird: {
    initial: { y: "-33vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-33vh", opacity: 0 },
  },
  fadeSlideInTopRightThird: {
    initial: { x: "33vw", y: "-33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "33vw", y: "-33vh", opacity: 0 },
  },
  fadeSlideInBottomRightThird: {
    initial: { x: "33vw", y: "33vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "33vw", y: "33vh", opacity: 0 },
  },
  fadeSlideInBottomThird: {
    initial: { y: "33vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "33vh", opacity: 0 },
  },
  slideQuarter: {
    initial: { x: "-25vw" },
    animate: { x: 0 },
    exit: { x: "-25%" },
  },
  slideInLeftQuarter: {
    initial: { x: "-25vw" },
    animate: { x: 0 },
    exit: { x: "-25%" },
  },
  slideInTopLeftQuarter: {
    initial: { x: "-25vw", y: "-25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-25%", y: "-25%" },
  },
  slideInBottomLeftQuarter: {
    initial: { x: "-25vw", y: "25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-25%", y: "25%" },
  },
  slideInTopQuarter: {
    initial: { y: "-25vh" },
    animate: { y: 0 },
    exit: { y: "-25vh" },
  },
  slideInTopRightQuarter: {
    initial: { x: "25vw", y: "-25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "25vw", y: "-25vh" },
  },
  slideInRightQuarter: {
    initial: { x: "25vw" },
    animate: { x: 0 },
    exit: { x: "25vw" },
  },
  slideInBottomRightQuarter: {
    initial: { x: "25vw", y: "25vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "25vw", y: "25vh" },
  },
  slideInBottomQuarter: {
    initial: { y: "25vh" },
    animate: { y: 0 },
    exit: { y: "25vh" },
  },
  fadeSlideInRightQuarter: {
    initial: { x: "25vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "25vw", opacity: 0 },
  },
  fadeSlideInLeftQuarter: {
    initial: { x: "-25vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-25vw", opacity: 0 },
  },
  fadeSlideInTopLeftQuarter: {
    initial: { x: "-25vw", y: "-25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-25vw", y: "-25vh", opacity: 0 },
  },
  fadeSlideInBottomLeftQuarter: {
    initial: { x: "-25vw", y: "25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-25vw", y: "25vh", opacity: 0 },
  },
  fadeSlideInTopQuarter: {
    initial: { y: "-25vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-25vh", opacity: 0 },
  },
  fadeSlideInTopRightQuarter: {
    initial: { x: "25vw", y: "-25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "25vw", y: "-25vh", opacity: 0 },
  },
  fadeSlideInBottomRightQuarter: {
    initial: { x: "25vw", y: "25vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "25vw", y: "25vh", opacity: 0 },
  },
  fadeSlideInBottomQuarter: {
    initial: { y: "25vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "25vh", opacity: 0 },
  },
  slideTwoThirds: {
    initial: { x: "-66vw" },
    animate: { x: 0 },
    exit: { x: "-66%" },
  },
  slideInLeftTwoThirds: {
    initial: { x: "-66vw" },
    animate: { x: 0 },
    exit: { x: "-66%" },
  },
  slideInTopLeftTwoThirds: {
    initial: { x: "-66vw", y: "-66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-66%", y: "-66%" },
  },
  slideInBottomLeftTwoThirds: {
    initial: { x: "-66vw", y: "66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-66%", y: "66%" },
  },
  slideInTopTwoThirds: {
    initial: { y: "-66vh" },
    animate: { y: 0 },
    exit: { y: "-66vh" },
  },
  slideInTopRightTwoThirds: {
    initial: { x: "66vw", y: "-66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "66vw", y: "-66vh" },
  },
  slideInRightTwoThirds: {
    initial: { x: "66vw" },
    animate: { x: 0 },
    exit: { x: "66vw" },
  },
  slideInBottomRightTwoThirds: {
    initial: { x: "66vw", y: "66vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "66vw", y: "66vh" },
  },
  slideInBottomTwoThirds: {
    initial: { y: "66vh" },
    animate: { y: 0 },
    exit: { y: "66vh" },
  },
  fadeSlideInRightTwoThirds: {
    initial: { x: "66vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "66vw", opacity: 0 },
  },
  fadeSlideInLeftTwoThirds: {
    initial: { x: "-66vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-66vw", opacity: 0 },
  },
  fadeSlideInTopLeftTwoThirds: {
    initial: { x: "-66vw", y: "-66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-66vw", y: "-66vh", opacity: 0 },
  },
  fadeSlideInBottomLeftTwoThirds: {
    initial: { x: "-66vw", y: "66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-66vw", y: "66vh", opacity: 0 },
  },
  fadeSlideInTopTwoThirds: {
    initial: { y: "-66vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-66vh", opacity: 0 },
  },
  fadeSlideInTopRightTwoThirds: {
    initial: { x: "66vw", y: "-66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "66vw", y: "-66vh", opacity: 0 },
  },
  fadeSlideInBottomRightTwoThirds: {
    initial: { x: "66vw", y: "66vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "66vw", y: "66vh", opacity: 0 },
  },
  fadeSlideInBottomTwoThirds: {
    initial: { y: "66vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "66vh", opacity: 0 },
  },
  slideThreeQuarters: {
    initial: { x: "-75vw" },
    animate: { x: 0 },
    exit: { x: "-75%" },
  },
  slideInLeftThreeQuarters: {
    initial: { x: "-75vw" },
    animate: { x: 0 },
    exit: { x: "-75%" },
  },
  slideInTopLeftThreeQuarters: {
    initial: { x: "-75vw", y: "-75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-75%", y: "-75%" },
  },
  slideInBottomLeftThreeQuarters: {
    initial: { x: "-75vw", y: "75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "-75%", y: "75%" },
  },
  slideInTopThreeQuarters: {
    initial: { y: "-75vh" },
    animate: { y: 0 },
    exit: { y: "-75vh" },
  },
  slideInTopRightThreeQuarters: {
    initial: { x: "75vw", y: "-75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "75vw", y: "-75vh" },
  },
  slideInRightThreeQuarters: {
    initial: { x: "75vw" },
    animate: { x: 0 },
    exit: { x: "75vw" },
  },
  slideInBottomRightThreeQuarters: {
    initial: { x: "75vw", y: "75vh" },
    animate: { x: 0, y: 0 },
    exit: { x: "75vw", y: "75vh" },
  },
  slideInBottomThreeQuarters: {
    initial: { y: "75vh" },
    animate: { y: 0 },
    exit: { y: "75vh" },
  },
  fadeSlideInRightThreeQuarters: {
    initial: { x: "75vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "75vw", opacity: 0 },
  },
  fadeSlideInLeftThreeQuarters: {
    initial: { x: "-75vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-75vw", opacity: 0 },
  },
  fadeSlideInTopLeftThreeQuarters: {
    initial: { x: "-75vw", y: "-75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-75vw", y: "-75vh", opacity: 0 },
  },
  fadeSlideInBottomLeftThreeQuarters: {
    initial: { x: "-75vw", y: "75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "-75vw", y: "75vh", opacity: 0 },
  },
  fadeSlideInTopThreeQuarters: {
    initial: { y: "-75vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-75vh", opacity: 0 },
  },
  fadeSlideInTopRightThreeQuarters: {
    initial: { x: "75vw", y: "-75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "75vw", y: "-75vh", opacity: 0 },
  },
  fadeSlideInBottomRightThreeQuarters: {
    initial: { x: "75vw", y: "75vh", opacity: 0 },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: { x: "75vw", y: "75vh", opacity: 0 },
  },
  fadeSlideInBottomThreeQuarters: {
    initial: { y: "75vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "75vh", opacity: 0 },
  },
  none: {
    initial: {},
    animate: {},
    exit: {},
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
  },
  rotate: {
    initial: { rotate: -90, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 90, opacity: 0 },
  },
  flip: {
    initial: { scaleX: -1, opacity: 0 },
    animate: { scaleX: 1, opacity: 1 },
    exit: { scaleX: -1, opacity: 0 },
  },
  flipY: {
    initial: { scaleY: -1, opacity: 0 },
    animate: { scaleY: 1, opacity: 1 },
    exit: { scaleY: -1, opacity: 0 },
  },
  zoom: {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  rotate3D: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
    exit: { rotateX: 90, opacity: 0 },
  },
  scaleRotate: {
    initial: { scale: 0, rotate: 180, opacity: 0 },
    animate: { scale: 1, rotate: 0, opacity: 1 },
    exit: { scale: 0, rotate: 180, opacity: 0 },
  },
  bounce: {
    initial: { y: "-100vh" },
    animate: {
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
    exit: { y: "-100vh" },
  },
  spin: {
    initial: { rotate: 0, opacity: 0 },
    animate: { rotate: 360, opacity: 1 },
    exit: { rotate: 0, opacity: 0 },
  },
};

// -------------------------- TRANSITION COMPONENT -------------------------- //
interface TransitionProps {
  children?: ReactNode;
  className?: string;
  type?: keyof typeof transitionVariants;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  onClick?: () => void;
  key?: string;
}

export const Transition = React.forwardRef<
  HTMLDivElement,
  TransitionProps & any
>(
  (
    {
      children,
      type = "fade",
      delay = 0,
      className = "",
      style = {},
      duration = 0.5,
      onClick,
      key,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        className={`flex justify-center overflow-hidden ${className}`}
        key={key}
        variants={transitionVariants[type]}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration, delay }}
        style={style}
        onClick={onClick}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
Transition.displayName = "Transition";

// -------------------------- TRANSITION FULL -------------------------- //

export const TransitionFull = React.forwardRef<
  HTMLDivElement,
  TransitionProps & any
>(
  (
    {
      children,
      type = "fade",
      delay = 0,
      className = "",
      style = {},
      duration = 0.5,
      onClick,
      key,
      ...motionProps
    },
    ref
  ) => {
    return (
      <Transition
        className={`w-full ${className}`}
        key={key}
        type={type}
        delay={delay}
        duration={duration}
        style={style}
        onClick={onClick}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </Transition>
    );
  }
);

// -------------------------- WRAP COMPONENT -------------------------- //
interface WrapProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Wrap = React.forwardRef<HTMLDivElement, WrapProps & any>(
  ({ children, className = "", style = {}, ...motionProps }, ref) => {
    return (
      <motion.div
        className={`w-full flex flex-wrap ${className}`}
        style={style}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </motion.div>
    );
  }
);
Wrap.displayName = "Wrap";

// -------------------------- WRAP FULL COMPONENT -------------------------- //
export const WrapFull = React.forwardRef<HTMLDivElement, WrapProps & any>(
  ({ children, className = "", style = {}, ...motionProps }, ref) => {
    return (
      <Wrap
        className={`w-full ${className}`}
        style={style}
        ref={ref}
        {...motionProps} // Spread motion props
      >
        {children}
      </Wrap>
    );
  }
);
WrapFull.displayName = "WrapFull";
