import React from "react";

type TextWithImageBackgroundProps = {
  text: string;
  imageUrl: string;
  textSize?: string;
  fontStyle?: string;
};

const TextWithImageBackground: React.FC<TextWithImageBackgroundProps> = ({
  text,
  imageUrl,
  textSize = "text-6vh",
  fontStyle = "font-semibold",
}) => {
  return (
    <span
      className={`${textSize} ${fontStyle} text-transparent bg-clip-text`}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        WebkitBackgroundClip: "text",
      }}
    >
      {text}
    </span>
  );
};

export default TextWithImageBackground;
