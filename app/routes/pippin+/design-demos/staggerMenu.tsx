import { Transition } from "~/buildingBlockComponents/mainContainers";
import StaggeredLinks from "~/routes/building/staggeredLinks";

export default function StaggerMenu() {
  return (
    <Transition className="hidden md:flex absolute top-23vh lg:top-30vh right-1.5vh overflow-visible">
      <StaggeredLinks
        textClassName="text-2.5vh lg:text-3vh xl:text-3.5vh xxl:text-4vh textShadow"
        iconClassName="text-2.5vh lg:text-3vh xl:text-3.5vh xxl:text-4vh group-hover:text-cyan-300"
        links={[
          { text: "Home", link: "/" },
          { text: "About", link: "/about" },
          { text: "Contact", link: "/contact" },
          { text: "Blog", link: "/blog" },
          { text: "Portfolio", link: "/portfolio" },
          { text: "Services", link: "/services" },
          { text: "Shop", link: "/shop" },
        ]}
      />
    </Transition>
  );
}
