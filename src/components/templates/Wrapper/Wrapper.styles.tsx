import styled from "styled-components";
import { forwardRef } from "react";
import { WrapperProps } from "./Wrapper.types";
import { device } from "@/utils/breakpoints";

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
  position: relative;
  max-width: 119.5rem;
  height: 178.7rem;
  width: 80%;
  margin: 11.4rem auto 14.1rem auto;

  &::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    opacity: 0.5;
    filter: blur(25rem);
    background: radial-gradient(50% 100% at 50% 100%, #e0e3ff 0%, #6574ff 100%),
      radial-gradient(
        100% 100% at 50% 0%,
        #b49aff 0%,
        rgba(180, 154, 255, 0) 100%
      );
    z-index: -10;
  }

  ${device.desktop} {
    margin: 22.6rem auto 20.5rem auto;

    &::before {
      width: 40%;
      opacity: 0.5;
    }
  }
`;
