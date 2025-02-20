import {
  FlexFull,
  VStackFull,
  WrapFull,
} from "~/buildingBlockComponents/mainContainers";
import Text from "~/buildingBlockComponents/text";

export default function CourseCatalogWrap({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id: string;
  title: string;
}) {
  return (
    <section className="flex w-full scroll-mt-[3svh]" id={id}>
      <VStackFull className="h-full border-900-md">
        <Text className="text-col-700 text-xs px-1vh">{title}</Text>
        <WrapFull
          className={`p-1vh h-fit py-6vh justify-evenly gap-1vh md:gap-x-1.5vh xl:gap-x-2vh gap-y-2vh`}
        >
          {children}
        </WrapFull>
      </VStackFull>
    </section>
  );
}
