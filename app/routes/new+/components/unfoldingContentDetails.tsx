import Transition, {
  Flex,
  FlexFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function UnfoldingContentDetails({ initial }) {
  return (
    <ScrollTransition
      className="w-full p-0.5vh"
      amount={0.3}
      animation="slideInRight"
      size="xl"
      once={false}
      duration={1}
      delay={0.5}
    >
      <VStackFull>
        <FlexFull className="">
          <Flex className="w-40% bg-fuchsia-300/70 border-900-md shadowNarrowNormal p-1vh">
            This
          </Flex>
          <ScrollTransition
            className="w-60%"
            delay={1.4}
            amount={0.3}
            animation="slideInLeft"
            size="md"
            once={false}
            duration={1}
          >
            <FlexFull className="bg-slate-900/30">That</FlexFull>
          </ScrollTransition>
        </FlexFull>
        <ScrollTransition
          className="w-full"
          delay={1.7}
          amount={0.3}
          animation="slideInTop"
          size="md"
          once={false}
          duration={1}
        >
          {" "}
          <FlexFull className="p-1vh bg-slate-700/30">That</FlexFull>{" "}
        </ScrollTransition>
      </VStackFull>
    </ScrollTransition>
  );
}
