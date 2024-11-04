// MainPanel.tsx
import React, { forwardRef, Ref } from "react";
import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";

interface MainPanelProps {
  children: React.ReactNode;
  height?: string;
  bg?: string;
  bgImage?: string;
  textColor?: string;
  className?: string;
  id?: string;
}

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
        ref={ref} // Forwarding the ref here
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

MainPanel.displayName = "MainPanel";

export default MainPanel;
