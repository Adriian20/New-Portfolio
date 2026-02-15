import { useCallback } from "react";

export function useScrollSection() {
  const scrollToSection = useCallback((href: string) => {
    if (!href.startsWith("#")) return;

    const element = document.querySelector(href);
    if (!element) return;

    const header = document.querySelector("header");
    const headerHeight = header?.clientHeight || 0;

    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.scrollY;
    const targetScroll = absoluteElementTop - headerHeight - 20;

    let startTime: number | null = null;
    const startScroll = window.scrollY;
    const distance = targetScroll - startScroll;
    const duration = 800;
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animateScroll = (currentTime: number) => {
      if (null === startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startScroll + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  }, []);

  return { scrollToSection };
}
