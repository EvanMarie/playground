import Image from "~/buildingBlockComponents/image";
import {
  Box,
  CenterFull,
  Flex,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import Modal from "~/buildingBlockComponents/modal";
import Text from "~/buildingBlockComponents/text";
import RenderParagraphs from "~/buildingBlockComponents/renderParagraphs";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineAddCircle } from "react-icons/md";
import { ModuleTextButton } from "~/routes/building/moduleButtons";
import ModuleIconButton from "~/routes/building/moduleButtons";
import ScrollProgressContainer from "~/routes/building/scrollProgressContainer";
import MinGradeMaxGrade from "./minMaxGrade";

export default function OnboardingCourseExpandedModal({
  isOpen,
  setModalOpen,
  onClose,
  image,
  title,
  description,
  minGrade,
  maxGrade,
  onAddCourseClick,
  isShoppingCart,
  courseAdded,
  overview,
}: {
  isOpen: boolean;
  setModalOpen: (open: boolean) => void;
  onClose: () => void;
  image: string;
  title: string;
  description: string;
  minGrade: number;
  maxGrade: number;
  onAddCourseClick?: () => void;
  isShoppingCart: boolean;
  courseAdded?: boolean;
  overview?: string;
}) {
  function ModalImage({ className }: { className?: string }) {
    return (
      <>
        <Flex
          className={`w-80vw h-80vw md:w-60svh md:h-60svh lg:h-70svh lg:w-70svh relative flex-shrink-0 flex overflow-hidden rounded-2vh shadowBroadNormal hover:shadowBroadLoose hover:rotate-1 transition-300 ${className}`}
        >
          <div className="absolute inset-0 rounded-2vh overflow-hidden">
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <CenterFull
            className={`relative h-full w-full z-10 bg-col-indigo-700/50 backdrop-blur-[0.2vh] rounded-2vh`}
          >
            <VStackFull className={`justify-between rounded-2vh`}>
              <VStackFull className="h-fit bg-indigo-300/80 border-b-400-md border-t-400-md rounded-1vh backdrop-blur-[0.5vh] overflow-hidden h-fit py-2vh  rounded-none">
                <FlexFull className="flex-shrink-0 justify-center ">
                  <Flex className="w-full flex justify-center items-center flex-col">
                    <FlexFull className="px-2vh justify-center">
                      <Text className=" text-col-800 textGlowWhiteXxs font-semibold text-xxl">
                        {title}
                      </Text>
                    </FlexFull>
                  </Flex>
                </FlexFull>
              </VStackFull>
            </VStackFull>
          </CenterFull>
        </Flex>
        <MinGradeMaxGrade minGrade={minGrade} maxGrade={maxGrade} />
      </>
    );
  }

  const handleCourseToggle = () => {
    onAddCourseClick && onAddCourseClick();
  };

  return (
    <Modal
      isOpen={isOpen}
      setModalOpen={setModalOpen}
      onClose={onClose}
      modalSize="w-100vw h-100svh"
      overlayColor="bg-col-580"
    >
      <FlexFull className="h-full p-1vh justify-center">
        <FlexFull className="shadowNarrowNormal rounded-lg max-w-[140svh] p-1vh bg-col-730 bg-gradient-to-bl from-indigo-950/30 via-indigo-950/20 to-indigo-950/30 backdrop-blur-[1vh] relative">
          <Box className="absolute top-2vh right-2vh z-10">
            <ModuleIconButton
              icon={IoCloseCircle}
              onClick={() => setModalOpen(false)}
            />
          </Box>
          <ScrollProgressContainer
            scrollContainerHeight="h-96svh"
            scrollProgressColor="bg-gradient-to-r from-col-300 via-col-400 to-col-300 shadowNarrowLoose"
            hideScrollBar={false}
            showScrollToTopButton={true}
            scrollBg="bg-col-940"
          >
            <VStackFull className="h-fit p-1vh md:p-2vh" gap="gap-2vh">
              {!isShoppingCart && (
                <CenterFull>
                  <ModuleTextButton
                    label={courseAdded ? "Remove Course" : "Add Course"}
                    onClick={handleCourseToggle}
                    icon={courseAdded ? IoCloseCircle : MdOutlineAddCircle}
                  />
                </CenterFull>
              )}
              <ModalImage />
              <VStackFull className="bg-col-100 bg-gradient-to-bl from-col-340 via-col-330 to-col-340 p-1vh sm:p-2vh md:p-3vh md:w-90% border-950-md shadowNarrowNormal">
                <RenderParagraphs textItem={description} />

                <CenterFull className="pt-2vh">
                  <ModuleTextButton
                    label={courseAdded ? "Remove Course" : "Add Course"}
                    onClick={handleCourseToggle}
                    icon={courseAdded ? IoCloseCircle : MdOutlineAddCircle}
                  />
                </CenterFull>
              </VStackFull>
              <CenterFull>
                <ModuleTextButton
                  icon={IoCloseCircle}
                  label="close"
                  onClick={() => {
                    setModalOpen(false);
                  }}
                />
              </CenterFull>
            </VStackFull>
          </ScrollProgressContainer>
        </FlexFull>
      </FlexFull>
    </Modal>
  );
}
