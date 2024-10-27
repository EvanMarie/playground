import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import MainPanel from "../components/building/mainPanel";
import MediumScreensUpPodcastTitle from "../components/building/mediumScreensUpPodcastTitle";
import ScrollingMarquee from "../components/building/scrollingMarquee";
import Text from "~/buildingBlockComponents/text";
import TestimonialCarousel from "../components/building/testimonialCarousel";
import { testimonials } from "../components/design-demos/demo-data";
import StaggeredGradientTextLines from "../components/building/staggeredGradientTextLines";

export default function Test() {
  return (
    <FlexFull
      className={`h-100svh flex-col relative overflow-y-auto items-center`}
    >
      <MainPanel bg={`bg-col-740`} textColor="text-col-100" height="h-100svh">
        <StaggeredGradientTextLines
          textLines={["What", "the fans", "are saying:"]}
          textClassName="font-cursive font-bold text-cyan-300 textShadow text-10vh"
        />

        <TestimonialCarousel testimonials={testimonials} />
      </MainPanel>
    </FlexFull>
  );
}
