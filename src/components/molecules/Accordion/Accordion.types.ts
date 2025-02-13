import { HTMLMotionProps } from "motion/react";

export interface AccordionProps extends HTMLMotionProps<"article"> {
  title: string;
  description: string;
}
