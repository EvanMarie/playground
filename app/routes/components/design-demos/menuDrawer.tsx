import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Icon from "~/buildingBlockComponents/icon";
import { Flex } from "~/buildingBlockComponents/mainContainers";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "~/buildingBlockComponents/portal";
import useEscapeKey from "~/utils/useEscapeKey";
import { CloseIcon } from "styles";
import StaggeredLinks from "../building/staggeredLinks";

export default function PippinMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  useEscapeKey(() => setIsOpen(false));

  const drawerVariants = {
    closed: { y: "100%" },
    open: { y: 0 },
  };

  return (
    <>
      <motion.button
        className="absolute top-0.3vh right-1vh md:hidden hover:cursor-pointer text-white hover:text-cyan-300 z-10 transition-300"
        onClick={() => setIsOpen(true)}
      >
        <Icon icon={IoMenuOutline} iconClassName="text-5vh" />
      </motion.button>

      <Portal>
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className={`fixed inset-0 bg-purple-800/40 backdrop-blur-sm bg-gradient-to-bl from-indigo-700/30 via-purple-700/30 to-indigo-700/30 z-40`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              {/* Drawer */}
              <motion.div
                className={`fixed inset-0 shadowNarrowNormal z-50 w-100vw h-100svh bg-indigo-900`}
                variants={drawerVariants}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 30,
                }}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <motion.button
                  className="absolute top-0.5vh right-0.5vh md:hidden hover:cursor-pointer text-white hover:text-cyan-300 z-10 transition-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon icon={CloseIcon} iconClassName="text-4vh" />
                </motion.button>

                <StaggeredLinks
                  animationVariants="rotate3D"
                  textClassName="text-2.5vh lg:text-3vh xl:text-3.5vh xxl:text-4vh textShadow"
                  iconClassName="text-2.5vh lg:text-3vh xl:text-3.5vh xxl:text-4vh group-hover:text-cyan-300"
                  links={[
                    { text: "Home", link: "/" },
                    { text: "About", link: "/about" },
                    { text: "Contact", link: "/contact" },
                    { text: "Blog", link: "/blog" },
                    { text: "Portfolio", link: "/portfolio" },
                    { text: "Services", link: "/services" },
                    { text: "Shop", link: "/shop" },
                  ]}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
