import { Transition } from "~/buildingBlockComponents/mainContainers";

export type PolkaDotProps = {
  right?: string;
  left?: string;
  top?: string;
  bottom?: string;
  bg?: string;
  gradient?: string;
  size?: string;
  borderRadius?: string;
  border?: string;
  zIndex?: string;
  shadow?: string;
  delay?: number;
  duration?: number;
};

export function FixedCircle({
  right,
  left,
  top,
  bottom,
  bg = "bg-col-200",
  gradient = "bg-gradient-to-br from-col-150 via-col-140 to-col-150",
  size = "h-8vh w-8vh",
  borderRadius = "rounded-full",
  border = "border-col-920 border-[0.2vh]",
  zIndex = "z-10",
  shadow = "shadow-[0_0_2vh_0.2vh_rgba(0,0,0,0.05)]",
  delay = 0,
  duration = 1000,
}: PolkaDotProps) {
  return (
    <Transition
      className={`fixed text-transparent ${right} ${left} ${top} ${bottom} ${bg} ${gradient} ${size} ${borderRadius} ${border} ${zIndex} ${shadow}`}
      delay={delay}
      duration={duration}
      type="scale"
    >
      .
    </Transition>
  );
}

const basePolkaDotProps: PolkaDotProps = {
  zIndex: "z-5",
  size: "h-8vh w-8vh",
  bg: "bg-col-100",
  gradient: "bg-gradient-to-br from-col-250 via-col-230 to-col-250",
  border: "border-col-920 border-[0.2vh]",
  borderRadius: "rounded-full",
  shadow: "shadow-[0_0_0.1vh_0.1vh_rgba(0,0,0,0.2)]",
  delay: 0.2,
  duration: 0.5,
};

const randomSizes = [
  "w-1vh h-1vh",
  "w-1.5vh h-1.5vh",
  "w-2vh h-2vh",
  "w-2.5vh h-2.5vh",
  "w-3vh h-3vh",
  "w-3.5vh h-3.5vh",
  "w-4vh h-4vh",
  "w-4.5vh h-4.5vh",
  "w-5vh h-5vh",
  "w-5.5vh h-5.5vh",
  "w-6vh h-6vh",
  "w-6.5vh h-6.5vh",
  "w-7vh h-7vh",
  "w-7.5vh h-7.5vh",
  "w-8vh h-8vh",
];

const randomDelays = [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8, 2];
const randomDurations = [0.9, 1.2, 1.5, 1.8, 2.1, 2.4, 2.7, 3, 3.3, 3.6, 3.9];
const randomBackgrounds = [
  "bg-col-140",
  "bg-col-240",
  "bg-col-340",
  "bg-col-440",
  "bg-col-540",
];

const randomGradients = [
  "bg-gradient-to-br from-col-130 via-col-110 to-col-130",
  "bg-gradient-to-br from-col-140 via-col-120 to-col-140",
  "bg-gradient-to-bl from-col-130 via-col-110 to-col-130",
  "bg-gradient-to-bl from-col-140 via-col-120 to-col-140",
  "bg-gradient-to-r from-col-130 via-col-110 to-col-130",
  "bg-gradient-to-r from-col-140 via-col-120 to-col-140",
  "bg-gradient-to-l from-col-130 via-col-110 to-col-130",
  "bg-gradient-to-l from-col-140 via-col-120 to-col-140",
];

