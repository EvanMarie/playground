import React from "react";

type TextWithImageBackgroundProps = {
  text: string;
  imageUrl: string;
  textSize?: string;
};

const TextWithImageBackground: React.FC<TextWithImageBackgroundProps> = ({
  text,
  imageUrl,
  textSize = "text-6vh",
}) => {
  return (
    <div className="relative">
      <span
        className="text-8xl font-bold text-transparent bg-clip-text"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default TextWithImageBackground;
