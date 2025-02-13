import { HTMLMotionProps } from "motion/react";

export type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends HTMLMotionProps<HeadingTags> {
  as: HeadingTags;
}
