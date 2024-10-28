import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";
import { UpcomingEvent } from "../design-demos/demo-data";

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
      <FlexFull key={index}>
        <VStackFull align="items-start" className="border-100-md">
          <Text>{upcomingEvent.title}</Text>
          <Text>{upcomingEvent.date}</Text>
          <Text>{upcomingEvent.description}</Text>
        </VStackFull>
      </FlexFull>
    </>
  );
}
