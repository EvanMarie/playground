import Image from "~/buildingBlockComponents/image";
import { Transition } from "~/buildingBlockComponents/mainContainers";

export default function MandalaImage() {
  return (
    <Transition
      className="absolute top-[2svh] w-90vw h-90vw"
      type="spinScale"
      delay={0.2}
      duration={2.3}
    >
      <Image
        src="/images/mandala.webp"
        alt="Mandala"
        className="w-full h-full"
        style={{ opacity: 0.1 }}
      />
    </Transition>
  );
}
