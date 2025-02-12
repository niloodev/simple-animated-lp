import { ComponentProps, forwardRef } from "react";
import { motion } from "motion/react";

export const ArrowIcon = forwardRef<
  SVGSVGElement,
  ComponentProps<typeof motion.svg>
>((props, ref) => {
  return (
    <motion.svg
      width="50%"
      height="50%"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: ".75rem", bottom: ".75rem" }}
      {...props}
      ref={ref}
    >
      <path
        d="M5.75761 8.13735L4.25102 3.94822L0.0618896 2.44163L7.92568 0.27356L5.75761 8.13735Z"
        fill="white"
      />
    </motion.svg>
  );
});
