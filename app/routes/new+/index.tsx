import SnapScrollWithNav, {
  SnapScrollPanelProps,
} from "./components/snapScrollWithNav";
import {
  PanelFive,
  PanelFour,
  PanelOne,
  PanelSix,
  PanelThree,
  PanelTwo,
} from "./components/panels";
import { BsArrowsMove } from "react-icons/bs";
import {
  IoCalendar,
  IoCalendarOutline,
  IoHome,
  IoHomeOutline,
} from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import { PiBooksBold, PiBooksFill } from "react-icons/pi";

export default function New() {
  const panels: SnapScrollPanelProps[] = [
    {
      id: "one",
      // activeButtonContent: "1",
      // transition: "right",
      activeButtonContent: <IoHome className="text-xl" />,
      inactiveButtonContent: <IoHomeOutline className="text-lg" />,
      transition: "fade",
      content: <PanelOne />,
    },
    {
      id: "two",
      // activeButtonContent: "2",
      // transition: "left",
      activeButtonContent: <PiBooksFill className="text-xl" />,
      inactiveButtonContent: <PiBooksBold className="text-lg" />,
      transition: "fade",
      content: <PanelTwo />,
    },
    {
      id: "three",
      // activeButtonContent: "3",
      // transition: "right",
      activeButtonContent: <IoCalendar className="text-xl" />,
      inactiveButtonContent: <IoCalendarOutline className="text-lg" />,
      transition: "fade",
      content: <PanelThree />,
    },
    {
      id: "four",
      // activeButtonContent: "4",
      // transition: "left",
      activeButtonContent: <BsArrowsMove className="text-xl" />,
      inactiveButtonContent: <BsArrowsMove className="text-lg" />,
      transition: "fade",
      content: <PanelFour />,
    },
    {
      id: "five",
      // activeButtonContent: "5",
      // transition: "right",
      activeButtonContent: <BsArrowsMove className="text-xl" />,
      inactiveButtonContent: <BsArrowsMove className="text-lg" />,
      transition: "fade",
      content: <PanelFive />,
    },
    {
      id: "six",
      // activeButtonContent: "6",
      // transition: "left",
      activeButtonContent: <BsArrowsMove className="text-xl" />,
      inactiveButtonContent: <BsArrowsMove className="text-lg" />,
      transition: "fade",
      content: <PanelSix />,
    },
  ];

  return <SnapScrollWithNav panels={panels} />;
}
