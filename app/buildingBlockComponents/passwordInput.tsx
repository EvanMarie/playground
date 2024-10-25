import { useState, useRef, useEffect } from "react";
import Input from "./input";
import IconButton from "./iconButton";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import DefaultLabel from "./defaultLabel";
import { Box, HStack, VStack } from "./mainContainers";

interface PasswordInputProps {
  name?: string;
  id?: string;
  confirm?: boolean;
  oldPassword?: boolean;
  newPassword?: boolean;
  confirmNewPassword?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textSize?: string;
  textColor?: string;
  textClassName?: string;
}

export default function PasswordInput({
  name = "password",
  id = "password",
  confirm = false,
  oldPassword = false,
  newPassword = false,
  confirmNewPassword = false,
  onChange,
  textSize,
  textColor,
  textClassName,
}: PasswordInputProps) {
  const [show, setShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => setShow(!show);

  const getLabelText = () => {
    if (confirm) return "confirm password";
    if (oldPassword) return "old password";
    if (newPassword) return "new password";
    if (confirmNewPassword) return "confirm new password";
    return "password";
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("focus", () => {
        inputRef.current?.select();
      });
    }
  }, []);

  return (
    <VStack gap="gap-0.3vh" align="start" className={`w-full`} tabIndex={-1}>
      <DefaultLabel
        label={confirm ? "confirm password" : "password"}
        textClassName={`${textSize} ${textColor} ${textClassName}`}
      />

      <HStack className="w-full relative" gap="gap-0" tabIndex={-1}>
        <Box className="relative w-full" tabIndex={-1}>
          <Input
            ref={inputRef}
            type={show ? "text" : "password"}
            placeholder="password"
            id={confirm ? "confirmPassword" : id}
            name={confirm ? "confirmPassword" : name}
            required
            onChange={onChange}
          />
        </Box>
        <Box className="absolute right-[1vh] top-[0.2vh]" tabIndex={-1}>
          <IconButton
            type="unstyled"
            iconClassName="text-[2.5vh] text-col-900"
            label="show/hide"
            icon={show ? FaEyeSlash : FaEye}
            onClick={handleClick}
            tabIndex={-1}
          />
        </Box>
      </HStack>
    </VStack>
  );
}
