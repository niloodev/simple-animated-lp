import { HTMLMotionProps } from "motion/react";
import { ComponentProps } from "react";
import { motion } from "motion/react";
import * as icons from "./svg";

export interface IconProps extends HTMLMotionProps<"div"> {
  backgroundColor: string;
  icon: keyof typeof icons;
  svgProps?: ComponentProps<typeof motion.svg>;
}
