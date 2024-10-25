import Divider from "./divider";
import { HStackFull } from "./mainContainers";
import Text from "./text";

export default function DividerText({
  text = "Divider Text",
  px = "px-2vh",
  gap = "gap-2vh",
  color = "bg-col-300",
  thickness = "h-[0.15vh]",
  textColor = "text-col-300",
  textSize = "text-2.3vh",
  textShadow = "textShadow",
  dividerShadow = "shadowNarrowTight",
  textClassName = "",
  dividerClassName = "",
}: {
  text: string;
  px?: string;
  gap?: string;
  color?: string;
  thickness?: string;
  textColor?: string;
  textSize?: string;
  textShadow?: string;
  dividerShadow?: string;
  textClassName?: string;
  dividerClassName?: string;
}) {
  return (
    <HStackFull className={`items-center ${px}`} gap={gap}>
      <Divider
        h={thickness}
        bg={color}
        className={`${dividerShadow} ${dividerClassName}`}
      />
      <Text
        className={`${textColor} ${textSize} ${textShadow} ${textClassName} text-nowrap`}
      >
        {text}
      </Text>
      <Divider
        h={thickness}
        bg={color}
        className={`${dividerShadow} ${dividerClassName}`}
      />
    </HStackFull>
  );
}
