import IconContainer, {
  Icon,
  IconSize,
} from "@/app/components/atoms/IconContainer";

type LinkButtontProps = {
  href: string;
  children: React.ReactNode;
  icon: Icon;
};

export default function LinkButton({ href, children, icon }: LinkButtontProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="group transition p-4 gap-1 items-center justify-center flex rounded-xl w-full text-center bg-white text-accent-dark font-bold mb-4 border-accent-default border hover:bg-accent-default hover:text-white md:gap-2"
    >
      <IconContainer
        icon={icon}
        size={IconSize.medium}
        className="text-accent-default group-hover:text-white md:scale-150"
      ></IconContainer>
      {children}
    </a>
  );
}
