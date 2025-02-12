import { HTMLMotionProps } from "motion/react";
import * as buttons from "./Button.styles";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  buttonStyle?: keyof typeof buttons;
}
