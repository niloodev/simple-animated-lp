import { motion } from "motion/react";
import styled from "styled-components";
import { IconProps } from "./Icon.types";

export const IconContainer = styled(motion.div)<IconProps>`
  position: relative;
  width: 4rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`;
