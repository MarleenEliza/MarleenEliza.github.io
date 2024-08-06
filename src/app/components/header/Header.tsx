import React from "react";
import en from "@/dictionaries/en.json";

export default function Header() {
  return (
    <header className="opacity-90 mix-blend-luminosity bg-secondary-default z-10 fixed top-0 w-full h-[6rem] flex flex-col justify-center text-white pl-10 md:pl-[3rem]">
      <h1 className="text-2xl md:text-3xl text-left">{en.title}</h1>
      <h2 className="text-sm md:text-md italic font-thin ">{en.header_sub}</h2>
      <span className="absolute top-[99%] w-0 h-0 left-0 border-l-[4.5rem] border-r-[4.5rem] md:border-l-[8rem] md:border-r-[8rem] border-t-[2.3rem] border-t-secondary-default border-l-transparent border-r-transparent"></span>
    </header>
  );
}
