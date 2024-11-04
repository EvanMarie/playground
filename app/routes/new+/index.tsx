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
      // slideDirection: "right",
      slideDirection: "rotate3d",
      content: <PanelOne />,
    },
    {
      id: "two",
      buttonContent: "💜",
      // slideDirection: "left",
      slideDirection: "rotate3d",
      content: <PanelTwo />,
    },
    {
      id: "three",
      buttonContent: "🚀",
      // slideDirection: "right",
      slideDirection: "rotate3d",
      content: <PanelThree />,
    },
    {
      id: "four",
      buttonContent: "🎉",
      // slideDirection: "left",
      slideDirection: "rotate3d",
      content: <PanelFour />,
    },
    {
      id: "five",
      buttonContent: "🔥",
      // slideDirection: "right",
      slideDirection: "rotate3d",
      content: <PanelFive />,
    },
    {
      id: "six",
      buttonContent: "🌈",
      // slideDirection: "left",
      slideDirection: "rotate3d",
      content: <PanelSix />,
    },
  ];

  return <SnapScrollWithNav panels={panels} />;
}