const randomTop = [
  "-top-2vh",
  "-top-4vh",
  "-top-0.5vh",
  "top-0.5vh",
  "top-2vh",
  "top-6vh",
  "top-8vh",
  "top-10vh",
  "top-12vh",
  "top-13vh",
  "top-16vh",
  "top-18vh",
  "top-20vh",
  "top-22vh",
  "top-24vh",
  "top-26vh",
  "top-28vh",
  "top-30vh",
  "top-32vh",
  "top-34vh",
  "top-36vh",
  "top-38vh",
  "top-40vh",
  "top-42vh",
  "top-44vh",
  "top-46vh",
  "top-48vh",
  "top-50vh",
];
const randomBottom = [
  "-bottom-2vh",
  "-bottom-4vh",
  "-bottom-0.5vh",
  "bottom-0.5vh",
  "bottom-2vh",
  "bottom-6vh",
  "bottom-8vh",
  "bottom-10vh",
  "bottom-12vh",
  "bottom-13vh",
  "bottom-16vh",
  "bottom-18vh",
  "bottom-20vh",
  "bottom-22vh",
  "bottom-24vh",
  "bottom-26vh",
  "bottom-28vh",
  "bottom-30vh",
  "bottom-32vh",
  "bottom-34vh",
  "bottom-36vh",
  "bottom-38vh",
  "bottom-40vh",
  "bottom-42vh",
  "bottom-44vh",
  "bottom-46vh",
  "bottom-48vh",
  "bottom-50vh",
];
const randomLeft = [
  "left-0.5vh",
  "left-1.5vh",
  "left-2.5vh",
  "left-3.5vh",
  "left-4.5vh",
  "left-5.5vh",
  "left-6.5vh",
  "left-7.5vh",
  "left-8.5vh",
  "left-9.5vh",
  "left-10.5vh",
  "left-11.5vh",
  "left-12.5vh",
  "left-13.5vh",
  "left-14.5vh",
  "left-15.5vh",
  "left-16.5vh",
  "left-17.5vh",
  "left-18.5vh",
  "left-19.5vh",
  "left-20.5vh",
  "left-21.5vh",
];
const randomRight = [
  "right-0.5vh",
  "right-1.5vh",
  "right-2.5vh",
  "right-3.5vh",
  "right-4.5vh",
  "right-5.5vh",
  "right-6.5vh",
  "right-7.5vh",
  "right-8.5vh",
  "right-9.5vh",
  "right-10.5vh",
  "right-11.5vh",
  "right-12.5vh",
  "right-13.5vh",
  "right-14.5vh",
  "right-15.5vh",
  "right-16.5vh",
  "right-17.5vh",
  "right-18.5vh",
  "right-19.5vh",
  "right-20.5vh",
];

const extendedRandomLeft = [
  "-left-0.5vw",
  "left-1.5vw",
  "left-2.5vw",
  "left-3.5vw",
  "left-4.5vw",
  "left-5.5vw",
  "left-6.5vw",
  "left-7.5vw",
  "left-8.5vw",
  "left-9.5vw",
  "left-10.5vw",
  "left-11.5vw",
  "left-12.5vw",
  "left-13.5vw",
  "left-14.5vw",
  "left-15.5vw",
  "left-16.5vw",
  "left-17.5vw",
  "left-18.5vw",
  "left-19.5vw",
  "left-20.5vw",
  "left-21.5vw",
  "left-22.5vw",
  "left-23.5vw",
  "left-24.5vw",
  "left-25.5vw",
  "left-26.5vw",
  "left-27.5vw",
  "left-28.5vw",
  "left-29.5vw",
  "left-30.5vw",
  "left-31.5vw",
  "left-32.5vw",
  "left-33.5vw",
  "left-34.5vw",
  "left-35.5vw",
  "left-36.5vw",
  "left-37.5vw",
  "left-38.5vw",
  "left-39.5vw",
  "left-40.5vw",
  "left-41.5vw",
  "left-42.5vw",
  "left-43.5vw",
  "left-44.5vw",
  "left-45.5vw",
  "left-46.5vw",
  "left-47.5vw",
  "left-48.5vw",
  "left-49.5vw",
];

const extendedRandomRight = [
  "-right-0.5vw",
  "right-1.5vw",
  "right-2.5vw",
  "right-3.5vw",
  "right-4.5vw",
  "right-5.5vw",
  "right-6.5vw",
  "right-7.5vw",
  "right-8.5vw",
  "right-9.5vw",
  "right-10.5vw",
  "right-11.5vw",
  "right-12.5vw",
  "right-13.5vw",
  "right-14.5vw",
  "right-15.5vw",
  "right-16.5vw",
  "right-17.5vw",
  "right-18.5vw",
  "right-19.5vw",
  "right-20.5vw",
  "right-21.5vw",
  "right-22.5vw",
  "right-23.5vw",
  "right-24.5vw",
  "right-25.5vw",
  "right-26.5vw",
  "right-27.5vw",
  "right-28.5vw",
  "right-29.5vw",
  "right-30.5vw",
  "right-31.5vw",
  "right-32.5vw",
  "right-33.5vw",
  "right-34.5vw",
  "right-35.5vw",
  "right-36.5vw",
  "right-37.5vw",
  "right-38.5vw",
  "right-39.5vw",
  "right-40.5vw",
  "right-41.5vw",
  "right-42.5vw",
  "right-43.5vw",
  "right-44.5vw",
  "right-45.5vw",
  "right-46.5vw",
  "right-47.5vw",
  "right-48.5vw",
  "right-49.5vw",
];

