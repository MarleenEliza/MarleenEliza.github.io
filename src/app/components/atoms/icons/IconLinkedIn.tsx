import Image from "next/image";
import LinkedIn from "@/assets/icons/linked-in.png";

export default function IconLinkedIn() {
  return (
    <Image alt="linkedIn" src={LinkedIn.src} width={21} height={21}></Image>
  );
}
