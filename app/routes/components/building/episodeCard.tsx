import {
  Flex,
  FlexFull,
  HStackFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { EpisodeType } from "../design-demos/demo-data";

export default function EpisodeCard({
  episode,
  index,
}: {
  episode: EpisodeType;
  index: number;
}) {
  const isOdd = index === 0 || index % 2 === 0;
  return (
    <FlexFull
      className={`w-100vw lg:w-50vw xl:w-25vw rounded-none p-1vh xl:p-2vh lg:text-lg xl:text-md ${
        isOdd ? "bg-col-840" : "bg-col-940"
      }`}
    >
      <VStackFull>
        <VStackFull gap="gap-1vh xl:gap-2vh">
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
        </VStackFull>
      </VStackFull>
    </FlexFull>
  );
}
