import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";

export default function MainPanel({
  children,
  height = "h-fit",
  bg,
  bgImage,
  textColor,
  className,
}: {
  children: React.ReactNode;
  height?: string;
  bg?: string;
  bgImage?: string;
  textColor?: string;
  className?: string;
}) {
  return (
    <FlexFull
      className={`${height} ${bgImage} z-0 justify-center rounded-none`}
    >
      <FlexFull
        className={`${height} ${bg} ${textColor} ${className} justify-center rounded-none`}
      >
        <VStackFull>{children}</VStackFull>
      </FlexFull>
    </FlexFull>
  );
}
