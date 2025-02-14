"use client";
import { Accordion, Article } from "@/components/molecules";
import { Flex } from "@/components/templates";
import { RevealSectionProps } from "./RevealSection.types";
import { useRevealSection } from "./RevealSection.hook";

export const RevealSection = ({
  elements,
  footerElement,
  ...props
}: RevealSectionProps) => {
  const { ref, toggleEntrance, activeId } = useRevealSection(elements);

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
