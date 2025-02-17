import { FlexFull } from "~/buildingBlockComponents/mainContainers";
import { FullScreenDots, PolkaDots, SparseDots } from "./polkaDots";
import { FixedCircle } from "./polkaDots";

export function DotsFullBg() {
  return (
    <>
      {FullScreenDots.map((polkaDot, index) => (
        <FixedCircle {...polkaDot} key={index} />
      ))}
    </>
  );
}

export function PolkaDotSidesBg({
  visibleAt = "xl",
}: {
  visibleAt?: "base" | "sm" | "md" | "lg" | "xl" | "xxl";
}) {
  const visibleAtClass = {
    base: "",
    sm: "hidden sm:flex",
    md: "hidden md:flex",
    lg: "hidden lg:flex",
    xl: "hidden xl:flex",
    xxl: "hidden xxl:flex",
  };

  return (
    <FlexFull className={`fixed inset-0 z-10 ${visibleAtClass[visibleAt]}`}>
      {PolkaDots.map((polkaDot, index) => (
        <FixedCircle {...polkaDot} key={index} />
      ))}
    </FlexFull>
  );
}

export function PolkaDotsSparse() {
  return (
    <FlexFull className="fixed inset-0 z-10 hidden xl:flex">
      {SparseDots.map((polkaDot, index) => (
        <FixedCircle {...polkaDot} key={index} />
      ))}
    </FlexFull>
  );
}
