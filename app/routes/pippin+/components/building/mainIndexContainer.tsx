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
      <ScrollProgressBar containerRef={scrollContainerRef} centered />

      <FlexFull
        ref={scrollContainerRef} // Update here if it's not used this way
        className="fixed inset-0 h-100svh overflow-y-auto overflow-x-hidden hide-scrollbar z-0 rounded-none"
      >
        <VStackFull className="h-fit">{children}</VStackFull>
      </FlexFull>
    </>
  );
}
