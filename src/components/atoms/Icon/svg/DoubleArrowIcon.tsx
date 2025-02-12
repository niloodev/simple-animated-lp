import { ComponentProps, forwardRef } from "react";
import { motion } from "motion/react";

export const DoubleArrowIcon = forwardRef<
  SVGSVGElement,
  ComponentProps<typeof motion.svg>
>((props, ref) => {
  return (
    <motion.svg
      width="58.6%"
      height="33%"
      viewBox="0 0 39 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M0.963501 9.6289L8.98162 0.846069L16.9997 9.6289"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.98145 0.846069V23.4066"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.0066 14.6239L29.9886 23.4067L21.9705 14.6239"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.9885 23.4066V0.846069"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
});
