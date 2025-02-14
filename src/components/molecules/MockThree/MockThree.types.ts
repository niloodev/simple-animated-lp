import { motion } from "motion/react";
import { ComponentProps } from "react";

export interface MockThreeProps extends ComponentProps<typeof motion.svg> {
  animate?: boolean;
}
