import MainIndexContainer from "../building/mainIndexContainer";
import SnapScrollSlideInContainer from "./components/snapScrollSlideInContainer";

export default function New() {
  return (
    <MainIndexContainer className="snap-y snap-mandatory">
      <SnapScrollSlideInContainer>
        <h2 className="text-sky-800">One</h2>
      </SnapScrollSlideInContainer>

      <SnapScrollSlideInContainer slideDirection="left">
        <h2 className="text-sky-800">Two</h2>
      </SnapScrollSlideInContainer>

      <SnapScrollSlideInContainer>
        <h2 className="text-sky-800">Three</h2>
      </SnapScrollSlideInContainer>

      <SnapScrollSlideInContainer slideDirection="left">
        <h2 className="text-sky-800">Four</h2>
      </SnapScrollSlideInContainer>
      <SnapScrollSlideInContainer>
        <h2 className="text-sky-800">Five</h2>
      </SnapScrollSlideInContainer>
      <SnapScrollSlideInContainer slideDirection="left">
        <h2 className="text-sky-800">Six</h2>
      </SnapScrollSlideInContainer>
    </MainIndexContainer>
  );
}
