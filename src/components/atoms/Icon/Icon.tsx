"use client";
import { forwardRef } from "react";
import { IconContainer } from "./Icon.styles";
import { IconProps } from "./Icon.types";
import * as icons from "./svg";

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ svgProps, ...props }, ref) => {
    const CurrentIcon = icons[props.icon];
    return (
      <IconContainer ref={ref} {...props}>
        <CurrentIcon {...svgProps} />
      </IconContainer>
    );
  }
);
