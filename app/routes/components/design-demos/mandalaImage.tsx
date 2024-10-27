import Image from "~/buildingBlockComponents/image";
import {
  Transition,
  TransitionVariantType,
} from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function MandalaImage({
  position = "absolute top-[2svh]",
  size = "w-90vw h-90vw",
  delay = 0.2,
  duration = 2.3,
  opacity = 0.1,
  transition = "spinScale",
}: {
  position?: string;
  size?: string;
  delay?: number;
  duration?: number;
  opacity?: number;
  transition?: TransitionVariantType;
}) {
  return (
    <ScrollTransition
      className={`${position} ${size}`}
      type={transition}
      delay={delay}
      duration={duration}
    >
      <Image
        src="/images/mandala.webp"
        alt="Mandala"
        className="w-full h-full"
        style={{ opacity: opacity }}
      />
    </ScrollTransition>
  );
}
