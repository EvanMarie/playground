import { IoMdCloseCircle } from "react-icons/io";
import { ModuleTextButton } from "./moduleButtons";
import ModuleIconButton from "./moduleButtons";

export const handleCloseTab = () => {
  window.close();
};

export default function CloseTabButton({
  label = "close",
  icon = IoMdCloseCircle,
  size = "normal",
  iconOnly = false,
}: {
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
  size?: "normal" | "small";
  iconOnly?: boolean;
}) {
  return (
    <>
      {iconOnly ? (
        <ModuleIconButton
          icon={icon}
          padding="p-0.2vh"
          onClick={() => {
            handleCloseTab();
          }}
        />
      ) : (
        <ModuleTextButton
          label={label}
          icon={icon}
          padding={size === "small" ? "pb-0.3vh px-0.5vh" : undefined}
          iconSize={size === "small" ? "text-md pt-0.2vh" : undefined}
          textSize={size === "small" ? "text-sm " : undefined}
          gap={size === "small" ? "gap-0.2vh" : undefined}
          onClick={() => {
            handleCloseTab();
          }}
        />
      )}
    </>
  );
}
