import {
  Box,
  Center,
  CenterFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import HorizontalScrollContainer from "./horizontalScrollContainer";

export function PanelOne() {
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

export function PanelTwo() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6} once={false}>
          <h2>Two</h2>
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
