"use client";
import { forwardRef } from "react";
import { FlexProps } from "./Flex.types";
import { FlexContainer } from "./Flex.styles";

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...props }, ref) => {
    return (
      <FlexContainer {...props} ref={ref}>
        {children}
      </FlexContainer>
    );
  }
);
