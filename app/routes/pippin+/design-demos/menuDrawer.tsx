import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Icon from "~/buildingBlockComponents/icon";
import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "~/buildingBlockComponents/portal";
import useEscapeKey from "~/utils/useEscapeKey";
import { CloseIcon } from "styles";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import Image from "~/buildingBlockComponents/image";
import StaggeredLinks from "~/routes/building/staggeredLinks";

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
        className="fixed top-0.3vh right-1vh md:hidden hover:cursor-pointer text-white hover:text-cyan-300 z-10 transition-300"
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
                className={`fixed inset-0 z-40`}
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              {/* Drawer */}

              <motion.div
                className={`fixed inset-0 shadowNarrowNormal z-50 w-100vw h-100svh bg-indigo-930 bg-[url('/images/courses-background.webp')]`}
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
                {" "}
                <FlexFull className="h-full bg-purple-800/40 backdrop-blur-sm bg-gradient-to-bl from-indigo-700/30 via-purple-700/30 to-indigo-700/30 items-end pb-2vh relative rounded-none">
                  <ScrollTransition
                    className="h-44vh absolute -top-6vh right-10vw "
                    animation="slideInTop"
                    duration={1}
                    delay={0.5}
                  >
                    <Image
                      src="/images/little-guy.webp"
                      alt="Little Guy"
                      className="h-full fade-bottom rotate-180"
                    />
                  </ScrollTransition>{" "}
                  <motion.button
                    className="absolute top-0.5vh right-0.5vh md:hidden hover:cursor-pointer text-white hover:text-cyan-300 z-30 transition-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon icon={CloseIcon} iconClassName="text-4vh" />
                  </motion.button>
                  <StaggeredLinks
                    animationVariants="fadeSlideInLeft"
                    containerClassName="w-full justify-center"
                    buttonClassName="hover:border-b-cyan-300 rounded-none transition-300 hover:text-cyan-300 w-fit px-2vh py-1vh"
                    transitionType="tween"
                    ease="easeInOut"
                    transitionDuration={0.5}
                    initialDelay={0}
                    textClassName="text-5vh textShadow"
                    iconClassName="text-5vh group-hover:text-cyan-300"
                    gap="gap-2vh"
                    iconGap="gap-2vh"
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
                </FlexFull>{" "}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
