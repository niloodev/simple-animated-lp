import styled from "styled-components";
import { motion } from "motion/react";
import { device } from "@/utils/breakpoints";

export const HeadingElement = styled(motion.h1)`
  font-family: var(--font-poppins);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: #fff;

  ${device.desktop} {
    font-size: 4.8rem;
    line-height: 6.4rem;
  }
`;
