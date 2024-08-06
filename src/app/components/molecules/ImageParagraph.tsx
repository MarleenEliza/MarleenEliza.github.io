import React from "react";
import Image from "next/image";

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
  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-8">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="rounded-full self-center"
      ></Image>
      <div className="col-span-2 md:col-span-7 md:m-auto">
        <h4 className="text-accent-dark italic pb-2">
          &quot;{eyeCatcher}&quot;
        </h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
