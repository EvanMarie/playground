import React, { ReactNode, CSSProperties } from "react";
import { motion, Variants } from "framer-motion";

// Distance values mapped to size options
const distanceMap = {
  xs: "2",
  sm: "5",
  md: "10",
  lg: "20",
  xl: "30",
  xxl: "40",
};

const getSizeValue = (size: keyof typeof distanceMap) => distanceMap[size];

export const createResponsiveVariants = (
  size: keyof typeof distanceMap
): Record<string, Variants> => {
  const distance = parseFloat(getSizeValue(size));

  return {
    zigZagZoom: {
      initial: { x: `-${distance / 2}vw`, opacity: 0, scale: 0 },
      animate: {
        x: [
          `-${distance / 2}vw`,
          `${distance / 2}vw`,
          `-${distance / 2}vw`,
          `${distance / 2}vw`,
          "0vw",
        ],
        opacity: 1,
        scale: 1,
        transition: {
          x: { type: "tween", duration: 1.5, ease: "easeInOut" },
          scale: { type: "tween", duration: 1.5, ease: "easeInOut" }, // Sync with x
          opacity: { duration: 1.5 }, // Matches the total duration
        },
      },
      exit: { x: `${distance / 2}vw`, opacity: 0, scale: 0.5 },
    },
    zigZagSpinZoom: {
      initial: { x: `-${distance / 2}vw`, opacity: 0, scale: 0, rotate: 0 },
      animate: {
        x: [
          `-${distance / 2}vw`,
          `${distance / 2}vw`,
          `-${distance / 2}vw`,
          `${distance / 2}vw`,
          "0vw",
        ],
        opacity: 1,
        scale: 1,
        rotate: 360, // Smooth continuous rotation over the animation
        transition: {
          x: { type: "tween", duration: 2, ease: "easeInOut" }, // Slightly longer duration for smoothness
          scale: { type: "tween", duration: 2, ease: "easeInOut" },
          rotate: {
            type: "tween",
            duration: 2, // Matches x and scale duration for continuity
            ease: "linear",
          },
          opacity: { duration: 1.5 }, // Fade-in duration
        },
      },
      exit: { x: `${distance / 2}vw`, opacity: 0, scale: 0.5, rotate: 0 }, // Reset on exit
    },

    zoomFlyForward: {
      initial: { y: `-${distance / 2}vw`, opacity: 0, scale: 0 },
      animate: {
        y: [
          `-${distance / 2}vw`,
          `${distance / 2}vw`,
          `-${distance / 2}vw`,
          `${distance / 2}vw`,
          "0vw",
        ],
        opacity: 1,
        scale: 1,
        transition: {
          y: { type: "tween", duration: 1.5, ease: "easeInOut" },
          scale: { type: "tween", duration: 1.5, ease: "easeInOut" }, // Sync with x
          opacity: { duration: 1.5 }, // Matches the total duration
        },
      },
      exit: { y: `${distance / 2}vw`, opacity: 0, scale: 0.5 },
    },
    slideInRight: {
      initial: { x: `${distance}vw`, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: `${distance}vw`, opacity: 0 },
    },
    slideInLeft: {
      initial: { x: `-${distance}vw`, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: `-${distance}vw`, opacity: 0 },
    },
    slideInTopLeft: {
      initial: { x: `-${distance}vw`, y: `-${distance}vh`, opacity: 0 },
      animate: { x: 0, y: 0, opacity: 1 },
      exit: { x: `-${distance}vw`, y: `-${distance}vh`, opacity: 0 },
    },
    slideInBottomLeft: {
      initial: { x: `-${distance}vw`, y: `${distance}vh`, opacity: 0 },
      animate: { x: 0, y: 0, opacity: 1 },
      exit: { x: `-${distance}vw`, y: `${distance}vh`, opacity: 0 },
    },
    slideInTop: {
      initial: { y: `-${distance}vh`, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: `-${distance}vh`, opacity: 0 },
    },
    slideInTopRight: {
      initial: { x: `${distance}vw`, y: `-${distance}vh`, opacity: 0 },
      animate: { x: 0, y: 0, opacity: 1 },
      exit: { x: `${distance}vw`, y: `-${distance}vh`, opacity: 0 },
    },
    slideInBottomRight: {
      initial: { x: `${distance}vw`, y: `${distance}vh`, opacity: 0 },
      animate: { x: 0, y: 0, opacity: 1 },
      exit: { x: `${distance}vw`, y: `${distance}vh`, opacity: 0 },
    },
    slideInBottom: {
      initial: { y: `${distance}vh`, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: `${distance}vh`, opacity: 0 },
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
    fade10: {
      initial: { opacity: 0.1 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fade20: {
      initial: { opacity: 0.2 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fade30: {
      initial: { opacity: 0.3 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fade40: {
      initial: { opacity: 0.4 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fade50: {
      initial: { opacity: 0.5 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fade60: {
      initial: { opacity: 0.6 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fade70: {
      initial: { opacity: 0.7 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    fade80: {
      initial: { opacity: 0.8 },
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
      initial: { y: `-${distance}vh` },
      animate: {
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 10 },
      },
      exit: { y: `-${distance}vh` },
    },
    spin: {
      initial: { rotate: 0, opacity: 0 },
      animate: { rotate: 360, opacity: 1 },
      exit: { rotate: 0, opacity: 0 },
    },
    spinScale: {
      initial: { rotate: 0, scale: 0, opacity: 0 },
      animate: { rotate: 360, scale: 1, opacity: 1 },
      exit: { rotate: 0, scale: 0, opacity: 0 },
    },
  };
};

interface ScrollTransitionProps {
  children?: ReactNode;
  className?: string;
  animation?: keyof ReturnType<typeof createResponsiveVariants>;
  delay?: number;
  duration?: number;
  ease?: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
  style?: CSSProperties;
  onClick?: () => void;
  key?: string;
  once?: boolean;
  amount?: number | "some" | "all";
  overflow?: string;
  type?: "spring" | "tween";
  size?: keyof typeof distanceMap;
}

export const ScrollTransition = React.forwardRef<
  HTMLDivElement,
  ScrollTransitionProps
>(
  (
    {
      children,
      animation = "fade",
      delay = 0,
      className = "",
      style = {},
      duration = 0.5,
      ease = "easeInOut",
      stiffness = 100,
      damping = 10,
      mass = 1,
      onClick,
      key,
      overflow = "overflow-hidden",
      once = true,
      amount = 0.5,
      type = "spring",
      size = "md", // Default to medium
      ...motionProps
    },
    ref
  ) => {
    const responsiveVariants = createResponsiveVariants(size);
    const transition =
      type === "spring"
        ? { type: "spring", stiffness, damping, mass, delay }
        : { type: "tween", duration, ease, delay };

    return (
      <motion.div
        className={`flex justify-center ${className} ${overflow}`}
        key={key}
        initial="initial"
        whileInView="animate"
        viewport={{ once, amount }}
        variants={responsiveVariants[animation]}
        transition={transition}
        style={style}
        onClick={onClick}
        ref={ref}
        {...motionProps}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollTransition.displayName = "ScrollTransition";
