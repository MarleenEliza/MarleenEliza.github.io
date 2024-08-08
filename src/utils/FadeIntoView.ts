import { RefObject } from "react";

export const fadeIntoView = (ref: RefObject<HTMLElement>, setIsVisible: (isVisible: boolean) => void) => {
  if (!ref.current) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => setIsVisible(entry.isIntersecting));
  });
  observer.observe(ref.current);
  return () => {
    if (!ref.current) return;
    observer.unobserve(ref.current);
  }
}
