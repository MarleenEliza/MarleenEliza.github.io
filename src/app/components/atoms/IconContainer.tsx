import IconGithub from "./icons/IconGithub";
import IconLinkedIn from "./icons/IconLinkedIn";
import IconBroken from "./icons/IconBroken";
import IconFile from "./icons/IconFile";
import IconKey from "./icons/IconKey";
import IconTest from "./icons/IconTest";
import IconQuestion from "./icons/IconQuestion";
import IconThunder from "./icons/IconThunder";

export enum IconSize {
  small = 18,
  medium = 24,
}

export const ICON_LIST = [
  "Github",
  "linkedIn",
  "question",
  "file",
  "key",
  "test",
  "thunder",
] as const;

const ICON_MAP = new Map<(typeof ICON_LIST)[number], React.FC>([
  ["Github", IconGithub],
  ["linkedIn", IconLinkedIn],
  ["question", IconQuestion],
  ["file", IconFile],
  ["test", IconTest],
  ["key", IconKey],
  ["thunder", IconThunder],
]);

type IconContainerProps = {
  icon: (typeof ICON_LIST)[number];
  size: IconSize;
  className: string;
};

export default function IconContainer({
  icon,
  size,
  className,
}: IconContainerProps) {
  const IconComponent = ICON_MAP.get(icon) ?? IconBroken;
  return (
    <i
      className={className}
      data-icon={icon}
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <IconComponent></IconComponent>
    </i>
  );
}
