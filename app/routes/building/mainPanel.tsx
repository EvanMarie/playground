import React, { forwardRef, Ref } from "react";
import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";

// Define the props interface
interface MainPanelProps {
  children: React.ReactNode;
  height?: string;
  bg?: string;
  bgImage?: string;
  textColor?: string;
  className?: string;
  id?: string;
}

// Use forwardRef to allow parent components to pass refs
const MainPanel = forwardRef<HTMLDivElement, MainPanelProps>(
  (
    {
      children,
      height = "h-fit",
      bg = "",
      bgImage = "",
      textColor = "",
      className = "",
      id,
    },
    ref: Ref<HTMLDivElement>
  ) => {
    return (
      <FlexFull
        ref={ref} // Forward the ref to the outer FlexFull
        className={`${height} ${bgImage} z-0 justify-center rounded-none`}
        id={id}
      >
        <FlexFull
          className={`${height} ${bg} ${textColor} ${className} justify-center rounded-none`}
        >
          <VStackFull>{children}</VStackFull>
        </FlexFull>
      </FlexFull>
    );
  }
);

// Optional: Set a display name for better debugging in React DevTools
MainPanel.displayName = "MainPanel";

export default MainPanel;
