import React, { useEffect, useRef, useState, MutableRefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScrollProgressBarProps {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  position?: string;
  color?: string;
  trackColor?: string;
  height?: string;
  className?: string;
  zIndex?: string;
  centered?: boolean;
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  containerRef,
  position = "fixed top-0 right-0 left-0",
  color = "bg-gradient-to-r from-col-600 via-col-700 to-col-600",
  trackColor = "bg-col-930",
  height = "h-0.7vh",
  className,
  zIndex = "z-50",
  centered = false,
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
        setScrollProgress(progress);
        setIsVisible(scrollTop > 0);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        containerRef.current?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [containerRef]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${position} ${height} ${className} ${trackColor} ${zIndex} rounded-none`}
        >
          {centered ? (
            // Split the progress bar into left and right expansions
            <>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress / 2}%` }}
                className={`absolute left-1/2 transform -translate-x-full ${height} ${color} rounded-r-none`}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress / 2}%` }}
                className={`absolute right-1/2 transform translate-x-full ${height} ${color} rounded-l-none`}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                }}
              />
            </>
          ) : (
            // Default single progress bar expanding from the left
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${scrollProgress}%` }}
              className={`${height} ${color} rounded-none`}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1,
              }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgressBar;
