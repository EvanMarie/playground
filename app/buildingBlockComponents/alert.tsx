import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./button";
import Image from "./image";
import Text from "./text";
import Portal from "./portal";
import {
  Box,
  Flex,
  FlexFull,
  HStack,
  VStack,
  VStackFull,
} from "./mainContainers";

const sizeClasses = {
  xs: "w-[40svh] h-fit max-h-25vh sm:w-[50svh] sm:max-h-30vh",
  sm: "w-98vw h-1/3 max-h-30vh sm:w-[55svh] sm:max-h-35vh",
  md: "w-98vw h-1/2 max-h-35vh sm:w-[60svh] sm:max-h-40vh",
  lg: "w-98vw h-2/3 max-h-40vh sm:w-[65svh] sm:max-h-45vh",
  xl: "w-98vw h-3/4 max-h-45vh sm:w-[70svh] sm:max-h-50vh",
  full: "w-full h-full",
};

interface AlertProps {
  isAlertOpen: boolean;
  onClose: () => void;
  onConfirmClick: () => void;
  cancelRef: React.MutableRefObject<HTMLButtonElement | null>;
  title: string;
  body: string;
  confirmButtonText: string;
  cancelButtonText: string;
  imageIcon?: string;
  size?: keyof typeof sizeClasses;
  imageWidth?: string;
  bodyWidth?: string;
  bodyClassName?: string;
  flexDirection?: string;
  bodyTextSize?: string;
  alertDimensions?: string;
  className?: string;
  alertImage?: string;
  imageClassName?: string;
  bodyTextClassName?: string;
}

export default function Alert({
  isAlertOpen,
  onClose,
  onConfirmClick,
  cancelRef,
  title,
  body,
  confirmButtonText,
  cancelButtonText,
  flexDirection = "flex-col",
  size = "sm",
  bodyWidth = "w-full",
  bodyClassName = "text-lg",
  alertDimensions,
  className,
  alertImage,
  bodyTextClassName = "text-lg",
  imageClassName = "w-75% h-auto sm:w-60%",
}: AlertProps) {
  const sizeClass = size ? sizeClasses[size] || undefined : "";
  if (!isAlertOpen) return null;

  // Animation variants for Framer Motion
  const backdropVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.3 } },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { delay: 0.5 } },
  };

  const modalExitVariants = {
    exit: { y: "-100vh", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Portal>
        {isAlertOpen && (
          <AnimatePresence>
            <motion.div
              className={`fixed inset-0 overflow-hidden defaultOverlayBlur defaultOverlay flex justify-center items-center rounded-none`}
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ zIndex: 1000 }}
            >
              <motion.div
                className={`bg-radial4 shadowNarrowNormal ${sizeClass} ${alertDimensions} ${className} text-xl text-col-900 text-stroke-8-900`}
                variants={{ ...modalVariants, ...modalExitVariants }}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <VStack
                  className="w-full h-full justify-between "
                  style={{ fontSize: "inherit" }}
                >
                  {/* Header */}
                  <HStack className="w-full items-center rounded-b-none p-[1vh] gap-2 md:gap-[1vw]">
                    <Text>{title}</Text>
                  </HStack>

                  <HStack
                    className={`w-full h-full justify-between text-col-900 `}
                    gap="gap-[0px]"
                    style={{ fontSize: "inherit" }}
                  >
                    <VStackFull className="h-full justify-center p-[1vh] items-center">
                      <Flex
                        className={`w-full h-full justify-center items-center flex-grow-1 gap-[1vh] ${bodyWidth} ${flexDirection} ${bodyClassName} `}
                      >
                        {alertImage && (
                          <Box className={imageClassName}>
                            <Image
                              src={alertImage}
                              alt="alert image"
                              className="w-full h-full"
                            />
                          </Box>
                        )}
                        <FlexFull className="py-1vh px-2vh">
                          <Text className={bodyTextClassName}>{body}</Text>
                        </FlexFull>
                      </Flex>
                      <HStack className="justify-end gap-[2vw] p-[1vh]">
                        <Button
                          ref={cancelRef}
                          onClick={onClose}
                          className="text-stroke-1-100"
                          buttonText={cancelButtonText}
                        />
                        <Button
                          onClick={onConfirmClick}
                          type="negative"
                          className="text-stroke-1-100 hover:text-col-900 hover:text-stroke-5-900"
                          buttonText={confirmButtonText}
                        />
                      </HStack>
                    </VStackFull>
                  </HStack>
                </VStack>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}{" "}
      </Portal>
    </>
  );
}
