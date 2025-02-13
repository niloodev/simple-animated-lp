"use client";
import { forwardRef } from "react";
import * as buttons from "./Button.styles";
import { ButtonOnion } from "./Button.types";
import { motion } from "motion/react";

export const Button = forwardRef<
  HTMLAnchorElement & HTMLButtonElement,
  ButtonOnion
>(({ $buttonStyle, ...props }, ref) => {
  switch (props.as) {
    case "a":
      const LinkComponent = buttons[$buttonStyle] as typeof motion.a;

      return (
        <LinkComponent {...props} ref={ref}>
          {props.children}
        </LinkComponent>
      );

    case "button":
      const ButtonComponent = buttons[$buttonStyle];

      return (
        <ButtonComponent {...props} ref={ref}>
          {props.children}
        </ButtonComponent>
      );
  }
});
