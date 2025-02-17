import { NavLink } from "@remix-run/react";
import { useRef } from "react";
import Image from "~/buildingBlockComponents/image";
import {
  Flex,
  FlexFull,
  VStackFull,
  Wrap,
} from "~/buildingBlockComponents/mainContainers";
import ScrollProgressBar from "~/buildingBlockComponents/scrollProgressBar";
import { ScrollTransition } from "~/buildingBlockComponents/scrollTransition";

function DemoCard({ link, image }: { link: string; image: string }) {
  const imageStyles =
    "w-90vw h-90vw sm:w-80vw sm:h-80vw md:w-45vw md:h-45vw lg:w-38vw lg:h-38vw xl:w-30vw xl:h-30vw";
  return (
    <ScrollTransition animation="rotate3D">
      <NavLink to={link} className="border-900-md shadowNarromTight">
        <Image src={image} className={imageStyles} alt={link} />
      </NavLink>
    </ScrollTransition>
  );
}

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <ScrollProgressBar containerRef={scrollContainerRef} centered />

      <FlexFull
        ref={scrollContainerRef} // Update here if it's not used this way
        className="bg-col-700 fixed inset-0 h-100svh overflow-y-auto overflow-x-hidden hide-scrollbar z-0 rounded-none"
      >
        <Wrap className="h-fit p-1vh justify-evenly gap-1vh">
          <DemoCard
            link="/pippin"
            image="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/landing/pippin-pawsby.webp"
          />
          <DemoCard
            link="/lumi-ideas"
            image="https://mhejreuxaxxodkdlfcoq.supabase.co/storage/v1/render/image/public/darkVioletPublic/githubprofileevan/learn-with-lumi-meta-square.png"
          />
          <DemoCard
            link="/pdf-work"
            image="http://images.unsplash.com/photo-1519681393784-d120267933ba"
          />
        </Wrap>
      </FlexFull>
    </>
  );
}
