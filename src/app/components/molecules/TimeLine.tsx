import React from "react";

export default function TimeLine() {
  return (
    <div className="w-[1px]  min-w-[1px] h-full bg-secondary-default ml-2 mr-4 relative">
      <span className="absolute inline-block bg-accent-default rounded-full h-[12px] w-[12px] translate-y-[-50%] translate-x-[-50%] left-0"></span>
      <span className="absolute inline-block bg-accent-default rounded-full h-[12px] w-[12px] translate-x-[-50%] left-0 bottom-0"></span>
    </div>
  );
}
