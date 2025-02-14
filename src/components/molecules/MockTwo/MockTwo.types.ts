import { motion } from "motion/react";
import { ComponentProps } from "react";

export interface MockTwo extends ComponentProps<typeof motion.svg> {
  animate?: boolean;
}
