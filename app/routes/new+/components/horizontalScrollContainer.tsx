import { Box, FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function HorizontalScrollContainer({
  children,
  width = "w-100vw",
  height = "h-full",
  padding,
  gap,
}: {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  gap?: string;
}) {
  return (
    <Box className={`${width} overflow-hidden ${height}`}>
      <Box
        className={`${width} overflow-x-auto overflow-y-hidden h-full hide-scrollbar`}
      >
        <FlexFull
          className={`w-fit h-full items-center ${gap} ${padding} flex-shrink-0`}
        >
          {children}
        </FlexFull>
      </Box>
    </Box>
  );
}
