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
}

const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  containerRef,
  position = "fixed top-0 right-0 left-0",
  color = "bg-gradient-to-r from-col-600 via-col-700 to-col-800",
  trackColor = "bg-col-930",
  height = "h-0.6vh",
  className,
  zIndex = "z-10",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

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
      handleScroll(); // Initialize the progress bar on mount
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
          className={`${position} ${className} h-fit ${trackColor} shadowNarrowTight ${zIndex} rounded-none`}
        >
          <motion.div
            ref={scrollRef}
            initial={{ width: 0 }}
            animate={{ width: `${scrollProgress}%` }}
            className={`${height} rounded-l-none ${color} rounded-l-none`}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollProgressBar;
