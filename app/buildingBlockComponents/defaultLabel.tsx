import Text from "./text";

export default function DefaultLabel({
  label,
  textSize = "text-lg",
  textColor = "text-col-300 text-stroke-5-300 tracking-wide textShadow",
  textClassName,
}: {
  label: string;
  textSize?: string;
  textColor?: string;
  textClassName?: string;
}) {
  return (
    <Text className={`${textSize} ${textColor} ${textClassName}`}>{label}</Text>
  );
}
