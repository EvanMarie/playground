import { useLocation } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import Transition, {
  Flex,
  FlexFull,
} from "~/buildingBlockComponents/mainContainers";
import MainIndexContainer from "~/routes/building/mainIndexContainer";
import SnapScrollSlideInContainer from "./snapScrollSlideInContainer";
import { motion } from "framer-motion";
import Tooltip from "~/buildingBlockComponents/tooltip";

export interface SnapScrollPanelProps {
  id: string;
  inactiveButtonContent: string | React.ReactNode;
  activeButtonContent: string | React.ReactNode;
  content: React.ReactNode;
  transition: string;
  name?: string;
}

export default function SnapScrollWithNav({
  panels,
  bgImage = "bg-[url('/images/clouds.webp')] bg-cover bg-center",
  bgOverlay = "bg-cyan-800/40",
  direction = "vertical",
}: {
  panels: SnapScrollPanelProps[];
  bgImage?: string;
  bgOverlay?: string;
  direction?: "vertical" | "horizontal";
}) {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  type SectionId = keyof typeof sectionRefs.current;

  const location = useLocation();
  const [currentHash, setCurrentHash] = useState(location.hash || "#one");

  // Create a ref to hold the latest currentHash
  const currentHashRef = useRef(currentHash);

  // Update the ref whenever currentHash changes
  useEffect(() => {
    currentHashRef.current = currentHash;
  }, [currentHash]);

  useEffect(() => {
    const sections = Object.values(sectionRefs.current).filter(
      (section): section is HTMLDivElement => section !== null
    );

    const observerOptions: IntersectionObserverInit = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.6, // 60% of the section is visible
    };

    const observerCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id as SectionId;
          // Use the ref to get the latest hash
          if (currentHashRef.current !== `#${id}`) {
            window.history.replaceState(null, "", `#${id}`);
            setCurrentHash(`#${id}`);
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
  }, []); // Run only once on mount

  useEffect(() => {
    // Update currentHash when location.hash changes
    setCurrentHash(location.hash);
  }, [location.hash]);

  function NavButton({
    id,
    index,
    emoji,
    activeIcon,
    inactiveIcon,
    tooltipLabel,
  }: {
    id: string;
    index: number;
    emoji?: string;
    activeIcon?: React.ReactNode;
    inactiveIcon?: React.ReactNode;
    tooltipLabel?: string;
  }) {
    const isCurrent = currentHash === id;

    const handleClick = () => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", id); // Update the hash without triggering a full navigation
      }
    };
    return (
      <Tooltip label={tooltipLabel} placement="left">
        <motion.button
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`flex justify-center items-center z-20 ${
            isCurrent
              ? "bg-fuchsia-300 w-4.5vh h-4.5vh md:w-5.5vh md:h-5.5vh text-2.7vh md:text-xxl"
              : "bg-slate-300 w-4vh h-4vh md:w-4.5vh md:h-4.5vh hover:bg-fuchsia-200 transition-300 text-2.3vh md:text-lg"
          } rounded-full border-900-sm shadowNarrowTight cursor-pointer text-col-900 transition-300`}
        >
          {emoji || isCurrent ? activeIcon : inactiveIcon}
        </motion.button>
      </Tooltip>
    );
  }

  const directionStyle = direction === "vertical" ? "snap-y" : "snap-x";
  const overflow =
    direction === "vertical"
      ? "overflow-y-auto overflow-x-hidden"
      : "overflow-x-auto overflow-y-hidden";
  const flexDirection = direction === "vertical" ? "flex-col" : "flex-row";

  return (
    <FlexFull className={`${bgImage} rounded-t-none`}>
      <FlexFull className={bgOverlay}>
        <Flex className="md:flex-col gap-4vh h-fit fixed bottom-0.5vh w-full justify-evenly md:w-fit md:right-0.5vh md:top-1/4 z-10 items-center overflow-visible">
          {panels.map((panel, index) => (
            <NavButton
              index={index}
              tooltipLabel={panel.name}
              key={panel.id}
              id={`#${panel.id}`}
              inactiveIcon={
                typeof panel.inactiveButtonContent === "string"
                  ? undefined
                  : panel.inactiveButtonContent
              }
              activeIcon={
                typeof panel.activeButtonContent === "string"
                  ? undefined
                  : panel.activeButtonContent
              }
              emoji={
                typeof panel.activeButtonContent === "string"
                  ? panel.activeButtonContent
                  : undefined
              }
            />
          ))}
        </Flex>
        <FlexFull>
          <MainIndexContainer
            className={`${directionStyle} snap-mandatory`}
            height="h-100svh"
            overflow={overflow}
            direction={flexDirection}
            scrollbarColor="bg-fuchsia-300"
          >
            {panels.map((panel) => (
              <SnapScrollSlideInContainer
                width="w-100vw"
                flexDirection="direction"
                height="h-100svh"
                key={panel.id}
                transition={panel.transition}
                id={panel.id}
                ref={(el) => (sectionRefs.current[panel.id as SectionId] = el)}
                className="snap-start"
              >
                {panel.content}
              </SnapScrollSlideInContainer>
            ))}
          </MainIndexContainer>
        </FlexFull>
      </FlexFull>
    </FlexFull>
  );
}
