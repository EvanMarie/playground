import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainPanel from "../components/building/mainPanel";
import Input from "~/buildingBlockComponents/input";

export default function Test() {
  return (
    <FlexFull
      className={`h-100svh flex-col relative overflow-y-auto items-center`}
    >
      <MainPanel bg={`bg-col-740`} textColor="text-col-100" height="h-100svh">
        <FlexFull className="p-4vh">
          <Input type="text" placeholder="Enter your name" />
        </FlexFull>
      </MainPanel>
    </FlexFull>
  );
}
