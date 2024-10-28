import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import { UpcomingEvent } from "../design-demos/demo-data";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import Divider from "~/buildingBlockComponents/divider";

export default function EventCard({
  upcomingEvent,
  index,
}: {
  upcomingEvent: UpcomingEvent;
  index: number;
}) {
  return (
    <>
      {" "}
      <ScrollTransition amount={0.4} type="zoom">
        <VStackFull key={index}>
          <VStackFull align="items-start" className="px-2vh md:px-3vh">
            <Text className="text-cyan-300 textShadow">
              {upcomingEvent.title}
            </Text>
            <Text className="text-purple-300 textShadow">
              {upcomingEvent.date}
            </Text>
            <Text>{upcomingEvent.description}</Text>
          </VStackFull>
          <Divider m="mt-2.5vh" />
        </VStackFull>
      </ScrollTransition>
    </>
  );
}
