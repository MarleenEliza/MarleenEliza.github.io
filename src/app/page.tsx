import ImageParagraph from "@/app/components/molecules/ImageParagraph";
import ParagraphSection from "@/app/components/organisms/ParagraphSection";
import PreviousWork from "@/app/components/organisms/PreviousWork";
import en from "@/dictionaries/en.json";

export default function Home() {
  return (
    <main className="flex flex-grow h-full flex-col items-center justify-between pt-[9rem] pb-[6rem] w-full overflow-auto no-scrollbar">
      <ParagraphSection title={en.about_me_header}>
        <ImageParagraph
          src="/pictures/profile_pic.jpeg"
          alt={en.profile_picture_alt}
          eyeCatcher={en.about_me_image_eye_catcher}
        >
          {en.about_me_image_p}
        </ImageParagraph>
        <p>{en.about_me_image_p}</p>
      </ParagraphSection>
      <ParagraphSection title={en.previous_works_header}>
        <PreviousWork {...en.previous_works_1}></PreviousWork>
        <PreviousWork {...en.previous_works_2}></PreviousWork>
      </ParagraphSection>
    </main>
  );
}
