import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import Image from "~/buildingBlockComponents/image";
import { FlexFull, Wrap } from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

// Type definitions for division settings
interface DivisionSettings {
  numDivisions: number;
  transitions: Array<
    | "fadeOut"
    | "slideOutDown"
    | "slideOutUp"
    | "rotate3D"
    | "zoomOut"
    | "zoomIn"
  >;
  delays: number[];
  widths: string[];
  heights: string[];
}

interface EmergingImageProps {
  bgImage?: string;
  numDivisions?: 1 | 2 | 2.2 | 3 | 3.2 | 4 | 6 | 8 | 9 | 12 | 9.2;
  coverBg?: string;
  delay?: number;
  imageOverlay?: string;
  sectionClassName?: string;
  duration?: number;
}

export default function PanelShiftReveal({
  bgImage,
  numDivisions = 9.2,
  delay = 1,
  coverBg = "bg-slate-900/80 backdrop-blur-md",
  imageOverlay = "bg-slate-900/20 backdrop-blur-[0.3vh]",
  sectionClassName = "",
  duration = 1.5,
}: EmergingImageProps) {
  const divisionSettings = [
    {
      numDivisions: 1,
      transitions: ["fadeOut"],
      delays: [0.5],
      widths: ["w-100vw"],
      heights: ["h-100svh"],
    },
    {
      numDivisions: 2,
      transitions: ["slideOutDown", "slideOutUp"],
      delays: [0.5, 0.8],
      widths: Array(2).fill("w-50vw"),
      heights: Array(2).fill("h-100svh"),
    },
    {
      numDivisions: 2.2,
      transitions: ["slideOutDown", "slideOutUp"],
      delays: [0.5, 0.7, 0.3],
      widths: Array(2).fill("w-100vw"),
      heights: Array(2).fill("h-50svh"),
    },
    {
      numDivisions: 3,
      delays: [0.2, 0.4, 0.6],
      transitions: ["rotate3D", "rotate3D", "rotate3D"],
      widths: ["w-50vw", "w-50vw", "w-100vw"],
      heights: Array(3).fill("h-50svh"),
    },
    {
      numDivisions: 3.2,
      delays: [0.2, 0.4, 0.6],
      transitions: ["rotate3D", "rotate3D", "rotate3D"],
      widths: ["w-100vw", "w-50vw", "w-50vw"],
      heights: Array(3).fill("h-50svh"),
    },
    {
      numDivisions: 4,
      delays: [0.2, 0.4, 0.6, 0.8],
      transitions: ["rotate3D", "fadeOut", "rotate3D", "fadeOut"],
      widths: Array(4).fill("w-50vw"),
      heights: Array(4).fill("h-50svh"),
    },
    {
      numDivisions: 6,
      delays: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      transitions: [
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
      ],
      widths: Array(6).fill("w-33.3vw"),
      heights: Array(6).fill("h-50svh"),
    },
    {
      numDivisions: 8,
      delays: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      transitions: [
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
      ],
      widths: Array(8).fill("w-25vw"),
      heights: Array(8).fill("h-50svh"),
    },
    {
      numDivisions: 9,
      delays: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      transitions: [
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
      ],
      widths: Array(9).fill("w-33.3vw"),
      heights: Array(9).fill("h-33.3svh"),
    },
    {
      numDivisions: 12,
      delays: [0.3, 1.6, 0.5, 0.7, 0.8, 0.7, 1.5, 1, 1.2, 1.3, 1.4, 1.2],
      transitions: [
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
        "rotate3D",
        "fadeOut",
      ],
      widths: Array(12).fill("w-25vw"),
      heights: Array(12).fill("h-33.4svh"),
    },
    // 9 uneven divisions with 3 rows and 4 rows
    {
      numDivisions: 9.2,
      delays: [0.3, 0.5, 0.8, 1.1, 1, 0.7, 0.6, 0.9, 0.4],
      // transitions: [
      //   "zoomOut",
      //   "zoomOut",
      //   "zoomOut",
      //   "zoomOut",
      //   "zoomOut",
      //   "zoomOut",
      //   "zoomOut",
      //   "zoomOut",
      //   "zoomOut",
      // ],
      transitions: [
        "zoomIn",
        "zoomIn",
        "zoomIn",
        "zoomIn",
        "zoomIn",
        "zoomIn",
        "zoomIn",
        "zoomIn",
        "zoomIn",
      ],
      widths: [
        "w-20vw",
        "w-40vw",
        "w-40vw",
        "w-40vw",
        "w-15vw",
        "w-45vw",
        "w-30vw",
        "w-45vw",
        "w-25vw",
      ],
      heights: Array(9).fill("h-34svh"),
    },
  ];

  // Find the settings that match the specified number of divisions
  const divisions = divisionSettings.find(
    (division) => division.numDivisions === numDivisions
  );

  if (!divisions) {
    return null; // Return null if no matching settings are found
  }

  // Framer Motion variants for animation types
  const animationVariants: Variants = {
    initial: { opacity: 1 }, // Start with full opacity
    fadeOut: { opacity: 0 },
    slideOutDown: { y: "100vh", opacity: 0 },
    slideOutUp: { y: "-100vh", opacity: 0 },
    rotate3D: { rotateY: 180, opacity: 0 },
    zoomOut: { scale: 0, opacity: 0 },
    zoomIn: { scale: 3, opacity: 0, borderRadius: "100%" },
  };

  return (
    <FlexFull className="h-100svh w-100vw relative overflow-hidden">
      {/* Background Image */}
      {bgImage && (
        <Image
          src={bgImage}
          className="absolute z-5 inset-0 object-cover w-full h-full"
          alt="background image"
        />
      )}
      <FlexFull
        className={`absolute inset-0 justify-center items-center ${imageOverlay}`}
      >
        <h1 className="text-slate-950 textGlowSm">THIS IS THE TEXT</h1>
      </FlexFull>
      <Wrap className="w-full h-full flex flex-wrap absolute inset-0">
        {divisions.widths.map((width, index) => (
          <motion.div
            key={index}
            layout
            className={`${width} ${divisions.heights[index]} ${coverBg} z-15 rounded-none ${sectionClassName}`}
            initial="initial"
            animate={divisions.transitions[index]}
            variants={animationVariants}
            transition={{
              delay: divisions.delays[index] + delay,
              duration: duration,
              ease: "easeInOut",
            }}
          >
            <Text className="text-transparent">.</Text>
          </motion.div>
        ))}
      </Wrap>
    </FlexFull>
  );
}
