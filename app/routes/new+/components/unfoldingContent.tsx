import { Flex, FlexFull, Wrap } from "~/buildingBlockComponents/mainContainers";

export default function UnfoldingContent({
  contents,
  height = "h-100svh",
  width = "w-100vw",
}: {
  contents: React.ReactNode[];
  height?: string;
  width?: string;
}) {
  const lenContents = contents.length;
  const contentWidth = `w-${100 / lenContents}vw`;
  const contentHeight = `h-${100 / lenContents}svh`;

  return (
    <Flex className={`${height} ${width} bg-gray-800/40`}>
      <Wrap className="w-full h-full">
        {contents.map((content, index) => (
          <FlexFull
            key={index}
            className={`flex-shrink-0 ${contentWidth} ${contentHeight} bg-gray-800/40`}
          >
            {content}
          </FlexFull>
        ))}
      </Wrap>
    </Flex>
  );
}
