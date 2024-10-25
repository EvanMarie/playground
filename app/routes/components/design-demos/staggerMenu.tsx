import { Transition } from "~/buildingBlockComponents/mainContainers";
import StaggeredTextLines from "../building/staggeredTextLines";

export default function StaggerMenu() {
  return (
    <Transition className="hidden md:flex absolute top-20vh right-1.5vh overflow-visible">
      <StaggeredTextLines
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
