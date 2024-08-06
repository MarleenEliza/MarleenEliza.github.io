import IconContainer, {
  Icon,
  IconSize,
} from "@/app/components/atoms/IconContainer";

type IconLinkProps = {
  href: string;
  children: React.ReactNode;
  icon: string;
  isDownload?: boolean;
};

export default function IconLink({
  href,
  children,
  icon,
  isDownload,
}: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      className="group transition underline text-accent-light flex gap-2 text-sm md:text-md hover:text-accent-dark"
      download={isDownload}
    >
      <IconContainer
        icon={icon as Icon}
        size={IconSize.small}
        className="text-accent-default group-hover:text-accent-dark"
      />
      {children}
    </a>
  );
}
