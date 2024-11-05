import { ReactNode } from "react";
import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

export default function SlideInRows({ content }: { content: ReactNode[] }) {
  return (
    <VStackFull>
      {content.map((c, i) => (
        <ScrollTransition
          size="xl"
          delay={0.5 + i * 0.1}
          animation={i === 0 || i % 2 === 0 ? "slideInRight" : "slideInLeft"}
          className="w-full"
          once={false}
        >
          {c}
        </ScrollTransition>
      ))}
    </VStackFull>
  );
}
