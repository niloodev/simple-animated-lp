"use client";
import { Star, StarStaticBackground } from "./StarContainer.styled";
import { ComponentProps } from "react";

export const StarContainer = (
  props: ComponentProps<typeof StarStaticBackground>
) => {
  return (
    <StarStaticBackground {...props}>
      <Star
        animate={{
          x: ["-30vw", "160vw"],
          scale: [1, 3],
        }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <Star
        $bottomStar
        animate={{
          x: ["-30vw", "160vw"],
          scale: [1, 3],
        }}
        transition={{ repeat: Infinity, duration: 5, delay: 2 }}
      />
    </StarStaticBackground>
  );
};
