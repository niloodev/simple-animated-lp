import styled from "styled-components";
import { forwardRef } from "react";
import { WrapperProps } from "./Wrapper.types";

const CustomWrapperElement = forwardRef<HTMLDivElement, WrapperProps>(
  ({ as: Component, children, ...props }, ref) => {
    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  }
);

export const WrapperContainer = styled(CustomWrapperElement)`
  max-width: 119.5rem;
  width: 80%;
  margin: auto;
`;
