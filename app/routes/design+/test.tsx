import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainPanel from "../components/building/mainPanel";
import MediumScreensUpPodcastTitle from "../components/building/mediumScreensUpPodcastTitle";

export default function Test() {
  return (
    <FlexFull
      className={`h-100svh flex-col relative overflow-y-auto items-center`}
    >
      <MainPanel bg={`bg-col-740`} textColor="text-col-100" height="h-100svh">
        <FlexFull className="py-2vh justify-center">
          <MediumScreensUpPodcastTitle />
        </FlexFull>
      </MainPanel>
    </FlexFull>
  );
}
