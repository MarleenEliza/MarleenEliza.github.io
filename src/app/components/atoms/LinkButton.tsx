import IconContainer, {
  ICON_LIST,
  IconSize,
} from "@/app/components/atoms/IconContainer";

type LinkButtontProps = {
  href: string;
  children: React.ReactNode;
  icon: (typeof ICON_LIST)[number];
};

export default function LinkButton({ href, children, icon }: LinkButtontProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="transition p-4 gap-1 items-center justify-center flex rounded-xl w-full text-center bg-white text-accent-dark font-bold mb-4 border-accent-default border hover:bg-accent-default hover:text-white"
    >
      <IconContainer
        icon={icon}
        size={IconSize.medium}
        className=""
      ></IconContainer>
      {children}
    </a>
  );
}
