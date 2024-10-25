import React, { CSSProperties, ReactElement, useEffect, useState } from "react";
import { useLocation } from "@remix-run/react";
import Button, { ButtonType } from "~/buildingBlockComponents/button";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "~/buildingBlockComponents/portal";
import { MdOutlineOpenInNew } from "react-icons/md";
import { CgCloseR } from "react-icons/cg";
import IconButton from "./iconButton";
import useEscapeKey from "~/utils/useEscapeKey";
import { Box, Flex } from "./mainContainers";

type ContentPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "leftCenter"
  | "rightCenter"
  | "screenCenter"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";

type EntryDirection =
  | "top"
  | "topRight"
  | "topLeft"
  | "bottom"
  | "bottomRight"
  | "bottomLeft"
  | "left"
  | "right";

export default function SlideInContent({
  children,
  overlayDimentions = "w-screen h-screen",
  overlayClassName = "",
  overlayPosition = "fixed inset-0",
  contentWidth = "w-fit",
  contentHeight = "h-fit",
  contentPosition = "screenCenter",
  contentClassName,
  direction = "bottom",
  duration = 0.5,
  openButtonText = "close",
  closedButtonText = "open",
  openIcon = CgCloseR,
  closedIcon = MdOutlineOpenInNew,
  buttonComponent,
  buttonType,
  closeIconButton = true,
  closeFullButton,
  closeButtonPosition = "topRight",
  isOpen,
  setIsOpen,
  openOnHover = false, // New prop
}: {
  children?: React.ReactNode;
  overlayDimentions?: string;
  overlayClassName?: string;
  overlayPosition?: string;
  contentWidth?: string;
  contentHeight?: string;
  contentPosition?: ContentPosition;
  contentClassName?: string;
  direction?: EntryDirection;
  duration?: number;
  buttonText?: string;
  openButtonText?: string;
  closedButtonText?: string;
  buttonComponent?: ReactElement;
  buttonType?: ButtonType;
  closeIconButton?: boolean;
  closeFullButton?: boolean;
  closeButtonPosition?: ContentPosition;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  openIcon?: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
  closedIcon?: React.ComponentType<{
    className?: string;
    tabIndex?: number;
    style?: CSSProperties;
  }>;
  openOnHover?: boolean; // New prop
}) {
  const [internalIsOpen, internalSetIsOpen] = useState(false);
  const isMounted = isOpen ? isOpen : internalIsOpen;
  const setIsMounted = setIsOpen ? setIsOpen : internalSetIsOpen;
  const location = useLocation();

  useEffect(() => {
    if (isMounted) {
      setIsMounted(false); // Close the component when the route changes
    }
  }, [location]);

  const comesFromLeft =
    direction === "left" ||
    direction === "topLeft" ||
    direction === "bottomLeft";
  const comesFromRight =
    direction === "right" ||
    direction === "topRight" ||
    direction === "bottomRight";
  const comesFromTop =
    direction === "top" || direction === "topLeft" || direction === "topRight";
  const comesFromBottom =
    direction === "bottom" ||
    direction === "bottomLeft" ||
    direction === "bottomRight";

  const variants = {
    open: { opacity: 1, x: 0, y: 0 },
    closed: {
      opacity: 0,
      x: comesFromLeft ? "-100%" : comesFromRight ? "100%" : 0,
      y: comesFromTop ? "-100%" : comesFromBottom ? "100%" : 0,
    },
    exit: {
      opacity: 0,
      x:
        direction === "left" ||
        direction === "topLeft" ||
        direction === "bottomLeft"
          ? "-100%"
          : direction === "right" ||
            direction === "topRight" ||
            direction === "bottomRight"
          ? "100%"
          : 0,
      y:
        direction === "top" ||
        direction === "topLeft" ||
        direction === "topRight"
          ? "-100%"
          : direction === "bottom" ||
            direction === "bottomLeft" ||
            direction === "bottomRight"
          ? "100%"
          : 0,
    },
  };

  const transition = {
    duration: duration,
    ease: [0.6, -0.05, 0.01, 0.99],
  };

  const contentPlacement =
    contentPosition === "screenCenter"
      ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
      : contentPosition === "topLeft"
      ? "fixed top-0 left-0"
      : contentPosition === "topCenter"
      ? "fixed top-0 left-1/2 transform -translate-x-1/2"
      : contentPosition === "topRight"
      ? "fixed top-0 right-0"
      : contentPosition === "leftCenter"
      ? "fixed top-1/2 left-0 transform -translate-y-1/2"
      : contentPosition === "rightCenter"
      ? "fixed top-1/2 right-0 transform -translate-y-1/2"
      : contentPosition === "bottomLeft"
      ? "fixed bottom-0 left-0"
      : contentPosition === "bottomCenter"
      ? "fixed bottom-0 left-1/2 transform -translate-x-1/2"
      : contentPosition === "bottomRight"
      ? "fixed bottom-0 right-0"
      : "";

  const closeButtonPlacement =
    closeButtonPosition === "topLeft"
      ? "absolute top-0.4vh left-0.4vh"
      : closeButtonPosition === "topCenter"
      ? "absolute top-0.4vh left-1/2 transform -translate-x-1/2"
      : closeButtonPosition === "topRight"
      ? "absolute top-0.4vh right-0.4vh"
      : closeButtonPosition === "leftCenter"
      ? "absolute top-1/2 left-0.4vh transform -translate-y-1/2"
      : closeButtonPosition === "rightCenter"
      ? "absolute top-1/2 right-0.4vh transform -translate-y-1/2"
      : closeButtonPosition === "bottomLeft"
      ? "absolute bottom-0.4vh left-0.4vh"
      : closeButtonPosition === "bottomCenter"
      ? "absolute bottom-0.4vh left-1/2 transform -translate-x-1/2"
      : closeButtonPosition === "bottomRight"
      ? "absolute bottom-0.4vh right-0.4vh"
      : "";

  useEscapeKey(() => {
    if (isMounted) {
      setIsMounted(false);
    }
  });

  return (
    <>
      {buttonComponent ? (
        React.cloneElement(buttonComponent, {
          onClick: () => setIsMounted(!isMounted),
          onMouseEnter: openOnHover ? () => setIsMounted(true) : undefined, // Open on hover if enabled
        })
      ) : (
        <Button
          onClick={() => setIsMounted(!isMounted)}
          onMouseEnter={openOnHover ? () => setIsMounted(true) : undefined}
          buttonText={isMounted ? openButtonText : closedButtonText}
          iconLeft={isMounted ? openIcon : closedIcon}
          type={buttonType || "normal"}
        />
      )}

      <Portal>
        <AnimatePresence>
          {isMounted && (
            <motion.div
              initial="closed"
              animate="open"
              exit="exit"
              variants={variants}
              transition={transition}
              className={` ${overlayDimentions} ${overlayClassName} ${overlayPosition} z-40`}
              layout
              onClick={() => setIsMounted(false)}
            >
              <motion.div
                className={`${contentWidth} ${contentHeight} ${contentPlacement} z-20 `}
                onClick={(e) => e.stopPropagation()}
              >
                <Flex className="w-full h-full relative ">
                  <Box className={`${closeButtonPlacement} z-10`}>
                    {closeIconButton ? (
                      <IconButton
                        onClick={() => setIsMounted(false)}
                        icon={CgCloseR}
                        type="unstyled"
                        iconClassName="hover:bg-col-950 transition-300"
                      />
                    ) : null}
                    {closeFullButton ? (
                      <Button
                        onClick={() => setIsMounted(false)}
                        buttonText="Close"
                        type="smallNormal"
                      />
                    ) : null}
                  </Box>

                  <Box
                    className={`${contentWidth} ${contentHeight} ${contentClassName}`}
                  >
                    {children}
                  </Box>
                </Flex>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    </>
  );
}
