"use client";
import { HTMLMotionProps } from "motion/react";
import { forwardRef } from "react";
import { StickyWrapper } from "./Sticky.styles";

export const Sticky = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  ({ children, ...props }, ref) => {
    return <StickyWrapper {...props}>{children}</StickyWrapper>;
  }
);
