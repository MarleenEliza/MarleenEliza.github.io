import React from "react";

type DiscList = {
  list: string[];
  isParted?: boolean;
};
export default function DiscList({ list, isParted = false }: DiscList) {
  return (
    <ul
      className={`list-disc px-3 ${
        isParted ? "grid grid-cols-2 md:grid-cols-3 md:w-fit md:gap-x-6" : ""
      }`}
    >
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
