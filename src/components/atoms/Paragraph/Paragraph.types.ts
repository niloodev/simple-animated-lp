import { Breakpoints } from "@/utils/breakpoints";
import { HTMLMotionProps } from "motion/react";

export interface ParagraphProps extends HTMLMotionProps<"p"> {
  font?: "dmsans" | "montserrat" | "poppins";
  color?: string;
  fontSize?: Breakpoints & { default: string };
  lineHeight?: Breakpoints & { default: string };
  fontWeight?: Breakpoints & { default: string };
}
