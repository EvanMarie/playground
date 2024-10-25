import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";

export default function MainPanel({
  children,
  height = "h-100svh",
  bg,
  textColor,
}: {
  children: React.ReactNode;
  height?: string;
  bg?: string;
  textColor?: string;
}) {
  return (
    <FlexFull
      className={`${height} ${bg} ${textColor} justify-center rounded-none`}
    >
      <VStackFull>{children}</VStackFull>
    </FlexFull>
  );
}
