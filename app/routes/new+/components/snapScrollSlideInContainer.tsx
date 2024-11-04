import React, { forwardRef, Ref } from "react";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import MainPanel from "~/routes/building/mainPanel";

// Define the props interface
interface SnapScrollSlideInContainerProps {
  children: React.ReactNode;
  outerClassName?: string;
  sliderClassName?: string;
  sliderBgColor?: string;
  slideDirection?: "right" | "left";
  id?: string;
}

// Use forwardRef to allow parent components to pass refs
const SnapScrollSlideInContainer = forwardRef<
  HTMLDivElement,
  SnapScrollSlideInContainerProps
>(
  (
    {
      children,
      outerClassName = "",
      sliderClassName = "",
      sliderBgColor = "bg-slate-500 bg-gradient-to-br from-slate-600 via-slate-700/80 to-slate-600",
      slideDirection = "right",
      id,
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const slideInFrom =
      slideDirection === "right" ? "slideInRight" : "slideInLeft";

    return (
      <MainPanel
        ref={ref} // Forward the ref to MainPanel
        height="h-100svh"
        className={`snap-start ${outerClassName}`}
        id={id}
      >
        <ScrollTransition
          className={`w-full h-full rounded-none ${sliderBgColor} ${sliderClassName}`}
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
);

// Optional: Set a display name for better debugging
SnapScrollSlideInContainer.displayName = "SnapScrollSlideInContainer";

export default SnapScrollSlideInContainer;
