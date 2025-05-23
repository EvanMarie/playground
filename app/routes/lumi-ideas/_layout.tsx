import { Outlet } from "@remix-run/react";
import CloseTabButton from "../building/closeTabButton";
import { Box } from "~/buildingBlockComponents/mainContainers";

export default function NewLayout() {
  return (
    <>
      <Outlet />{" "}
      <Box className="absolute top-0.5vh right-0.5vh z-10">
        <CloseTabButton iconOnly />
      </Box>
    </>
  );
}
