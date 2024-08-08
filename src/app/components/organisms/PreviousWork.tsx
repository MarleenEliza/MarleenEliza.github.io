"use client";

import TimeLine from "@/app/components/molecules/TimeLine";
import TheVideo from "@/app/components/atoms/TheVideo";
import TextLink from "@/app/components/atoms/LinkButton";
import DiscList from "@/app/components/molecules/DiscList";
import en from "@/dictionaries/en.json";
import SubParagraph from "@/app/components/molecules/SubParagraph";
import { useEffect, useRef, useState } from "react";
import { fadeIntoView } from "@/utils/FadeIntoView";

type PreviousWorkProps = {
  title: string;
  overview: string;
  url: string;
  key_responsibilities: string[];
  key_challenges: string[];
  tech_stack: string[];
  example_video_url: string;
  example_video_image: string;
};

export default function PreviousWork({
  title,
  url,
  tech_stack,
  key_responsibilities,
  key_challenges,
  overview,
  example_video_url,
  example_video_image,
}: PreviousWorkProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    fadeIntoView(ref, setIsVisible);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col mb-8 md:mb-14 ml-2 ${
        isVisible ? "animate-fade-in-from-left" : "opacity-0"
      }`}
    >
      <h3 className="font-bold mb-4 md:text-xl text-[1rem]">{title}</h3>
      <div className="flex h-full mt-2">
        <TimeLine></TimeLine>
        <div className="grid gap-6 w-full md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto_auto_1fr] md:auto-rows-min">
          <div className="flex flex-col md:row-span-4 md:mr-10">
            <TextLink icon="thunder" href={url}>
              {en.previous_works.try_out}
            </TextLink>
            <TheVideo
              src={example_video_url}
              thumbnail={example_video_image}
            ></TheVideo>
          </div>
          <SubParagraph
            isSkewed
            title={en.previous_works.overview_title}
            icon="file"
          >
            <p>{overview}</p>
          </SubParagraph>
          <SubParagraph
            isSkewed
            title={en.previous_works.tech_stack_title}
            icon="test"
          >
            <DiscList list={tech_stack} isParted></DiscList>
          </SubParagraph>
          <SubParagraph
            isSkewed
            title={en.previous_works.key_responsibilities_title}
            icon="key"
          >
            <DiscList list={key_responsibilities}></DiscList>
          </SubParagraph>
          <SubParagraph
            isSkewed
            title={en.previous_works.key_challenges_title}
            icon="question"
          >
            <DiscList list={key_challenges}></DiscList>
          </SubParagraph>
        </div>
      </div>
    </div>
  );
}
