import {
  Flex,
  FlexFull,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { EpisodeType } from "../design-demos/demo-data";
import AnimatedIconButton from "~/buildingBlockComponents/animatedIconButton";
import AnimatedIconsButton from "../design-demos/animatedIconsButton";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function EpisodeCard({
  episode,
  index,
}: {
  episode: EpisodeType;
  index: number;
}) {
  const isOdd = index === 0 || index % 2 === 0;
  return (
    <ScrollTransition
      className={`w-100vw lg:w-50vw xxl:w-25vw rounded-none p-1vh lg:p-2vh xxl:p-3vh lg:text-lg xxl:text-md ${
        isOdd ? "bg-col-840" : "bg-col-940"
      }`}
      type="rotate3D"
    >
      <VStackFull>
        <VStackFull gap="gap-1vh xl:gap-2vh h-full justify-between">
          <FlexFull className="px-1vh justify-between">
            {" "}
            <Flex className="text-nowrap text-cyan-300 textShadow">
              {episode.episodeNumber}
            </Flex>
            <Flex className="text-violet-300 textShadow">
              {episode.episodeTitle}
            </Flex>
            <Flex className="text-cyan-300 textShadow">
              {episode.episodeLength}
            </Flex>
          </FlexFull>
          <FlexFull>{episode.episodeDescription}</FlexFull>
          <FlexFull className="justify-center">
            <AnimatedIconsButton
              text="listen"
              textSize="text-md"
              iconSize="text-md"
              padding="px-3vh py-0.6vh"
              bg="bg-slate-800/50"
            />
          </FlexFull>
        </VStackFull>
      </VStackFull>
    </ScrollTransition>
  );
}
