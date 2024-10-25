import { useState } from "react";
import { Flex, FlexFull } from "./mainContainers";
import Image from "./image";
import Modal from "./modal";
import { VStack } from "./mainContainers";
import { motion } from "framer-motion";
import { HiArrowsExpand } from "react-icons/hi";
import Icon from "./icon";
import Button from "./button";
import { CloseIcon } from "styles";

export function ExpandableImage(image: { src: string; caption: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Flex className="w-[20vw] h-[20vw] md:w-[15vw] md:h-[15vw] lg:w-[10vw] lg:h-[10vw] border-900-md shadowNarrowNormal relative">
        <motion.div
          className="absolute -top-[1vh] -right-[1vh] bg-col-300 p-0.4vh border-900-sm shadowNarrowTight hover:bg-col-500 transition-300"
          onClick={() => setIsOpen(true)}
        >
          <Icon icon={HiArrowsExpand} iconClassName="" />
        </motion.div>
        <Image
          src={image.src}
          alt={image.caption}
          className="rounded-[1.1vh]"
        />
      </Flex>
      <Modal
        isOpen={isOpen}
        showBottomClose={false}
        showTopClose={false}
        modalSize="w-fit h-fit"
        setModalOpen={setIsOpen}
        onClose={() => setIsOpen(false)}
      >
        <VStack gap="gap-3vh">
          <Flex className="w-[70vw] h-[70vw] md:w-[65vh] md:h-[65vh] lg:w-[80vh] lg:h-[80vh] border-900-md shadowNarrowNormal relative">
            <Image
              src={image?.src}
              alt={image?.caption || ""}
              className="rounded-[1.1vh]"
            />
          </Flex>
          <FlexFull className="justify-center">
            <Button
              buttonText="close"
              iconLeft={CloseIcon}
              onClick={() => setIsOpen(false)}
            />
          </FlexFull>
        </VStack>
      </Modal>
    </>
  );
}
