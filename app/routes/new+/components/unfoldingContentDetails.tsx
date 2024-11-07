import { ReactNode } from "react";
import Transition, {
  Flex,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import Text from "~/buildingBlockComponents/text";

export default function UnfoldingContentDetails({
  initialDelay = 0.5,
  mainInfo1 = <Text>This is the main info</Text>,
  mainInfo2 = <h5>This is the secondary info</h5>,
  subInfo = <Text>This is the sub info</Text>,
  mainInfo1Width = "w-50%",
  mainInfo2Width = "w-50%",
  subInfoTopPadding = "pt-6vh",
}: {
  initialDelay?: number;
  mainInfo1?: ReactNode;
  mainInfo2?: ReactNode;
  subInfo?: ReactNode;
  mainInfo1Width?: string;
  mainInfo2Width?: string;
  subInfoTopPadding?: string;
}) {
  return (
    <FlexFull className="p-1vh">
      <ScrollTransition
        className="w-full relative"
        amount={0.3}
        animation="rotate3D"
        size="xl"
        once={false}
        duration={1}
        delay={0.3 + initialDelay}
      >
        <VStackFull>
          <FlexFull className="absolute top-1vh  left-1vh">
            <Flex
              className={`${mainInfo1Width} bg-fuchsia-300/70 border-900-md shadowNarrowNormal p-1vh z-10`}
            >
              {mainInfo1}
            </Flex>
            <ScrollTransition
              className={`${mainInfo2Width} absolute top-0 right-1vh z-10`}
              delay={0.45 + initialDelay}
              amount={0.3}
              animation="slideInLeft"
              size="md"
              once={false}
              duration={1}
            >
              <FlexFull className="p-1vh justify-end">{mainInfo2}</FlexFull>
            </ScrollTransition>
          </FlexFull>
          <ScrollTransition
            className={`w-full ${subInfoTopPadding} bg-slate-700/80 border-900-md shadowNarrowNormal`}
            delay={0.6 + initialDelay}
            amount={0.3}
            animation="slideInTop"
            size="xs"
            once={false}
            duration={1}
          >
            {" "}
            <FlexFull className="p-1vh">{subInfo}</FlexFull>{" "}
          </ScrollTransition>
        </VStackFull>
      </ScrollTransition>
    </FlexFull>
  );
}
