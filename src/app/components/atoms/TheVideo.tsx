import React from "react";
import en from "@/dictionaries/en.json";

type TheVideoProps = {
  src: string;
  thumbnail: string;
};
export default function TheVideo({ src, thumbnail }: TheVideoProps) {
  return (
    <video width="356" height="762" controls preload="none" poster={thumbnail}>
      <source src={src} />
      {en.video_unssupported}
    </video>
  );
}
