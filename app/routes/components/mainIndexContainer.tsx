import { useRef } from "react";
import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import ScrollProgressBar from "~/buildingBlockComponents/scrollProgressBar";

export default function MainIndexContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {" "}
      <ScrollProgressBar containerRef={scrollContainerRef} />
      <FlexFull
        className="fixed inset-0 h-100svh overflow-y-auto overflow-x-hidden rounded-none hide-scrollbar"
        containerRef={scrollContainerRef}
      >
        <VStackFull className="h-fit">{children}</VStackFull>
      </FlexFull>
    </>
  );
}
