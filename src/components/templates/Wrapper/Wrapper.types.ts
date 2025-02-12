import { HTMLProps } from "react";

export interface WrapperProps extends HTMLProps<HTMLDivElement> {
  as: "div" | "aside" | "section" | "main" | "article";
}
