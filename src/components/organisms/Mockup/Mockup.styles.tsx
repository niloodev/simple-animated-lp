import { MockOne, MockThree, MockTwo } from "@/components/molecules";
import { device } from "@/utils/breakpoints";
import { motion } from "motion/react";
import styled from "styled-components";

export const MockupContainer = styled(motion.div)`
  display: block;
  container-type: size;

  position: relative;
  height: 46.5rem;
  aspect-ratio: 455 / 980;

  ${device.desktop} {
    height: 98rem;
    max-height: 95vh;
    margin-right: 7.9rem;
  }
`;

export const MockOneStyled = styled(MockOne)`
  width: 100cqw;
  height: auto;
`;

export const MockTwoStyled = styled(MockTwo)`
  position: absolute;
  bottom: 45.9cqw;
  right: -17.43cqw;
  width: 83.44cqw;
  height: auto;
  pointer-events: none;
  z-index: 10;
`;

export const MockThreeStyled = styled(MockThree)`
  position: absolute;
  bottom: 99.3cqw;
  left: -16.55cqw;
  width: 83.44cqw;
  height: auto;
  pointer-events: none;
  z-index: 20;
`;
