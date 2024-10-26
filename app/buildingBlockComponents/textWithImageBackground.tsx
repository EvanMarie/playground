import React from "react";
import { motion } from "framer-motion";
import { transitionVariants } from "./mainContainers";

type TextWithImageBackgroundProps = {
  text: string;
  imageUrl: string;
  textSize?: string;
  fontStyle?: string;
  animationVariants?: keyof typeof transitionVariants;
  delay?: number;
  duration?: number;
  textClassName?: string;
};

const TextWithImageBackground: React.FC<TextWithImageBackgroundProps> = ({
  text,
  imageUrl,
  textSize = "text-6vh",
  fontStyle = "font-semibold",
  animationVariants = "fade",
  delay = 0.7,
  duration = 3,
  textClassName = "tracking-wider",
}) => {
  const variants = transitionVariants[animationVariants];

  return (
    <motion.span
      className={`${textSize} ${fontStyle} ${textClassName} text-transparent bg-clip-text`}
      style={{
        lineHeight: 1.2,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundClip: "text",
      }}
      initial={variants.initial as any}
      animate={variants.animate as any}
      transition={{ delay: delay, duration: duration }}
    >
      {text}
    </motion.span>
  );
};

export default TextWithImageBackground;
