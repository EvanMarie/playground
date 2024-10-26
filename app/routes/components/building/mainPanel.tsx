import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";

export default function MainPanel({
  children,
  height = "h-fit",
  bg,
  textColor,
  className,
}: {
  children: React.ReactNode;
  height?: string;
  bg?: string;
  textColor?: string;
  className?: string;
}) {
  return (
    <FlexFull>
      <FlexFull
        className={`${height} ${bg} ${textColor} ${className} justify-center rounded-none`}
      >
        <VStackFull>{children}</VStackFull>
      </FlexFull>
    </FlexFull>
  );
}
