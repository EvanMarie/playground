import { FlexFull, VStackFull } from "~/buildingBlockComponents/mainContainers";
import MainPanel from "../components/building/mainPanel";
import Input from "~/buildingBlockComponents/input";

export default function Test() {
  return (
    <FlexFull
      className={`h-100svh flex-col relative overflow-y-auto items-center`}
    >
      <MainPanel bg={`bg-col-740`} textColor="text-col-100" height="h-100svh">
        <VStackFull className="p-4vh" gap="gap-3vh">
          <Input type="text" placeholder="Enter your name" />
          <Input type="text" placeholder="Enter your email" />
        </VStackFull>
      </MainPanel>
    </FlexFull>
  );
}
