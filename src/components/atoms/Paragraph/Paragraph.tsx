"use client";
import { forwardRef } from "react";
import { ParagraphProps } from "./Paragraph.types";
import { ParagraphContainer } from "./Paragraph.styles";

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, ...props }, ref) => {
    return (
      <ParagraphContainer {...props} ref={ref}>
        {children}
      </ParagraphContainer>
    );
  }
);
