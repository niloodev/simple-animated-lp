import { device } from "@/utils/breakpoints";
import { motion } from "motion/react";
import styled, { css } from "styled-components";

export const StarStaticBackground = styled.div`
  z-index: -50;
  position: absolute;
  width: 100%;
  height: 95%;
  left: 0;
  right: 0;
  margin: auto;
  top: 0;
  bottom: 0;
  overflow: hidden;
`;

export const Star = styled(motion.span)<{ $bottomStar?: boolean }>`
  position: absolute;

  ${(props) =>
    props.$bottomStar
      ? css`
          bottom: 0;
        `
      : css`
          top: 0;
        `}

  left: -30vw;
  display: block;
  height: 0.2rem;
  width: 4.8rem;
  border-radius: 2.4rem;
  background: linear-gradient(
      270deg,
      #b49aff 0.61%,
      rgba(180, 154, 255, 0) 90.89%
    ),
    linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
  box-shadow: 0 0 1.3rem 0px #b49affbf;

  ${device.desktop} {
    width: 12.3rem;
  }

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: -0.1rem;
    bottom: 0;
    display: block;
    width: 50%;
    border-radius: 100%;
    height: 0.5rem;
    filter: blur(1.2rem);
    background-color: #b49affbf;
  }
`;
