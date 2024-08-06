import React from "react";
import IconContainer, {
  ICON_LIST,
  IconSize,
} from "@/app/components/atoms/IconContainer";

type SubParagraphProps = {
  title: string;
  icon: (typeof ICON_LIST)[number];
  children: React.ReactNode;
};
export default function SubParagraph({
  title,
  children,
  icon,
}: SubParagraphProps) {
  return (
    <div>
      <div className="flex items-center bg-accent-light translate-x-[-1.7rem] gap-2 py-2">
        <IconContainer
          size={IconSize.medium}
          icon={icon}
          className="text-accent-default"
        ></IconContainer>
        {/* <span className="absolute rounded-full h-[9px] w-[9px] md:h-[12px] md:w-[12px] left-[-1rem] translate-x-[-50%] top-[6px] bg-accent-default "></span> */}
        <h4 className="text-accent-dark italic">{title}</h4>
      </div>

      {children}
    </div>
  );
}
