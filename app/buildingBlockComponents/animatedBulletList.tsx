import { FlexFull, HStackFull } from "./mainContainers";

export default function DividerHeading({
  heading,
  width,
  noDividers,
  dividerBg = "bg-col-500",
  dividerHeight = "h-0.1vh",
  padding = "py-1vh px-2vh",
  textSize = "text-xl",
  textColor = "text-col-500",
  textShadow = "textShadow",
  dividerShadow = "shadowNarrowNormal",
  gap = "gap-1.5vh",
  fontFamily,
  bothSides = true,
  rightSide,
  leftSide,
  className = "",
  justify,
}: {
  heading: string;
  width?: string;
  noDividers?: boolean;
  justify?: string;
  dividerBg?: string;
  dividerHeight?: string;
  fontFamily?: string;
  padding?: string;
  textSize?: string;
  textColor?: string;
  textShadow?: string;
  dividerShadow?: string;
  gap?: string;
  bothSides?: boolean;
  rightSide?: boolean;
  leftSide?: boolean;
  className?: string;
}) {
  function Divider({
    height = dividerHeight,
    bg = dividerBg,
    shadow = dividerShadow,
  }: {
    height?: string;
    bg?: string;
    shadow?: string;
  }) {
    return (
      <FlexFull className={`text-transparent ${height} ${bg} ${shadow}`}>
        .
      </FlexFull>
    );
  }

  return (
    <HStackFull
      className={`${width} ${className} ${padding} ${gap} ${justify} items-center`}
    >
      {bothSides && !rightSide && !leftSide && !noDividers && <Divider />}
      {leftSide ? <Divider /> : null}
      <span
        className={`${textSize} ${textColor} ${textShadow} ${fontFamily} flex flex-shrink-0 text-nowrap`}
      >
        {heading}
      </span>
      {rightSide && !noDividers && <Divider />}
      {bothSides && !leftSide && !rightSide && !noDividers && <Divider />}
    </HStackFull>
  );
}
