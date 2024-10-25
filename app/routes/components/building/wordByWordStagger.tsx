import { motion } from "framer-motion";
import { transitionVariants } from "~/buildingBlockComponents/mainContainers";

export default function WordByWordStagger({
  text,
  textColor = "text-col-100",
  textSize = "text-16vh",
  textShadow,
  className,
  animationVariants = "zoom",
  staggerDelay = 0.3,
  duration = 0.6,
}: {
  text: string;
  textColor?: string;
  textSize?: string;
  textShadow?: string;
  className?: string;
  animationVariants?: keyof typeof transitionVariants;
  staggerDelay?: number;
  duration?: number;
}) {
  const variants = transitionVariants[animationVariants];
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          //   initial={{ opacity: 0 }}
          //   animate={{ opacity: 1 }}
          initial={variants.initial as any}
          animate={variants.animate as any}
          transition={{ delay: index * staggerDelay, duration: duration }}
          className={`${textColor} ${textSize} ${textShadow} ${className}`}
        >
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
}
