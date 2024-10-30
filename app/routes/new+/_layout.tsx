import { Outlet } from "@remix-run/react";
import { FlexFull } from "~/buildingBlockComponents/mainContainers";

export default function NewLayout() {
  return (
    <FlexFull className="bg-neutral-300 ">
      <Outlet />
    </FlexFull>
  );
}
