import { delay } from "framer-motion";
import Image from "~/buildingBlockComponents/image";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function EmergingImage({
  bgImage,
  numDivisions = 6,
}: {
  bgImage: string;
  numDivisions: 1 | 2 | 2.2 | 3 | 3.2 | 4 | 6 | 8 | 9 | 12;
}) {
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
      widths: ["w-50vw", "w-50vw"],
      heights: ["h-100svh", "h-100svh"],
    },
    {
      numDivisions: 2.2,
      transitions: ["slideOutDown", "slideOutUp"],
      delays: [0.5, 0.7, 0.3],
      widths: ["w-100vw", "w-100vw"],
      heights: ["h-50svh", "h-50svh"],
    },
    {
      numDivisions: 3,
      delays: [0.2, 0.4, 0.6],
      transitions: ["rotate3D", "rotate3D", "rotate3D"],
      widths: ["w-50vw", "w-50vw", "w-100vw"],
      heights: ["h-50svh", "h-50svh", "h-50svh"],
    },
    {
      numDivisions: 3.2,
      delays: [0.2, 0.4, 0.6],
      transitions: ["rotate3D", "rotate3D", "rotate3D"],
      widths: ["w-100vw", "w-50vw", "<w-15></w-15>0vw"],
      heights: ["h-50svh", "h-50svh", "h-50svh"],
    },
    {
      numDivisions: 4,
      delays: [0.2, 0.4, 0.6, 0.8],
      transitions: ["rotate3D", "fade", "rotate3D", "fade"],
      widths: ["w-50vw", "w-50vw", "w-50vw", "w-50vw"],
      heights: ["h-50svh", "h-50svh", "h-50svh", "h-50svh"],
    },
    {
      numDivisions: 6,
      delays: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      transitions: ["rotate3D", "fade", "rotate3D", "fade", "rotate3D", "fade"],
      widths: [
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
      ],
      heights: [
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
      ],
    },
    {
      numDivisions: 8,
      delays: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
      transitions: [
        "rotate3D",
        "fade",
        "rotate3D",
        "fade",
        "rotate3D",
        "fade",
        "rotate3D",
        "fade",
      ],
      widths: [
        "w-25vw",
        "w-25vw",
        "w-25vw",
        "w-25vw",
        "w-25vw",
        "w-25vw",
        "w-25vw",
        "w-25vw",
      ],
      heights: [
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
      ],
    },
    {
      numDivisions: 9,
      delays: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      transitions: [
        "rotate3D",
        "fade",
        "rotate3D",
        "fade",
        "rotate3D",
        "fade",
        "rotate3D",
        "fade",
        "rotate3D",
      ],
      widths: [
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
        "w-33.3vw",
      ],
      heights: [
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
        "h-50svh",
      ],
    },
  ];
  return (
    <FlexFull className="h-100svh w-100vw relative">
      <Image
        src={bgImage}
        className="absolute z-5 inset-0"
        alt="beautiful image"
      />
    </FlexFull>
  );
}
