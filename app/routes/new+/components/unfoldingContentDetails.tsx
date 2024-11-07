import Transition, {
  Flex,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function UnfoldingContentDetails({
  initialDelay = 0.5,
}: {
  initialDelay: number;
}) {
  return (
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
        <FlexFull className="gap-1.5vh absolute top-0 right-0 left-0">
          <Flex className="w-40% bg-fuchsia-300/70 border-900-md shadowNarrowNormal p-1vh z-10">
            This
          </Flex>
          <ScrollTransition
            className="w-60% absolute top-0 right-0 z-10"
            delay={0.45 + initialDelay}
            amount={0.3}
            animation="slideInLeft"
            size="md"
            once={false}
            duration={1}
          >
            <FlexFull className="p-1vh justify-end">That</FlexFull>
          </ScrollTransition>
        </FlexFull>
        <ScrollTransition
          className="w-full pt-5vh bg-slate-700/80"
          delay={0.6 + initialDelay}
          amount={0.3}
          animation="slideInTop"
          size="xs"
          once={false}
          duration={1}
        >
          {" "}
          <FlexFull className="p-1vh">Something else</FlexFull>{" "}
        </ScrollTransition>
      </VStackFull>
    </ScrollTransition>
  );
}
