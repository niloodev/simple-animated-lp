import { useSpring, useTransform } from "motion/react";

export const useParallax = (stiffness = 500, damping = 50, force = 25) => {
  const x = useSpring(0, { stiffness, damping });
  const y = useSpring(0, { stiffness, damping });
  const primaryX = useTransform(x, (event) => event / force);
  const primaryY = useTransform(y, (event) => event / force);
  const secondaryX = useTransform(x, (event) => event / (force + 20));
  const secondaryY = useTransform(y, (event) => event / (force + 20));
  const tertiaryX = useTransform(x, (event) => event / (force + 45));
  const tertiaryY = useTransform(y, (event) => event / (force + 45));

  const onMouseMoveHandler = (event: MouseEvent) => {
    x.set(event.clientX);
    y.set(event.clientY);
  };

  const onMouseLeaveHandler = () => {
    x.set(0);
    y.set(0);
  };

  return {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    tertiaryX,
    tertiaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  };
};
