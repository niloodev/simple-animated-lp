import { device } from "@/utils/breakpoints";
import { motion } from "motion/react";
import styled from "styled-components";

export const LogoContainer = styled(motion.div)`
  position: relative;
  container-type: size;
  width: 6.3rem;
  height: 5.9rem;
  background-color: #fff;
  border-radius: 2rem;
  padding: 1rem;

  ${device.desktop} {
    width: 13.4rem;
    height: 12.6rem;
    border-radius: 1.75rem;
    padding: 2.2rem;
  }
`;

export const LogoWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const LogoSvgContainer = styled(motion.svg)`
  width: 100%;
  aspect-ratio: 93 / 83;
  height: auto;
`;
