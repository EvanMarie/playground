import React, { useState, useEffect, ReactNode } from "react";

export default function BottomScrollTrigger({
  children,
}: {
  children: ReactNode;
}) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set a threshold to account for any potential small difference
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;
      setIsAtBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="w-full">{isAtBottom && children}</div>;
}
