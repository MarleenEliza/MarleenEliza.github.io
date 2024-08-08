import { fadeIntoView } from "@/utils/FadeIntoView";
import { useRef, useState, useEffect } from "react";

type TheHeadingProps = {
  children: React.ReactNode;
};
export default function TheHeading({ children }: TheHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    fadeIntoView(ref, setIsVisible);
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full flex flex-col mt-3 mb-6 md:mt-10 md:mb-6 font-bold text-lg ${
        isVisible
          ? "animate-fade-in-from-left-slower md:animate-fade-in-from-above"
          : "opacity-0"
      }`}
    >
      <h2 className="text-2xl ml-2">{children}</h2>
      <span className="bg-accent-default w-full h-[1px]"></span>
    </div>
  );
}
