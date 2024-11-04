// SnapScrollSlideInContainer.tsx
import React, { forwardRef, Ref } from "react";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import MainPanel from "~/routes/building/mainPanel";

interface SnapScrollSlideInContainerProps {
  children: React.ReactNode;
  outerClassName?: string;
  sliderClassName?: string;
  sliderBgColor?: string;
  slideDirection?: "right" | "left";
  id?: string;
  className?: string;
}

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
      className,
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const slideInFrom =
      slideDirection === "right" ? "slideInRight" : "slideInLeft";

    return (
      <MainPanel
        ref={ref} // Forwarding the ref here
        height="h-100svh"
        className={`snap-start ${outerClassName} ${className}`}
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

SnapScrollSlideInContainer.displayName = "SnapScrollSlideInContainer";

export default SnapScrollSlideInContainer;
