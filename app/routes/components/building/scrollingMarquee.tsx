import { useAnimationControls } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  width?: string;
  trackColor?: string;
  py?: string;
  trackClassName?: string;
}

export default function ScrollingMarquee({
  children,
  speed = 40,
  direction = "left",
  width = "w-screen",
  trackColor = "bg-slate-900/40",
  py = "py-1vh",
  trackClassName = "shadowNarrowTight rounded-none",
}: MarqueeProps) {
  const [contentWidth, setContentWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  useEffect(() => {
    if (contentRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const singleContentWidth = contentRef.current.offsetWidth;
      setContentWidth(singleContentWidth);

      const needed = Math.ceil(containerWidth / singleContentWidth) + 1;
      setRepeatCount(needed);
    }
  }, [children]);

  useEffect(() => {
    if (contentWidth > 0) {
      const duration = contentWidth / speed;
      controls.start({
        x: direction === "left" ? -contentWidth : 0,
        transition: {
          duration,
          repeat: Infinity,
          ease: "linear",
        },
      });
    }
  }, [contentWidth, speed, direction, controls]);

  return (
    <div
      ref={containerRef}
      className={`${width} ${trackColor} ${py} ${trackClassName} m-auto overflow-hidden`}
    >
      <motion.div className="flex whitespace-nowrap" animate={controls}>
        {[...Array(repeatCount)].map((_, index) => (
          <div
            key={index}
            ref={index === 0 ? contentRef : undefined}
            className="inline-flex"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
