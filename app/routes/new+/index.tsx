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
import { FaInfo, FaNewspaper, FaRegNewspaper } from "react-icons/fa";
import { PiBooksBold, PiBooksFill } from "react-icons/pi";
import {
  MdOutlinePermContactCalendar,
  MdPermContactCalendar,
} from "react-icons/md";
import { AiFillCode, AiOutlineCode } from "react-icons/ai";

export default function New() {
  const panels: SnapScrollPanelProps[] = [
    {
      id: "one",
      name: "home",
      activeButtonContent: <IoHome />,
      inactiveButtonContent: <IoHomeOutline />,
      transition: "fade",
      content: <PanelOne />,
    },
    {
      id: "two",
      name: "writing",
      activeButtonContent: <PiBooksFill />,
      inactiveButtonContent: <PiBooksBold />,
      transition: "fade",
      content: <PanelTwo />,
    },
    {
      id: "three",
      name: "calendar",
      activeButtonContent: <IoCalendar />,
      inactiveButtonContent: <IoCalendarOutline />,
      transition: "fade",
      content: <PanelThree />,
    },
    {
      id: "four",
      name: "news",
      activeButtonContent: <FaNewspaper />,
      inactiveButtonContent: <FaRegNewspaper />,
      transition: "fade",
      content: <PanelFour />,
    },
    {
      id: "five",
      name: "work",
      activeButtonContent: <AiFillCode />,
      inactiveButtonContent: <AiOutlineCode />,
      transition: "fade",
      content: <PanelFive />,
    },
    {
      id: "six",
      name: "contact",
      activeButtonContent: <MdPermContactCalendar />,
      inactiveButtonContent: <MdOutlinePermContactCalendar />,
      transition: "fade",
      content: <PanelSix />,
    },
  ];

  return <SnapScrollWithNav panels={panels} />;
}
