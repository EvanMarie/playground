import {
  Box,
  Center,
  CenterFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import HorizontalScrollContainer from "./horizontalScrollContainer";
import PopUpContent from "./popupContent";
import FlipInRows from "./flipInRows";
import PanelShiftReveal from "./panelShiftReveal";

export function PanelOne() {
  return (
    <PanelShiftReveal
      sectionClassName="border-fuchsia-300 border-[0.2vh] shadowNarrowLooser border-[0.2vh]"
      duration={0.5}
    />
  );
}

export function PanelTwo() {
  return (
    <CenterFull>
      <VStackFull>
        <HorizontalScrollContainer>
          <Box className="p-1vh">
            <Center className="w-40vw h-80vh bg-fuchsia-300/70 border-900-md shadowNarrowNormal flex-shrink-0">
              1
            </Center>
          </Box>
          <Box className="p-1vh">
            <Center className="w-40vw h-80vh bg-fuchsia-300/70 border-900-md shadowNarrowNormal flex-shrink-0">
              2
            </Center>
          </Box>
          <Box className="p-1vh">
            <Center className="w-40vw h-80vh bg-fuchsia-300/70 border-900-md shadowNarrowNormal flex-shrink-0">
              3
            </Center>
          </Box>
          <Box className="p-1vh">
            <Center className="w-40vw h-80vh bg-fuchsia-300/70 border-900-md shadowNarrowNormal flex-shrink-0">
              4
            </Center>
          </Box>
          <Box className="p-1vh">
            <Center className="w-40vw h-80vh bg-fuchsia-300/70 border-900-md shadowNarrowNormal  flex-shrink-0">
              5
            </Center>
          </Box>
          <Box className="p-1vh">
            <Center className="w-40vw h-80vh bg-fuchsia-300/70 border-900-md shadowNarrowNormal  flex-shrink-0">
              6
            </Center>
          </Box>
        </HorizontalScrollContainer>
      </VStackFull>
    </CenterFull>
  );
}

export function PanelThree() {
  const contents = [
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      1
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      2
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      3
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      4
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      5
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      6
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      7
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      8
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      9
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      10
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      11
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      12
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      13
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      14
    </Center>,
    <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
      15
    </Center>,
  ];
  return (
    <CenterFull>
      <FlipInRows content={contents} />
    </CenterFull>
  );
}

export function PanelFour() {
  return (
    <CenterFull>
      <VStackFull>
        <PopUpContent
          contents={[
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              1
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              2
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              3
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              4
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              5
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              6
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              7
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              8
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              9
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              10
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              11
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              12
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              13
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              14
            </Center>,
            <Center className="w-full h-full bg-fuchsia-300/70 border-900-md shadowNarrowNormal">
              15
            </Center>,
          ]}
        />
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
