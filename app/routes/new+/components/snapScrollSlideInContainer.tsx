// SnapScrollSlideInContainer.tsx
import React, { forwardRef, Ref } from "react";
import {
  ScrollTransition,
  ScrollTransitionAnimation,
} from "~/buildingBlockComponents/scrollTransition";
import MainPanel from "~/routes/building/mainPanel";

interface SnapScrollSlideInContainerProps {
  children: React.ReactNode;
  outerClassName?: string;
  sliderClassName?: string;
  sliderBgColor?: string;
  transition?: ScrollTransitionAnimation;
  id?: string;
  className?: string;
  height?: string;
  flexDirection?: string;
  width?: string;
}

const SnapScrollSlideInContainer = forwardRef<
  HTMLDivElement,
  SnapScrollSlideInContainerProps
>(
  (
    {
      children,
      height = "h-100svh",
      outerClassName = "",
      sliderClassName = "",
      sliderBgColor = "bg-slate-500 bg-gradient-to-br from-slate-600 via-slate-700/80 to-slate-600",
      transition = "right",
      flexDirection = "flex-col",
      width = "w-full",
      id,
      className,
    },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <MainPanel
        ref={ref} // Forwarding the ref here
        height={height}
        className={`snap-start ${outerClassName} ${className} ${width}`}
        id={id}
        direction={flexDirection}
      >
        <ScrollTransition
          className={`w-100vw h-full rounded-none ${sliderBgColor} ${sliderClassName} `}
          animation={transition}
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
