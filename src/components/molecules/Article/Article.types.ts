import { HTMLMotionProps } from "motion/react";

export interface ArticleProps extends HTMLMotionProps<"article"> {
  title: string;
  description: string;
  toggle?: boolean;
}
