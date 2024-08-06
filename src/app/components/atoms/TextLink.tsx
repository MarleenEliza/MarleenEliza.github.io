import React from "react";

type TextLinktProps = {
  href: string;
  children: React.ReactNode;
};

export default function TextLink({ href, children }: TextLinktProps) {
  return (
    <a href={href} className="underline text-accent-dark font-bold">
      {children}
    </a>
  );
}
