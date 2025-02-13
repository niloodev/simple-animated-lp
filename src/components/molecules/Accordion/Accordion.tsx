"use client";
import { AccordionProps } from "./Accordion.types";
import { Heading } from "@/components/atoms";
import {
  AccordionButton,
  AccordionContainer,
  AccordionHeading,
  AccordionParagraph,
} from "./Accordion.styles";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export function Accordion({ title, description, toggle }: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <AccordionContainer>
      {!toggle ? (
        <AccordionHeading>{title}</AccordionHeading>
      ) : (
        <AccordionButton onClick={() => setOpen(!open)} aria-label="Expandir">
          <AccordionHeading
            $accordionToggle
            data-active={open ? "" : undefined}
          >
            {title}
          </AccordionHeading>
        </AccordionButton>
      )}
      <AnimatePresence>
        {open && toggle ? (
          <AccordionParagraph
            initial={{ y: -25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -25, opacity: 0 }}
          >
            {description}
          </AccordionParagraph>
        ) : null}
      </AnimatePresence>
    </AccordionContainer>
  );
}
