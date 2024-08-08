import Image from "next/image";
import Medium from "@/assets/icons/medium.png";

export default function IconMedium() {
  return (
    <Image
      alt="medium"
      src={Medium.src}
      width={25}
      height={25}
      className="inline-flex"
    ></Image>
  );
}
