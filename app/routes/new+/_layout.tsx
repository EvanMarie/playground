import { Outlet } from "@remix-run/react";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function NewLayout() {
  return (
    <FlexFull className="bg-col-200 ">
      <Outlet />
    </FlexFull>
  );
}
