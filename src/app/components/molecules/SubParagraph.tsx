"use client";

import IconContainer, {
  Icon,
  IconSize,
} from "@/app/components/atoms/IconContainer";
import { fadeIntoView } from "@/utils/FadeIntoView";
import { useRef, useState, useEffect } from "react";

type SubParagraphProps = {
  title: string;
  icon: string;
  children: React.ReactNode;
  isSkewed?: boolean;
};
export default function SubParagraph({
  title,
  children,
  icon,
  isSkewed = false,
}: SubParagraphProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    fadeIntoView(ref, setIsVisible);
  }, []);

  return (
    <div
      ref={ref}
      className={isVisible ? "animate-fade-in-from-left" : "opacity-0"}
    >
      <div
        className={`flex items-center ${
          isSkewed && "translate-x-[-1.7rem] bg-accent-light"
        } md:translate-x-0 gap-2 py-2`}
      >
        <IconContainer
          size={IconSize.medium}
          icon={icon as Icon}
          className="text-accent-default"
        ></IconContainer>
        <h4 className="text-accent-dark italic">{title}</h4>
      </div>

      {children}
    </div>
  );
}
