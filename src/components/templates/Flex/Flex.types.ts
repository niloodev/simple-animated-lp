import { Breakpoints } from "@/utils/breakpoints";
import { HTMLMotionProps } from "motion/react";

export interface FlexProps extends HTMLMotionProps<"div"> {
  as: "div" | "aside" | "section" | "main" | "article";
  flex?: Breakpoints & { default: string };
  gap?: Breakpoints & { default: string };
  justify?: Breakpoints & { default: string };
  align?: Breakpoints & { default: string };
}
