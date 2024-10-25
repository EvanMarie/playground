import React, { CSSProperties, MouseEventHandler } from "react";
import { motion } from "framer-motion";

interface IconProps {
  icon: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
  containerClassName?: string;
  pos?: "absolute" | "relative" | "fixed" | "sticky" | "static" | "inherit";
  t?: string;
  l?: string;
  r?: string;
  b?: string;
  iconClassName?: string;
  hoverCursor?: string;
  w?: string;
  h?: string;
  rounded?: string;
  onClick?: () => void;
  tabIndex?: number;
  style?: React.CSSProperties;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
}

export default function Icon({
  icon: IconComponent,
  tabIndex = -1,
  containerClassName = "",
  onMouseEnter,
  iconClassName = "",
  hoverCursor = "hover:cursor-pointer",
  w = "w-fit",
  h = "h-fit",
  pos,
  t,
  l,
  r,
  b,
  rounded = "rounded-none",
  onClick,
  style,
}: IconProps) {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick && onClick();
    }
  };

  return (
    <motion.div
      role="button"
      tabIndex={tabIndex}
      className={`${rounded} ${w} ${h} ${pos} ${t} ${b} ${r} ${l} ${containerClassName} ${hoverCursor}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={onMouseEnter}
    >
      <IconComponent
        className={`${rounded} ${iconClassName} ${hoverCursor} focus-border-0 outline-none`}
        tabIndex={tabIndex}
        style={style}
      />
    </motion.div>
  );
}
