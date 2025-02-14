/* istanbul ignore file */
import { breakpoints } from "@/utils/breakpoints";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { RevealElements } from "./RevealSection.types";

export function useRevealSection(elements: RevealElements) {
  const [toggleEntrance, setToggleEntrance] = useState(false);
  const [activeId, setActiveId] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.2 1", "0.65 0"],
  });

  useEffect(() => {
    const listener = () => {
      if (
        window.innerHeight > (ref?.current?.clientHeight ?? 1300) - 30 ||
        window.innerWidth < (breakpoints.desktop as number)
      )
        setToggleEntrance(true);
      else setToggleEntrance(false);
    };

    listener();

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [ref]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (toggleEntrance) return;

    const viewSize = 1 / elements.length;
    let selected = 0;

    elements
      .map((e, i) => ({ id: i }))
      .reverse()
      .forEach(({ id }) => {
        if (current < viewSize * (id + 1)) selected = id;
        else if (id == elements.length - 1 && current == 1) selected = id;
      });

    setActiveId(selected);
  });

  return {
    activeId,
    toggleEntrance,
    ref,
  };
}
