import {
  CenterFull,
  VStackFull,
} from "~/buildingBlockComponents/mainContainers";
import SnapScrollWithNav, {
  SnapScrollPanelProps,
} from "./components/snapScrollWithNav";
import Image from "~/buildingBlockComponents/image";
import {
  PanelFive,
  PanelFour,
  PanelOne,
  PanelSix,
  PanelThree,
  PanelTwo,
} from "./components/panels";

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
      content: <PanelTwo />,
    },
    {
      id: "three",
      buttonContent: "🚀",
      slideDirection: "right",
      content: <PanelThree />,
    },
    {
      id: "four",
      buttonContent: "🎉",
      slideDirection: "left",
      content: <PanelFour />,
    },
    {
      id: "five",
      buttonContent: "🔥",
      slideDirection: "right",
      content: <PanelFive />,
    },
    {
      id: "six",
      buttonContent: "🌈",
      slideDirection: "left",
      content: <PanelSix />,
    },
  ];

  return <SnapScrollWithNav panels={panels} />;
}
