import { motion } from "framer-motion";

export default function WordByWordStagger({
  text,
  textColor,
  textSize,
  textShadow,
  className,
}: {
  text: string;
  textColor?: string;
  textSize?: string;
  textShadow?: string;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
}
