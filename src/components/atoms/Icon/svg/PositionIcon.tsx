import { ComponentProps, forwardRef } from "react";
import { motion } from "motion/react";

export const PositionIcon = forwardRef<
  SVGSVGElement,
  ComponentProps<typeof motion.svg>
>((props, ref) => {
  return (
    <motion.svg
      width="60%"
      height="60%"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M8.52052 0.76947C4.32625 0.76947 0.920654 4.17505 0.920654 8.36932C0.920654 14.8698 8.52052 19.7094 8.52052 19.7094C8.52052 19.7094 16.1204 14.8698 16.1204 8.36932C16.1204 4.17505 12.7148 0.76947 8.52052 0.76947ZM8.52052 12.1692C6.11868 12.1692 4.17091 10.2215 4.17091 7.81965C4.17091 5.41781 6.11868 3.47003 8.52052 3.47003C10.9224 3.47003 12.8701 5.41781 12.8701 7.81965C12.8701 10.2215 10.9224 12.1692 8.52052 12.1692Z"
        fill="white"
      />
    </motion.svg>
  );
});

<svg></svg>;
