import { useRef } from "react";
import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import ScrollProgressBar from "~/buildingBlockComponents/scrollProgressBar";

export default function MainIndexContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ScrollProgressBar
        containerRef={scrollContainerRef}
        centered
        color="bg-rose-300"
      />

      <FlexFull
        ref={scrollContainerRef}
        className={`fixed inset-0 h-100svh overflow-y-auto overflow-x-hidden hide-scrollbar z-0 rounded-none ${className}`}
      >
        <VStackFull className="h-fit">{children}</VStackFull>
      </FlexFull>
    </>
  );
}
