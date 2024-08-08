"use client";

import { fadeIntoView } from "@/utils/FadeIntoView";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type ImageParagraphProps = {
  src: string;
  eyeCatcher: string;
  children: React.ReactNode;
  alt: string;
};
export default function ImageParagraph({
  src,
  eyeCatcher,
  children,
  alt,
}: ImageParagraphProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    fadeIntoView(ref, setIsVisible);
  }, []);

  return (
    <div
      ref={ref}
      className={`grid gap-4 md:grid-cols-3 md:gap-10 ${
        isVisible ? "animate-fade-in-from-left" : "opacity-0"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="rounded-full self-center justify-self-center max-w-[70%] justify-center"
      ></Image>
      <div className="md:col-span-2 md:m-auto">
        <h4 className="text-accent-dark italic pb-2">
          &quot;{eyeCatcher}&quot;
        </h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
