import { ReactNode } from "react";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function FlipInRows({ content }: { content: ReactNode[] }) {
  return (
    <VStackFull>
      {content.map((c, i) => (
        <ScrollTransition
          size="xl"
          delay={0.5 + i * 0.05}
          animation={"rotate3D"}
          className="w-full"
          once={false}
        >
          {c}
        </ScrollTransition>
      ))}
    </VStackFull>
  );
}
