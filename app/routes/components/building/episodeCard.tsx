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
      type="rotate3D"
      className="px-1vh py-0.5vh w-100vw lg:w-50vw xxl:w-25vw "
    >
      <FlexFull
        className={`rounded-none lg:text-lg xxl:text-md border-100-md ${
          isOdd ? "bg-col-840" : "bg-col-940"
        }`}
      >
        <VStackFull>
          <VStackFull
            gap="gap-1vh xl:gap-2vh"
            className="h-full justify-between text-lg md:text-xl lg:text-lg xl:text-md"
          >
            <FlexFull className="justify-between rounded-none border-b-100-md">
              <Flex className="text-nowrap text-cyan-300 textShadow p-1.5vh w-fit flex-shrink-0">
                {episode.episodeNumber}
              </Flex>
              <FlexFull className="text-violet-300 textShadow border-x-[0.2vh] border-col-100 rounded-none py-1.5vh justify-center">
                {episode.episodeTitle}
              </FlexFull>
              <Flex className="text-cyan-300 textShadow p-1.5vh w-fit flex-shrink-0">
                {episode.episodeLength}
              </Flex>
            </FlexFull>
            <VStackFull
              className="p-2vh lg:p-2vh xxl:p-3vh h-full"
              gap="gap-2vh"
            >
              <FlexFull className="px-1vh h-full items-center">
                {episode.episodeDescription}
              </FlexFull>
              <FlexFull className="justify-center">
                <AnimatedIconsButton
                  text="listen"
                  textSize="text-md"
                  iconSize="text-md"
                  padding="px-3vh py-0.6vh"
                  bg="bg-slate-800/50"
                />
              </FlexFull>{" "}
            </VStackFull>
          </VStackFull>
        </VStackFull>
      </FlexFull>{" "}
    </ScrollTransition>
  );
}
