import { Outlet } from "@remix-run/react";
import { Box, FlexFull } from "~/buildingBlockComponents/mainContainers";
import CloseTabButton from "../building/closeTabButton";

export default function PippinLayout() {
  return (
    <FlexFull className="bg-col-800 ">
      <Box className="absolute top-0.5vh right-0.5vh z-10">
        <CloseTabButton iconOnly />
      </Box>
      <Outlet />
    </FlexFull>
  );
}
