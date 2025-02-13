import { device } from "@/utils/breakpoints";
import { motion } from "motion/react";
import styled from "styled-components";
import { ButtonTypes } from "./Button.types";

export const ButtonA = styled(motion.button)<{ as: ButtonTypes }>`
  font-weight: 600;
  font-size: 1.6rem;
  font-family: var(--font-dmsans);
  color: #fff;
  padding: 2.3rem 4.2rem;
  background-color: #2081e2;
  transition: 0.15s ease-in-out all;
  align-self: flex-start;

  ${device.tablet} {
    align-self: center;
  }

  ${device.desktop} {
    align-self: flex-start;
    font-size: 2.4rem;
    line-height: 3.1rem;
    padding: 3.5rem 6.4rem;
  }

  &:hover {
    background-color: #186cc0;
  }

  &:active {
    background-color: #0c4883;
  }
`;
