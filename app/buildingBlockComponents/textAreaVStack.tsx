import React from "react";
import TextArea from "./textArea";
import DefaultLabel from "./defaultLabel";
import { VStack } from "./mainContainers";

// Update the onChange type to be more generic
interface TextAreaVStackProps {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  type?: string;
  textAreaWidth?: string;
  textAreaHeight?: string;
  textAreaClassName?: string;
  isEditable?: boolean;
  autoFocus?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export default function TextAreaVStack({
  label,
  className,
  style,
  name,
  placeholder,
  value,
  defaultValue,
  textAreaWidth,
  textAreaHeight,
  textAreaClassName,
  autoFocus,

  onChange,
}: TextAreaVStackProps) {
  return (
    <VStack
      className={`w-full ${className}`}
      align="start"
      style={style}
      gap="gap-[0.5vh]"
    >
      {label && <DefaultLabel label={label} />}

      <TextArea
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        textAreaHeight={textAreaHeight}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={`${textAreaWidth} ${textAreaHeight} ${textAreaClassName}`}
      />
    </VStack>
  );
}
