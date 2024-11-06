import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function UnfoldingContentDetails() {
  return <ScrollTransition>
      <FlexFull></FlexFull>
  </ScrollTransition>;
}
