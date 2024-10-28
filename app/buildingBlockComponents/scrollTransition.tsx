import React, { ReactNode, CSSProperties } from "react";
import { motion, Variants } from "framer-motion";
import { transitionVariants } from "./mainContainers";

// export const scrollTransitionVariants: Record<string, Variants> = {
//   slideInFromRight: {
//     initial: { x: "100vw", opacity: 0 }, // Start offscreen to the right with opacity 0
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         x: { type: "spring", damping: 25 },
//         opacity: { duration: 0.3 },
//       },
//     },
//     exit: { x: "100vw", opacity: 0 }, // Move offscreen to the right again
//   },
//   none: {
//     initial: {},
//     animate: {},
//     exit: {},
//   },
//   fade: {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade10: {
//     initial: { opacity: 0.1 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade20: {
//     initial: { opacity: 0.2 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade30: {
//     initial: { opacity: 0.3 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade40: {
//     initial: { opacity: 0.4 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade50: {
//     initial: { opacity: 0.5 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade60: {
//     initial: { opacity: 0.6 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade70: {
//     initial: { opacity: 0.7 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   fade80: {
//     initial: { opacity: 0.8 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   scale: {
//     initial: { scale: 0 },
//     animate: { scale: 1 },
//     exit: { scale: 0 },
//   },
//   rotate: {
//     initial: { rotate: -90, opacity: 0 },
//     animate: { rotate: 0, opacity: 1 },
//     exit: { rotate: 90, opacity: 0 },
//   },
//   flip: {
//     initial: { scaleX: -1, opacity: 0 },
//     animate: { scaleX: 1, opacity: 1 },
//     exit: { scaleX: -1, opacity: 0 },
//   },
//   flipY: {
//     initial: { scaleY: -1, opacity: 0 },
//     animate: { scaleY: 1, opacity: 1 },
//     exit: { scaleY: -1, opacity: 0 },
//   },
//   zoom: {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     exit: { scale: 0.5, opacity: 0 },
//   },
//   rotate3D: {
//     initial: { rotateX: 90, opacity: 0 },
//     animate: { rotateX: 0, opacity: 1 },
//     exit: { rotateX: 90, opacity: 0 },
//   },
//   scaleRotate: {
//     initial: { scale: 0, rotate: 180, opacity: 0 },
//     animate: { scale: 1, rotate: 0, opacity: 1 },
//     exit: { scale: 0, rotate: 180, opacity: 0 },
//   },
//   bounce: {
//     initial: { y: "-100vh" },
//     animate: {
//       y: 0,
//       transition: { type: "spring", stiffness: 300, damping: 10 },
//     },
//     exit: { y: "-100vh" },
//   },
//   spin: {
//     initial: { rotate: 0, opacity: 0 },
//     animate: { rotate: 360, opacity: 1 },
//     exit: { rotate: 0, opacity: 0 },
//   },
//   spinScale: {
//     initial: { rotate: 0, scale: 0, opacity: 0 },
//     animate: { rotate: 360, scale: 1, opacity: 1 },
//     exit: { rotate: 0, scale: 0, opacity: 0 },
//   },
// };

interface ScrollTransitionProps {
  children?: ReactNode;
  className?: string;
  type?: keyof typeof transitionVariants;
  delay?: number;
  duration?: number;
  style?: CSSProperties;
  onClick?: () => void;
  key?: string;
  once?: boolean;
  amount?: number | "some" | "all";
  overflow?: string;
}

export const ScrollTransition = React.forwardRef<
  HTMLDivElement,
  ScrollTransitionProps & any
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
      overflow = "overflow-hidden",
      once = true,
      amount = 0.8,
      ...motionProps
    },
    ref
  ) => {
    return (
      <motion.div
        className={`flex justify-center ${className} `}
        key={key}
        initial="initial"
        whileInView="animate"
        viewport={{ once, amount }}
        variants={transitionVariants[type]}
        transition={{ duration, delay }}
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
