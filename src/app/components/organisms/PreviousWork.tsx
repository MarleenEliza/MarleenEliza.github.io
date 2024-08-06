import TimeLine from "@/app/components/molecules/TimeLine";
import TheVideo from "@/app/components/atoms/TheVideo";
import TextLink from "@/app/components/atoms/TextLink";
import DiscList from "@/app/components/molecules/DiscList";
import en from "@/dictionaries/en.json";
import SubParagraph from "../molecules/SubParagraph";
import Image from "next/image";

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
  return (
    <div className="flex flex-col mb-8 ml-2">
      <h3 className="font-bold">{title}</h3>
      <div className="flex h-full mt-2">
        <TimeLine></TimeLine>
        <div className="flex flex-col gap-6 w-full">
          <TextLink href={url}>{en.previous_works_try_out} </TextLink>
          <TheVideo
            src={example_video_url}
            thumbnail={example_video_image}
          ></TheVideo>
          <SubParagraph title={en.previous_works_overview_title}>
            <p>{overview}</p>
          </SubParagraph>
          <SubParagraph title={en.previous_works_tech_stack_title}>
            <DiscList list={tech_stack} isParted></DiscList>
          </SubParagraph>
          <SubParagraph title={en.previous_works_key_responsibilities_title}>
            <DiscList list={key_responsibilities}></DiscList>
          </SubParagraph>
          <SubParagraph title={en.previous_works_key_challenges_title}>
            <DiscList list={key_challenges}></DiscList>
          </SubParagraph>
        </div>
      </div>
    </div>
  );
}
