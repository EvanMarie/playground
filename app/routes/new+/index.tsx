import { Flex } from "~/buildingBlockComponents/mainContainers";
import MainIndexContainer from "../building/mainIndexContainer";
import SnapScrollSlideInContainer from "./components/snapScrollSlideInContainer";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "@remix-run/react";

export default function New() {
  function NavButton({ id }: { id: string }) {
    const location = useLocation();
    const currentHash = location.hash ? location.hash.substring(1) : "";
    const isCurrent = currentHash === id.substring(1);

    return (
      <NavLink to={id} className="p-0.4vh">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`${
            isCurrent
              ? "bg-rose-300 w-2vh h-2vh"
              : "bg-slate-300 w-1.5vh h-1.5vh"
          } rounded-full border-900-sm shadowNarrowTight`}
        ></motion.div>
      </NavLink>
    );
  }
  return (
    <>
      <Flex className="flex-col gap-2vh h-fit fixed right-0.5vh top-1/3 z-10 items-center">
        <NavButton id="#one" />
        <NavButton id="#two" />
        <NavButton id="#three" />
        <NavButton id="#four" />
        <NavButton id="#five" />
        <NavButton id="#six" />
      </Flex>
      <MainIndexContainer className="snap-y snap-mandatory">
        <SnapScrollSlideInContainer id="one">
          <h2 className="text-rose-100 textShadow">One</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer slideDirection="left" id="two">
          <h2 className="text-rose-100 textShadow">Two</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer id="three">
          <h2 className="text-rose-100 textShadow">Three</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer slideDirection="left" id="four">
          <h2 className="text-rose-100 textShadow">Four</h2>
        </SnapScrollSlideInContainer>
        <SnapScrollSlideInContainer id="five">
          <h2 className="text-rose-100 textShadow">Five</h2>
        </SnapScrollSlideInContainer>
        <SnapScrollSlideInContainer slideDirection="left" id="six">
          <h2 className="text-rose-100 textShadow">Six</h2>
        </SnapScrollSlideInContainer>
      </MainIndexContainer>
    </>
  );
}
