import React from "react";

type SubParagraphProps = {
  title: string;
  children: React.ReactNode;
};
export default function SubParagraph({ title, children }: SubParagraphProps) {
  return (
    <div className="relative">
      <span className="absolute rounded-full h-[9px] w-[9px] left-[-1rem] translate-x-[-50%] top-[5px] bg-accent-default"></span>
      <h4 className="text-accent-dark italic mb-2">{title}</h4>
      {children}
    </div>
  );
}
