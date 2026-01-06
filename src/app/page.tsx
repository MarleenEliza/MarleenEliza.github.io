import ImageParagraph from "@/app/components/molecules/ImageParagraph";
import ParagraphSection from "@/app/components/organisms/ParagraphSection";
import PreviousWork from "@/app/components/organisms/PreviousWork";
import en from "@/dictionaries/en.json";
import SubParagraph from "@/app/components/molecules/SubParagraph";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-grow h-full flex-col items-center justify-between pt-[7rem] pb-[6rem] w-full overflow-auto no-scrollbar">
      <ParagraphSection title={en.about_me.heading}>
        <ImageParagraph
          src={en.about_me.image_url}
          eyeCatcher={en.about_me.eye_catcher}
          alt={en.about_me.image_url_alt}
          {...en.about_me}
        >
          {en.about_me.p}
        </ImageParagraph>
        <SubParagraph {...en.about_me_work}>
          <p dangerouslySetInnerHTML={{ __html: en.about_me_work.p }}></p>
          <Image
            className="mt-4 md:mt-6"
            width={1187}
            height={642}
            src={en.about_me_work.image_url}
            alt={en.about_me_work.image_url_alt}
          ></Image>
        </SubParagraph>
        <SubParagraph {...en.about_me_hobby}>
          <p dangerouslySetInnerHTML={{ __html: en.about_me_hobby.p }}></p>
        </SubParagraph>
      </ParagraphSection>

      <ParagraphSection title={en.previous_works.heading}>
        <p>
          A showcase of some of my previous works. I have worked on a wide range of projects, but not all of them are available for public viewing so this is only a very small selection.
        </p>
        <PreviousWork {...en.previous_works_1}></PreviousWork>
        <PreviousWork {...en.previous_works_2}></PreviousWork>
        <PreviousWork {...en.previous_works_3}></PreviousWork>
      </ParagraphSection>
    </main>
  );
}
