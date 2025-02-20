import { Outlet } from "@remix-run/react";
import CloseTabButton from "../building/closeTabButton";
import { Box } from "~/buildingBlockComponents/mainContainers";

export default function LumiCoursesStudentsLayout() {
  return (
    <>
      {" "}
      <Box className="absolute top-0 right-0 z-10 p-0.5vh rounded-[8vh]">
        <CloseTabButton iconOnly />
      </Box>
      <Outlet />
    </>
  );
}
