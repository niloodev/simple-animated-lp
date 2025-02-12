"use client";
import { forwardRef } from "react";
import { WrapperProps } from "./Wrapper.types";
import { WrapperContainer } from "./Wrapper.styles";

export const Wrapper = forwardRef<HTMLHeadingElement, WrapperProps>(
  ({ as, children, ...props }, ref) => {
    return (
      <WrapperContainer as={as} {...props} ref={ref}>
        {children}
      </WrapperContainer>
    );
  }
);
