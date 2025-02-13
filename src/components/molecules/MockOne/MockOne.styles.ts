import { Logo } from "@/components/atoms";
import { motion } from "motion/react";
import styled from "styled-components";

export const MockOneContainer = styled(motion.div)`
  display: block;
  container-type: size;

  position: relative;
  width: 21.5rem;
  aspect-ratio: 455 / 980;

  & svg {
    width: 100cqw;
  }
`;

export const MockLogo = styled(Logo)`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  top: 7.95cqh;
  width: 29.58cqw;
  height: 27.8cqw;
  z-index: 10;
`;
