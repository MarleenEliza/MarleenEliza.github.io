import React from "react";

type TheHeadingProps = {
  children: React.ReactNode;
};
export default function TheHeading({ children }: TheHeadingProps) {
  return (
    <div className="w-full flex flex-col mt-3 mb-2 md:mt-10 md:mb-6 font-bold text-lg">
      <h2 className="text-xl ml-2">{children}</h2>
      <span className="bg-accent-default w-full h-[1px]"></span>
    </div>
  );
}
