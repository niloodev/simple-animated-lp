"use client";
import { Button } from "@/components/atoms";
import { Accordion, Article } from "@/components/molecules";
import { Flex } from "@/components/templates";
import { breakpoints } from "@/utils/breakpoints";
import { HTMLMotionProps, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { RevealSectionProps } from "./RevealSection.types";

export const RevealSection = ({
  elements,
  footerElement,
  ...props
}: RevealSectionProps) => {
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
        window.innerHeight > 1300 ||
        window.innerWidth < (breakpoints.desktop as number)
      )
        setToggleEntrance(true);
      else setToggleEntrance(false);
    };

    listener();

    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

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

  return (
    <Flex
      as="aside"
      ref={ref}
      {...props}
      gap={{ default: "6.4rem", desktop: "10rem" }}
      flex={{ default: "column" }}
    >
      {elements.map((element, i) => {
        const animationConditional =
          activeId == i && !toggleEntrance
            ? { opacity: 1, x: 0 }
            : { opacity: 0, x: -20 };
        const initialAnimation = toggleEntrance
          ? { opacity: 0, x: -20 }
          : undefined;
        const viewAnimation = toggleEntrance ? { opacity: 1, x: 0 } : undefined;

        return element.isAccordion ? (
          <Accordion
            key={`accordion-${i}`}
            title={element.title}
            description={element.description}
            animate={animationConditional}
            initial={initialAnimation}
            whileInView={viewAnimation}
          />
        ) : (
          <Article
            key={`article-${i}`}
            title={element.title}
            description={element.description}
            animate={animationConditional}
            initial={initialAnimation}
            whileInView={viewAnimation}
          />
        );
      })}
      {footerElement}
    </Flex>
  );
};
