import { useRef } from "react";
import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import ScrollProgressBar from "~/buildingBlockComponents/scrollProgressBar";

export default function MainIndexContainer({
  children,
  className,
  height = "h-100svh",
  overflow = "overflow-y-auto overflow-x-hidden",
  direction = "flex-col",
  scrollbarColor = "bg-rose-300",
}: {
  children: React.ReactNode;
  className?: string;
  height?: string;
  overflow?: string;
  direction?: string;
  scrollbarColor?: string;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const containerClass =
    direction === "flex-col" ? "flex-col h-fit" : "flex-row w-fit";
  return (
    <>
      <ScrollProgressBar
        containerRef={scrollContainerRef}
        centered
        color={scrollbarColor}
      />

      <FlexFull
        ref={scrollContainerRef}
        className={`fixed inset-0 ${height} ${overflow} hide-scrollbar z-0 rounded-none ${className}`}
      >
        <FlexFull className={`${containerClass}`}>{children}</FlexFull>
      </FlexFull>
    </>
  );
}
