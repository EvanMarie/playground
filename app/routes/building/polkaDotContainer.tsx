import {
  Flex,
  FlexFull,
  Transition,
} from "~/buildingBlockComponents/mainContainers";

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
  position?: string;
};

export function AbsoluteCircle({
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
      className={`absolute text-transparent ${bg} ${gradient} ${size} ${borderRadius} ${border} ${zIndex} ${shadow} z-0`}
      style={{
        left: left,
        right: right,
        top: top,
        bottom: bottom,
      }}
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
  "w-8.5vh h-8.5vh",
  "w-9vh h-9vh",
  "w-9.5vh h-9.5vh",
  "w-10vh h-10vh",
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
  "bg-gradient-to-br from-col-120 via-col-110 to-col-120",
  "bg-gradient-to-br from-col-130 via-col-120 to-col-130",
  "bg-gradient-to-bl from-col-120 via-col-110 to-col-120",
  "bg-gradient-to-bl from-col-130 via-col-120 to-col-130",
  "bg-gradient-to-r from-col-120 via-col-110 to-col-120",
  "bg-gradient-to-r from-col-130 via-col-120 to-col-130",
  "bg-gradient-to-l from-col-120 via-col-110 to-col-120",
  "bg-gradient-to-l from-col-130 via-col-120 to-col-130",
];

function seededRandom(seed: number) {
  return function () {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
}

const generatePositions = (
  quadrant: "topLeft" | "topRight" | "bottomLeft" | "bottomRight",
  random: () => number
) => {
  const positions = [];
  for (let i = 0; i < 25; i++) {
    let pos = random() * 52 - 2;
    let pos2 = random() * 52 - 2;

    const position: Partial<PolkaDotProps> = {};

    switch (quadrant) {
      case "topLeft":
        position.left = pos < 0 ? `${pos}vh` : `${pos}%`;
        position.top = pos2 < 0 ? `${pos2}vh` : `${pos2}%`;
        break;
      case "topRight":
        position.right = pos < 0 ? `${pos}vh` : `${pos}%`;
        position.top = pos2 < 0 ? `${pos2}vh` : `${pos2}%`;
        break;
      case "bottomLeft":
        position.left = pos < 0 ? `${pos}vh` : `${pos}%`;
        position.bottom = pos2 < 0 ? `${pos2}vh` : `${pos2}%`;
        break;
      case "bottomRight":
        position.right = pos < 0 ? `${pos}vh` : `${pos}%`;
        position.bottom = pos2 < 0 ? `${pos2}vh` : `${pos2}%`;
        break;
    }

    positions.push(position);
  }
  return positions;
};

const generateContainerPolkaDots = (dotCount: number) => {
  const dotsPerQuadrant = Math.ceil(dotCount / 4);
  const randomGen = seededRandom(123);

  const randomFromArray = <T,>(arr: T[]): T => {
    return arr[Math.floor(randomGen() * arr.length)];
  };

  const createDot = (position: Partial<PolkaDotProps>): PolkaDotProps => ({
    ...basePolkaDotProps,
    ...position,
    size: randomFromArray(randomSizes),
    delay: randomFromArray(randomDelays),
    duration: randomFromArray(randomDurations),
    bg: randomFromArray(randomBackgrounds),
    gradient: randomFromArray(randomGradients),
  });

  const topLeftDots = generatePositions("topLeft", randomGen)
    .slice(0, dotsPerQuadrant)
    .map(createDot);
  const topRightDots = generatePositions("topRight", randomGen)
    .slice(0, dotsPerQuadrant)
    .map(createDot);
  const bottomLeftDots = generatePositions("bottomLeft", randomGen)
    .slice(0, dotsPerQuadrant)
    .map(createDot);
  const bottomRightDots = generatePositions("bottomRight", randomGen)
    .slice(0, dotsPerQuadrant)
    .map(createDot);

  return [
    ...topLeftDots,
    ...topRightDots,
    ...bottomLeftDots,
    ...bottomRightDots,
  ].slice(0, dotCount);
};

export default function PolkaDotsContainer({
  children,
  width = "w-full",
  height = "h-full",
  bg = "bg-col-100 bg-gradient-to-bl from-col-330 via-col-430 to-col-330",
  overlay = "bg-col-140 backdrop-blur-[0.3vh]",
  numDots = 23,
  innerClassName,
  shadow = "shadowNarrowTight",
  outerClassName,
  rounded,
}: {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  bg?: string;
  numDots?: number;
  innerClassName?: string;
  shadow?: string;
  outerClassName?: string;
  overlay?: string;
  rounded?: string;
}) {
  const dots = generateContainerPolkaDots(numDots);

  return (
    <Flex
      className={`${outerClassName} ${shadow} ${width} ${height} ${bg} ${rounded}`}
    >
      <FlexFull
        className={`relative overflow-hidden ${innerClassName} ${rounded}`}
      >
        {dots.map((dot, index) => (
          <AbsoluteCircle key={index} {...dot} />
        ))}
        <FlexFull className={`${overlay} h-full z-10 ${rounded}`}>
          {children}
        </FlexFull>
      </FlexFull>
    </Flex>
  );
}
