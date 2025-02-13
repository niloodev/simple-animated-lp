import { HTMLMotionProps } from "motion/react";
import * as buttons from "./Button.styles";

export type ButtonTypes = "button" | "a";

export interface LinkProps extends HTMLMotionProps<"a"> {
  as: "a";
  $buttonStyle: keyof typeof buttons;
}

export interface ButtonProps extends HTMLMotionProps<"button"> {
  as: "button";
  $buttonStyle: keyof typeof buttons;
}

export type ButtonOnion = LinkProps | ButtonProps;