const numDots = 23;
const halfDots = Math.floor(numDots / 2);

const fullScreenNumDots = 33;
const fullScreenHalfDots = Math.floor(fullScreenNumDots / 2);
function seededRandom(seed: number) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const generateDots = () => {
  const random = seededRandom(123);

  const randomFromArray = <T,>(arr: T[]): T => {
    return arr[Math.floor(random() * arr.length)];
  };

  const createDot = (
    side: "left" | "right",
    position: "top" | "bottom"
  ): PolkaDotProps => ({
    ...basePolkaDotProps,
    [side]:
      side === "left"
        ? randomFromArray(randomLeft)
        : randomFromArray(randomRight),
    [position]:
      position === "top"
        ? randomFromArray(randomTop)
        : randomFromArray(randomBottom),
    size: randomFromArray(randomSizes),
    delay: randomFromArray(randomDelays),
    duration: randomFromArray(randomDurations),
    bg: randomFromArray(randomBackgrounds),
    gradient: randomFromArray(randomGradients),
  });

  const rightSideDots = [
    ...Array.from({ length: halfDots }, () => createDot("right", "top")),
    ...Array.from({ length: halfDots }, () => createDot("right", "bottom")),
  ];

  const leftSideDots = [
    ...Array.from({ length: halfDots }, () => createDot("left", "top")),
    ...Array.from({ length: halfDots }, () => createDot("left", "bottom")),
  ];

  return [...rightSideDots, ...leftSideDots];
};

const generateFullScreenDots = () => {
  const random = seededRandom(123);

  const randomFromArray = <T,>(arr: T[]): T => {
    return arr[Math.floor(random() * arr.length)];
  };

  const createDot = (
    side: "left" | "right",
    position: "top" | "bottom"
  ): PolkaDotProps => ({
    ...basePolkaDotProps,
    [side]:
      side === "left"
        ? randomFromArray(extendedRandomLeft)
        : randomFromArray(extendedRandomRight),
    [position]:
      position === "top"
        ? randomFromArray(randomTop)
        : randomFromArray(randomBottom),
    size: randomFromArray(randomSizes),
    delay: randomFromArray(randomDelays),
    duration: randomFromArray(randomDurations),
    bg: randomFromArray(randomBackgrounds),
    gradient: randomFromArray(randomGradients),
  });

  const rightSideDots = [
    ...Array.from({ length: halfDots }, () => createDot("right", "top")),
    ...Array.from({ length: halfDots }, () => createDot("right", "bottom")),
  ];

  const leftSideDots = [
    ...Array.from({ length: fullScreenHalfDots }, () =>
      createDot("left", "top")
    ),
    ...Array.from({ length: fullScreenHalfDots }, () =>
      createDot("left", "bottom")
    ),
  ];

  return [...rightSideDots, ...leftSideDots];
};

const generateSparseDots = () => {
  const random = seededRandom(123);
  const randomFromArray = <T,>(arr: T[]): T => {
    return arr[Math.floor(random() * arr.length)];
  };

  const createDot = (): PolkaDotProps => ({
    ...basePolkaDotProps,
    left: randomFromArray(extendedRandomLeft),
    top: randomFromArray(randomTop),
    size: randomFromArray(randomSizes),
    delay: randomFromArray(randomDelays),
    duration: randomFromArray(randomDurations),
    bg: randomFromArray(randomBackgrounds),
    gradient: randomFromArray(randomGradients),
  });

  return Array.from({ length: 10 }, () => {
    const isLeftSide = random() > 0.5;
    const isTopHalf = random() > 0.5;

    return {
      ...createDot(),
      left: isLeftSide ? randomFromArray(extendedRandomLeft) : undefined,
      right: !isLeftSide ? randomFromArray(extendedRandomRight) : undefined,
      top: isTopHalf ? randomFromArray(randomTop) : undefined,
      bottom: !isTopHalf ? randomFromArray(randomBottom) : undefined,
    };
  });
};

export const PolkaDots = generateDots();
export const FullScreenDots = generateFullScreenDots();
export const SparseDots = generateSparseDots();
