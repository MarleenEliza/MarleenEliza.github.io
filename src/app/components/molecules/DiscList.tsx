type DiscList = {
  list: string[];
  isParted?: boolean;
};
export default function DiscList({ list, isParted = false }: DiscList) {
  return (
    <ul
      className={`list-disc px-3 ${
        isParted ? "grid grid-cols-2 md:max-w-[80%] md:gap-x-6" : ""
      }`}
    >
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
