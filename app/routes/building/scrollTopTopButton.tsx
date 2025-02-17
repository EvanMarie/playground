import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VscTriangleUp } from "react-icons/vsc";
import { useLocation, useNavigate } from "@remix-run/react";
import ModuleIconButton from "./moduleButtons";

interface ScrollToTopProps {
  position?: string;
  scrollContainerRef: React.RefObject<HTMLElement>;
}

export default function ScrollToTopButton({
  scrollContainerRef,
  position,
}: ScrollToTopProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const { hash, pathname } = location;

  useEffect(() => {
    const toggleVisibility = () => {
      if (
        scrollContainerRef.current &&
        scrollContainerRef.current.scrollTop > window.innerHeight * 1
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", toggleVisibility);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", toggleVisibility);
      }
    };
  }, [scrollContainerRef]);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const variants = {
    hidden: { z: "10vh", opacity: 0 },
    visible: { z: 0, opacity: 1 },
  };

  const onClick = () => {
    if (hash) {
      // Immediately remove the hash and stop any further scroll behavior
      navigate("");
    } else {
      scrollToTop();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && !hash && (
        <motion.div
          key="scrollToTopButton"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
          className={`${position} z-30`}
        >
          <ModuleIconButton
            icon={VscTriangleUp}
            onClick={onClick}
            tooltipLabel="to top"
            tooltipPlacement="topLeft"
            iconSize="text-lg"
            padding="p-0.4vh"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
