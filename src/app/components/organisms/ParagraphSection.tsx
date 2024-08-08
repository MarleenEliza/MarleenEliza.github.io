import TheHeading from "@/app/components/atoms/TheHeading";

type ParagraphSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ParagraphSection({
  title,
  children,
}: ParagraphSectionProps) {
  return (
    <section className="flex gap-2 flex-col even:bg-accent-light px-4 pt-6 md:pt-2 md:px-16 pb-10 w-full">
      <TheHeading>{title}</TheHeading>
      {children}
    </section>
  );
}
