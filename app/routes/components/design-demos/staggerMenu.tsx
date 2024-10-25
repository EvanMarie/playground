import { Transition } from "~/buildingBlockComponents/mainContainers";
import StaggeredTextLines from "../building/staggeredTextLines";

export default function StaggerMenu() {
  return (
    <Transition className="hidden md:flex absolute top-23vh lg:top-30vh right-1.5vh overflow-visible">
      <StaggeredTextLines
        textClassName="text-2.5vh lg:text-3vh xl:text-3.5vh xxl:text-4vh"
        textLines={[
          "Menu item one",
          "Menu item two",
          "Menu item three",
          "Menu item four",
          "Menu item five",
        ]}
      />
    </Transition>
  );
}
