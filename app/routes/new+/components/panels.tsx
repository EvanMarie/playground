import {
  Box,
  Center,
  CenterFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import HorizontalScrollContainer from "./horizontalScrollContainer";
import UnfoldingContent from "./unfoldingContent";

export function PanelOne() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6} once={false}>
          <UnfoldingContent
            contents={[
              <Center className="w-full h-full bg-blue-500">One</Center>,
              <Center className="w-full h-full bg-blue-500">Two</Center>,
              <Center className="w-full h-full bg-blue-500">Three</Center>,
              <Center className="w-full h-full bg-blue-500">Four</Center>,
              <Center className="w-full h-full bg-blue-500">Five</Center>,
              <Center className="w-full h-full bg-blue-500">Six</Center>,
            ]}
          />
        </ScrollTransition>
      </VStackFull>
    </CenterFull>
  );
}

export function PanelTwo() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6} once={false}>
          <HorizontalScrollContainer>
            <Box className="p-1vh">
              <Center className="w-40vw h-80vh bg-blue-500 flex-shrink-0">
                1
              </Center>
            </Box>
            <Box className="p-1vh">
              <Center className="w-40vw h-80vh bg-blue-500 flex-shrink-0">
                2
              </Center>
            </Box>
            <Box className="p-1vh">
              <Center className="w-40vw h-80vh bg-blue-500 flex-shrink-0">
                3
              </Center>
            </Box>
            <Box className="p-1vh">
              <Center className="w-40vw h-80vh bg-blue-500 flex-shrink-0">
                4
              </Center>
            </Box>
            <Box className="p-1vh">
              <Center className="w-40vw h-80vh bg-blue-500  flex-shrink-0">
                5
              </Center>
            </Box>
            <Box className="p-1vh">
              <Center className="w-40vw h-80vh bg-blue-500  flex-shrink-0">
                6
              </Center>
            </Box>
          </HorizontalScrollContainer>
        </ScrollTransition>
      </VStackFull>
    </CenterFull>
  );
}

export function PanelThree() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6} once={false}>
          <h2>Three</h2>
        </ScrollTransition>
      </VStackFull>
    </CenterFull>
  );
}

export function PanelFour() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6} once={false}>
          <h2>Four</h2>
        </ScrollTransition>
      </VStackFull>
    </CenterFull>
  );
}

export function PanelFive() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6} once={false}>
          <h2>Five</h2>
        </ScrollTransition>
      </VStackFull>
    </CenterFull>
  );
}

export function PanelSix() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6} once={false}>
          <h2>Six</h2>
        </ScrollTransition>
      </VStackFull>
    </CenterFull>
  );
}
