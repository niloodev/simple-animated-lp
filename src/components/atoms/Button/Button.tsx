"use client";
import { forwardRef } from "react";
import * as buttons from "./Button.styles";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, buttonStyle = "ButtonA", ...props }, ref) => {
    const ButtonComponent = buttons[buttonStyle];
    return (
      <ButtonComponent {...props} ref={ref}>
        {children}
      </ButtonComponent>
    );
  }
);
