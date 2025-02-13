"use client";
import { HTMLMotionProps } from "motion/react";
import { forwardRef } from "react";
import {
  MockOneStyled,
  MockThreeStyled,
  MockTwoStyled,
  MockupContainer,
} from "./Mockup.styles";

export const Mockup = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    return (
      <MockupContainer {...props} ref={ref}>
        <MockOneStyled />
        <MockTwoStyled />
        <MockThreeStyled />
      </MockupContainer>
    );
  }
);
