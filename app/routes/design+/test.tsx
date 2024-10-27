import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import PodCastTitle from "../components/design-demos/podcastTitle";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import MainPanel from "../components/building/mainPanel";
import AnimatedIconsButton from "../components/design-demos/animatedIconsButton";

export default function Test() {
  return (
    <FlexFull className={`h-100svh flex-col relative overflow-y-auto`}>
      <MainPanel bg={`bg-col-740`} textColor="text-col-100">
        <PodCastTitle />
        <VStackFull className="py-2vh" gap="gap-2vh px-2vh sm:px-3vh md:px-4vh">
          <ScrollTransition
            // variants={{
            //   initial: { y: "20vh", opacity: 0 },
            //   animate: { y: 0, opacity: 1 },
            //   exit: { y: "20vh", opacity: 0 },
            //   transition: { duration: 1.5, delay: 0.5 },
            // }}
            type="fadeSlideInBottomQuarter"
          >
            <Text>
              In his weekly podcast, Pip shares tales of kindness, laughter, and
              little bits of his fluffy wisdom. Tune in for uplifting chats with
              special guests, meditative moments, and reflections on finding
              light in everyday life.
            </Text>
          </ScrollTransition>
          <FlexFull className="justify-center">
            <AnimatedIconsButton text="Tune In" />
          </FlexFull>
        </VStackFull>
      </MainPanel>
    </FlexFull>
  );
}
