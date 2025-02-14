"use client";
import { forwardRef } from "react";
import { HeadingElement } from "./Heading.styles";
import { HeadingProps } from "./Heading.types";

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as = "h1", children, ...props }, ref) => {
    return (
      <HeadingElement {...props} ref={ref}>
        {children}
      </HeadingElement>
    );
  }
);
