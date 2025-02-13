"use client";
import { AccordionProps } from "./Accordion.types";
import {
  AccordionButton,
  AccordionContainer,
  AccordionHeading,
  AccordionParagraph,
} from "./Accordion.styles";
import { forwardRef, useState } from "react";
import { AnimatePresence } from "motion/react";

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ title, description, ...props }, ref) => {
    const [open, setOpen] = useState(false);

    return (
      <AccordionContainer ref={ref} {...props}>
        <AccordionButton onClick={() => setOpen(!open)} aria-label="Expandir">
          <AccordionHeading
            $accordionToggle
            data-active={open ? "" : undefined}
          >
            {title}
          </AccordionHeading>
        </AccordionButton>
        <AnimatePresence>
          {open && (
            <AccordionParagraph
              initial={{ y: -25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
            >
              {description}
            </AccordionParagraph>
          )}
        </AnimatePresence>
      </AccordionContainer>
    );
  }
);
