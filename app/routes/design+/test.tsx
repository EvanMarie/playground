import {
  Center,
  CenterFull,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import MainPanel from "../pippin+/components/building/mainPanel";
import {
  createResponsiveVariants,
  ScrollTransition,
} from "~/buildingBlockComponents/scrollTransition";

export default function Test() {
  const scrollTransitionVariants = createResponsiveVariants("md"); // Set a default size, e.g., "md"

  return (
    <FlexFull className="h-screen flex-col overflow-y-auto snap-y snap-mandatory">
      <MainPanel bg="bg-col-740" textColor="text-col-100" height="h-screen">
        <VStackFull gap="gap-3vh">
          {Object.keys(scrollTransitionVariants).map((variantName) => (
            <CenterFull
              className="h-screen snap-start border-100-md"
              key={variantName}
            >
              <ScrollTransition
                animation={variantName as keyof typeof scrollTransitionVariants}
                size="xxl"
                delay={0.3}
                amount={1}
                className="p-2vh"
              >
                <Center className="h-30vh w-40vh bg-col-700 border-900-md shadowNarrowLoose">
                  {variantName}
                </Center>
              </ScrollTransition>
            </CenterFull>
          ))}
        </VStackFull>
      </MainPanel>
    </FlexFull>
  );
}
