import Transition, {
  CenterFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function PanelTwo() {
  return (
    <CenterFull>
      <VStackFull>
        <ScrollTransition animation="rotate3D" delay={0.6}>
          <h2>Two</h2>
        </ScrollTransition>
      </VStackFull>
    </CenterFull>
  );
}
