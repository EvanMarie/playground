import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Text from "./text";
import IconButton from "./iconButton";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HStackFull } from "./mainContainers";

export default function ExpandableText({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [singleLineHeight, setSingleLineHeight] = useState("1.5em");
  const [fullHeight, setFullHeight] = useState("auto");
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      setSingleLineHeight(`${textRef.current.offsetHeight}px`);
      setFullHeight(`${textRef.current.scrollHeight}px`);
    }
  }, [text]);

  const variants = {
    expanded: { height: fullHeight, opacity: 1, transition: { duration: 0.4 } },
    collapsed: {
      height: singleLineHeight,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <AnimatePresence>
      <HStackFull>
        <motion.div
          className={`overflow-hidden ${className}`}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
          variants={variants}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            ref={textRef}
            className={isExpanded ? "" : "line-clamp-1"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Text>{text}</Text>
          </motion.div>
        </motion.div>

        <IconButton
          type="smallNormal"
          onClick={() => setIsExpanded(!isExpanded)}
          icon={isExpanded ? FaChevronUp : FaChevronDown}
        />
      </HStackFull>
    </AnimatePresence>
  );
}
