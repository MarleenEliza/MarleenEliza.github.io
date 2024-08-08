import IconGithub from "./icons/IconGithub";
import IconLinkedIn from "./icons/IconLinkedIn";
import IconBroken from "./icons/IconBroken";
import IconFile from "./icons/IconFile";
import IconKey from "./icons/IconKey";
import IconTest from "./icons/IconTest";
import IconQuestion from "./icons/IconQuestion";
import IconThunder from "./icons/IconThunder";
import IconMusic from "./icons/IconMusic";
import IconPc from "./icons/IconPc";
import IconDownload from "./icons/IconDownload";
import IconMedium from "./icons/IconMedium";

export enum IconSize {
  small = 18,
  medium = 25,
}

const ICON_LIST = [
  "Github",
  "linkedIn",
  "question",
  "file",
  "key",
  "test",
  "thunder",
  "music",
  "pc",
  "download",
  "medium",
] as const;

export type Icon = (typeof ICON_LIST)[number];

const ICON_MAP = new Map<Icon, React.FC>([
  ["Github", IconGithub],
  ["linkedIn", IconLinkedIn],
  ["question", IconQuestion],
  ["file", IconFile],
  ["test", IconTest],
  ["key", IconKey],
  ["thunder", IconThunder],
  ["music", IconMusic],
  ["pc", IconPc],
  ["download", IconDownload],
  ["medium", IconMedium],
]);

type IconContainerProps = {
  icon: Icon;
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
