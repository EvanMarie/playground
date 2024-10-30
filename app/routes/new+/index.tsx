import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import MainIndexContainer from "../building/mainIndexContainer";
import MainPanel from "../building/mainPanel";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function New() {
  return (
    <MainIndexContainer className="snap-y snap-mandatory">
      <MainPanel height="h-100svh" className="snap-start">
        <ScrollTransition className="w-full h-full" once={false}>
          <ScrollTransition
            className="w-full h-full bg-teal-100"
            animation="slideInLeft"
            size="7xl"
            amount={0.01}
            delay={0.5}
            once={false}
            type="tween"
          >
            <h2 className="text-sky-800">One</h2>
          </ScrollTransition>
        </ScrollTransition>
      </MainPanel>
      <MainPanel height="h-100svh" className="snap-start">
        <ScrollTransition
          className="w-full h-full bg-teal-100"
          animation="slideInRight"
          size="7xl"
          amount={0.01}
          delay={0.5}
          once={false}
          type="tween"
        >
          <h2 className="text-sky-800">Two</h2>
        </ScrollTransition>
      </MainPanel>
      <MainPanel height="h-100svh" className="snap-start">
        <ScrollTransition
          className="w-full h-full bg-teal-100"
          animation="slideInLeft"
          size="7xl"
          amount={0.01}
          delay={0.5}
          once={false}
          type="tween"
        >
          <h2 className="text-sky-800">Three</h2>
        </ScrollTransition>
      </MainPanel>
      <MainPanel height="h-100svh" className="snap-start">
        <ScrollTransition
          className="w-full h-full bg-teal-100"
          animation="slideInRight"
          size="7xl"
          amount={0.01}
          delay={0.5}
          once={false}
          type="tween"
        >
          <h2 className="text-sky-800">Four</h2>
        </ScrollTransition>
      </MainPanel>
    </MainIndexContainer>
  );
}
