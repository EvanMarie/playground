import {
  CenterFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import SnapScrollWithNav, {
  SnapScrollPanelProps,
} from "./components/snapScrollWithNav";
import Image from "~/buildingBlockComponents/image";
import PanelOne from "./components/panelOne";

export default function New() {
  const panels: SnapScrollPanelProps[] = [
    {
      id: "one",
      buttonContent: "👋",
      slideDirection: "right",
      content: <PanelOne />,
    },
    {
      id: "two",
      buttonContent: "💜",
      slideDirection: "left",
      content: (
        <CenterFull>
          <VStackFull>
            <h2>Two</h2>
          </VStackFull>
        </CenterFull>
      ),
    },
    {
      id: "three",
      buttonContent: "🚀",
      slideDirection: "right",
      content: (
        <CenterFull>
          <VStackFull>
            <h2>Three</h2>
          </VStackFull>
        </CenterFull>
      ),
    },
    {
      id: "four",
      buttonContent: "🎉",
      slideDirection: "left",
      content: (
        <CenterFull>
          <VStackFull>
            <h2>Four</h2>
          </VStackFull>
        </CenterFull>
      ),
    },
    {
      id: "five",
      buttonContent: "🔥",
      slideDirection: "right",
      content: (
        <CenterFull>
          <VStackFull>
            <h2>Five</h2>
          </VStackFull>
        </CenterFull>
      ),
    },
    {
      id: "six",
      buttonContent: "🌈",
      slideDirection: "left",
      content: (
        <CenterFull>
          <VStackFull>
            <h2>Six</h2>
          </VStackFull>
        </CenterFull>
      ),
    },
  ];

  return <SnapScrollWithNav panels={panels} />;
}
