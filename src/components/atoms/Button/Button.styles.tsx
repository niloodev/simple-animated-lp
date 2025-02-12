import { device } from "@/utils/breakpoints";
import { motion } from "motion/react";
import styled from "styled-components";

export const ButtonA = styled(motion.button)`
  font-weight: 600;
  font-size: 1.6rem;
  font-family: var(--font-dmsans);
  color: #fff;
  padding: 2.3rem 4.2rem;
  background-color: #2081e2;
  transition: 0.15s ease-in-out all;

  ${device.desktop} {
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
export const ButtonB = styled(motion.button)`
  font-size: 1.6rem;
  color: #fff;
  font-family: var(--font-montserrat);
  font-weight: 600;
  padding: 2.3rem 4.2rem;
  border-radius: 3rem;
  background-color: #9a7fdd;
  transition: 0.15s ease-in-out all;

  ${device.desktop} {
    font-size: 2.4rem;
    line-height: 3.1rem;
    padding: 3.5rem 6.4rem;
    border-radius: 5rem;
  }

  &:hover {
    background-color: #886bd3;
  }

  &:active {
    background-color: #825be6;
  }
`;
export const ButtonC = styled(motion.button)`
  font-size: 1.6rem;
  color: #a86ae2;
  font-family: var(--font-montserrat);
  font-weight: 600;
  padding: 2.3rem 4.2rem;
  border-radius: 3rem;
  background-color: #ffffff;
  transition: 0.15s ease-in-out all;

  ${device.desktop} {
    font-size: 2.4rem;
    line-height: 3.1rem;
    padding: 3.5rem 6.4rem;
    border-radius: 5rem;
  }

  &:hover {
    background-color: #ebebeb;
  }

  &:active {
    background-color: #dbdbdb;
  }
`;
