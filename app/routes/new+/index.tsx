import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainIndexContainer from "../building/mainIndexContainer";
import SnapScrollSlideInContainer from "./components/snapScrollSlideInContainer";
import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";

export default function New() {
  function NavButton({ id, label }: { id: string; label: string }) {
    return (
      <NavLink to={id}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500"
        >
          {label}
        </motion.div>
      </NavLink>
    );
  }
  return (
    <>
      <FlexFull className="flex-col h-fit absolute right-0.5vh top-1/2">
        <motion.button>One</motion.button> <motion.button>Two</motion.button>{" "}
        <motion.button>Three</motion.button>
        <motion.button>Four</motion.button> <motion.button>Five</motion.button>
        <motion.button>Six</motion.button>
      </FlexFull>
      <MainIndexContainer className="snap-y snap-mandatory">
        <SnapScrollSlideInContainer id="one">
          <h2 className="text-sky-800">One</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer slideDirection="left" id="two">
          <h2 className="text-sky-800">Two</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer id="three">
          <h2 className="text-sky-800">Three</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer slideDirection="left" id="four">
          <h2 className="text-sky-800">Four</h2>
        </SnapScrollSlideInContainer>
        <SnapScrollSlideInContainer id="five">
          <h2 className="text-sky-800">Five</h2>
        </SnapScrollSlideInContainer>
        <SnapScrollSlideInContainer slideDirection="left" id="six">
          <h2 className="text-sky-800">Six</h2>
        </SnapScrollSlideInContainer>
      </MainIndexContainer>
    </>
  );
}
