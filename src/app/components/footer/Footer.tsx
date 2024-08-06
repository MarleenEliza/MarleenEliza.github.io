import React from "react";
import en from "@/dictionaries/en.json";
import IconLink from "@/app/components/atoms/IconLink";

export default function Footer() {
  return (
    <footer className="bg-secondary-default fixed z-10 bottom-0 w-full flex h-[6rem] pt-4 md:pt-6 pl-4 md:pl-6 gap-4">
      <IconLink icon="Github" href={en.footer_github_url}>
        {en.footer_github}
      </IconLink>
      <IconLink icon="linkedIn" href={en.footer_linkedIn_url}>
        {en.footer_linkedIn}
      </IconLink>
      <span className="absolute bottom-[3.9rem] w-0 h-0 right-0 border-l-[4.5rem] border-r-[4.5rem] border-t-[2.3rem] border-t-transparent border-l-transparent border-r-transparent"></span>
    </footer>
  );
}
