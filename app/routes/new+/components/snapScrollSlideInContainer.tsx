import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import MainPanel from "~/routes/building/mainPanel";

export default function SnapScrollSlideInContainer({
  children,
  outerClassName,
  sliderClassName,
  sliderBgColor = "bg-teal-100",
  slideDirection = "right",
  id,
}: {
  children: React.ReactNode;
  outerClassName?: string;
  sliderClassName?: string;
  sliderBgColor?: string;
  slideDirection?: "right" | "left";
  id?: string;
}) {
  const slideInFrom =
    slideDirection === "right" ? "slideInRight" : "slideInLeft";
  return (
    <MainPanel
      height="h-100svh"
      className={`snap-start ${outerClassName}`}
      id={id}
    >
      <ScrollTransition
        className={`w-full h-full ${sliderBgColor} ${sliderClassName}`}
        animation={slideInFrom}
        size="7xl"
        amount={0.01}
        delay={0.3}
        once={false}
        type="tween"
      >
        {children}
      </ScrollTransition>
    </MainPanel>
  );
}
