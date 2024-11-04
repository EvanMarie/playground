import React, { useEffect, useRef } from "react";
import { Flex } from "~/buildingBlockComponents/mainContainers";
import MainIndexContainer from "../building/mainIndexContainer";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "@remix-run/react";
import SnapScrollSlideInContainer from "./components/snapScrollSlideInContainer";

export default function New() {
  // Define refs for each section
  const sectionRefs = useRef<{
    one: HTMLDivElement | null;
    two: HTMLDivElement | null;
    three: HTMLDivElement | null;
    four: HTMLDivElement | null;
    five: HTMLDivElement | null;
    six: HTMLDivElement | null;
  }>({
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
  });

  const location = useLocation();

  useEffect(() => {
    const sections = Object.values(sectionRefs.current).filter(
      (section): section is HTMLDivElement => section !== null
    );

    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section is visible
    };

    const observerCallback: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // Avoid updating if the hash is already correct
          if (location.hash !== `#${id}`) {
            window.history.replaceState(null, "", `#${id}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, [location.hash]);

  function NavButton({ id }: { id: string }) {
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
        <SnapScrollSlideInContainer
          ref={(el) => (sectionRefs.current.one = el)}
          id="one"
        >
          <h2 className="text-rose-100 textShadow">One</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer
          slideDirection="left"
          ref={(el) => (sectionRefs.current.two = el)}
          id="two"
        >
          <h2 className="text-rose-100 textShadow">Two</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer
          ref={(el) => (sectionRefs.current.three = el)}
          id="three"
        >
          <h2 className="text-rose-100 textShadow">Three</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer
          slideDirection="left"
          ref={(el) => (sectionRefs.current.four = el)}
          id="four"
        >
          <h2 className="text-rose-100 textShadow">Four</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer
          ref={(el) => (sectionRefs.current.five = el)}
          id="five"
        >
          <h2 className="text-rose-100 textShadow">Five</h2>
        </SnapScrollSlideInContainer>

        <SnapScrollSlideInContainer
          slideDirection="left"
          ref={(el) => (sectionRefs.current.six = el)}
          id="six"
        >
          <h2 className="text-rose-100 textShadow">Six</h2>
        </SnapScrollSlideInContainer>
      </MainIndexContainer>
    </>
  );
}
