import { Center, FlexFull } from "~/buildingBlockComponents/mainContainers";
import PasswordInput from "~/buildingBlockComponents/passwordInput";
import Text from "~/buildingBlockComponents/text";
import PodCastTitle from "../components/design-demos/podcastTitle";

export default function Test() {
  return (
    <FlexFull className="h-100svh justify-center items-center">
      <PodCastTitle />
    </FlexFull>
  );
}
