import { VStackFull } from "~/buildingBlockComponents/mainContainers";
import SnapScrollWithNav from "./components/snapScrollWithNav";
import Image from "~/buildingBlockComponents/image";

export default function New() {
  const panels = [
    {
      id: "one",
      title: "One",
      emoji: "👋",
      slideDirection: "right",
      content: (
        <VStackFull>
          <h2>One</h2>
          {/* <Image src="/images/clouds.webp" alt="cloud" /> */}
        </VStackFull>
      ),
    },
    {
      id: "two",
      title: "Two",
      emoji: "💜",
      slideDirection: "left",
      content: <h2>Two</h2>,
    },
    {
      id: "three",
      title: "Three",
      emoji: "🚀",
      slideDirection: "right",
      content: <h2>Three</h2>,
    },
    {
      id: "four",
      title: "Four",
      emoji: "🎉",
      slideDirection: "left",
      content: <h2>Four</h2>,
    },
    {
      id: "five",
      title: "Five",
      emoji: "🔥",
      slideDirection: "right",
      content: <h2>Five</h2>,
    },
    {
      id: "six",
      title: "Six",
      emoji: "🌈",
      slideDirection: "left",
      content: <h2>Six</h2>,
    },
  ];

  return <SnapScrollWithNav panels={panels} />;
}
