import { Outlet } from "@remix-run/react";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function PippinLayout() {
  return (
    <FlexFull className="bg-col-800 ">
      <Outlet />
    </FlexFull>
  );
}
