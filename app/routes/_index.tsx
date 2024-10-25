import type { MetaFunction } from "@remix-run/node";
import MainPanel from "./components/mainPanel";
import MainIndexContainer from "./components/mainIndexContainer";
import StaggeredTextLines from "./components/staggeredTextLines";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";
import { CenterFull } from "~/buildingBlockComponents/mainContainers";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <MainIndexContainer>
      <MainPanel bg="bg-col-100" textColor="text-col-900">
        Panel One
        <StaggeredTextLines
          textLines={["Line One", "Line Two", "Line Three"]}
        />
      </MainPanel>
      <MainPanel bg="bg-col-300" textColor="text-col-900">
        Panel Two
      </MainPanel>
      <MainPanel bg="bg-col-400" textColor="text-col-900">
        <CenterFull className="h-100svh">
          <ScrollTransition type="zoom">
            <h2>Panel Three</h2>
          </ScrollTransition>
        </CenterFull>
      </MainPanel>
      <MainPanel bg="bg-col-500" textColor="text-col-900">
        Panel Four
      </MainPanel>
      <MainPanel bg="bg-col-600">Panel Five</MainPanel>
      <MainPanel bg="bg-col-700">Panel Six</MainPanel>
      <MainPanel bg="bg-col-800">Panel Seven</MainPanel>
    </MainIndexContainer>
  );
}
