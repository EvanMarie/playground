import React, { useEffect, useRef, useState } from "react";
import { Flex } from "~/buildingBlockComponents/mainContainers";
import MainIndexContainer from "../building/mainIndexContainer";
import { motion } from "framer-motion";
import { useLocation } from "@remix-run/react";
import SnapScrollSlideInContainer from "./components/snapScrollSlideInContainer";
import SnapScrollWithNav from "./components/snapScrollWithNav";

type SectionId = "one" | "two" | "three" | "four" | "five" | "six";

export default function New() {
  const panels = [
    {
      id: "one",
      title: "One",
      emoji: "👋",
      slideDirection: "right",
      content: <h2>One</h2>,
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
