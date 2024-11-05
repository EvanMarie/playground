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
      activeButtonContent: <IoHome className="text-xl" />,
      inactiveButtonContent: <IoHomeOutline className="text-lg" />,
      transition: "fade",
      content: <PanelOne />,
    },
    {
      id: "two",
      name: "writing",
      activeButtonContent: <PiBooksFill className="text-xl" />,
      inactiveButtonContent: <PiBooksBold className="text-lg" />,
      transition: "fade",
      content: <PanelTwo />,
    },
    {
      id: "three",
      name: "calendar",
      activeButtonContent: <IoCalendar className="text-xl" />,
      inactiveButtonContent: <IoCalendarOutline className="text-lg" />,
      transition: "fade",
      content: <PanelThree />,
    },
    {
      id: "four",
      name: "news",
      activeButtonContent: <FaNewspaper className="text-xl" />,
      inactiveButtonContent: <FaRegNewspaper className="text-lg" />,
      transition: "fade",
      content: <PanelFour />,
    },
    {
      id: "five",
      name: "work",
      activeButtonContent: <AiFillCode className="text-xl" />,
      inactiveButtonContent: <AiOutlineCode className="text-lg" />,
      transition: "fade",
      content: <PanelFive />,
    },
    {
      id: "six",
      name: "contact",
      activeButtonContent: <MdPermContactCalendar className="text-xl" />,
      inactiveButtonContent: (
        <MdOutlinePermContactCalendar className="text-lg" />
      ),
      transition: "fade",
      content: <PanelSix />,
    },
  ];

  return <SnapScrollWithNav panels={panels} />;
}
