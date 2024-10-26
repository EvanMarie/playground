import React, { ReactNode, CSSProperties } from "react";
import { motion, Variants } from "framer-motion";
import { transitionVariants } from "./mainContainers";

// Reuse the existing transitionVariants

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
