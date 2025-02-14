"use client";
import { HTMLMotionProps } from "motion/react";
import { forwardRef, useEffect, useState } from "react";
import {
  MockOneStyled,
  MockThreeStyled,
  MockTwoStyled,
  MockupContainer,
} from "./Mockup.styles";
import { useParallax } from "./Mockup.parallax";

export const Mockup = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    const [onView, setOnView] = useState<boolean>(false);
    const {
      primaryX,
      primaryY,
      secondaryX,
      secondaryY,
      tertiaryX,
      tertiaryY,
      onMouseMoveHandler,
      onMouseLeaveHandler,
    } = useParallax();

    useEffect(() => {
      document.addEventListener("mousemove", (e) => onMouseMoveHandler(e));
      document.addEventListener("mouseleave", (e) => onMouseLeaveHandler());
    }, []);

    return (
      <MockupContainer
        {...props}
        ref={ref}
        variants={{
          visible: {
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.5,
            },
          },
          hidden: {
            transition: {
              when: "afterChildren",
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        onViewportEnter={() => setOnView(true)}
        viewport={{ once: true, amount: 0.5 }}
      >
        <MockThreeStyled
          style={{
            x: primaryX,
            y: primaryY,
          }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: { opacity: 1, scale: 1 },
          }}
          animate={onView}
        />
        <MockTwoStyled
          style={{
            x: secondaryX,
            y: secondaryY,
          }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: { opacity: 1, scale: 1 },
          }}
          animate={onView}
        />
        <MockOneStyled
          style={{
            x: tertiaryX,
            y: tertiaryY,
          }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, scale: 0.85 },
            visible: { opacity: 1, scale: 1 },
          }}
          renderLogo={onView}
        />
      </MockupContainer>
    );
  }
);
