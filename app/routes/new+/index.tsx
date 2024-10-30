import { Flex, FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainIndexContainer from "../building/mainIndexContainer";
import SnapScrollSlideInContainer from "./components/snapScrollSlideInContainer";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "@remix-run/react";
import { useScrollToHash } from "~/utils/useScrollToHash";

export default function New() {
  function NavButton({ id, label }: { id: string; label: string }) {
    const location = useLocation();
    const currentHash = location.hash ? location.hash.substring(1) : "";
    const isCurrent = currentHash === id.substring(1);

    return (
      <NavLink to={id}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${isCurrent ? "bg-pink-400" : "bg-blue-500"} w-full`}
        >
          {label}
        </motion.div>
      </NavLink>
    );
  }
  return (
    <>
      <Flex className="flex-col gap-2vh h-fit fixed right-0.5vh top-1/2 z-10">
        <NavButton id="#one" label="One" />
        <NavButton id="#two" label="Two" />
        <NavButton id="#three" label="Three" />
        <NavButton id="#four" label="Four" />
        <NavButton id="#five" label="Five" />
        <NavButton id="#six" label="Six" />
      </Flex>
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
