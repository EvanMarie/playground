import React, { useState, useEffect, useRef, ReactNode } from "react";

export default function BottomScrollTrigger({
  children,
}: {
  children: ReactNode;
}) {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsAtBottom(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 1.0, // Trigger only when the element is fully in view
      }
    );

    if (bottomRef.current) {
      observer.observe(bottomRef.current);
    }

    return () => {
      if (bottomRef.current) {
        observer.unobserve(bottomRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {isAtBottom && children}
      {/* Invisible sentinel element to trigger the observer */}
      <div ref={bottomRef} style={{ height: "1px", marginTop: "-1px" }} />
    </div>
  );
}
