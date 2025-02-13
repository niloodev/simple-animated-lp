import styled from "styled-components";
import { motion } from "motion/react";
import { device } from "@/utils/breakpoints";

export const HeadingElement = styled(motion.h1)`
  font-family: var(--font-poppins);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.6rem;
  max-width: 87.4rem;
  color: #fff;

  ${device.tablet} {
    text-align: center;
  }

  ${device.desktop} {
    text-align: left;
    font-size: 4.8rem;
    line-height: 6.4rem;
  }
`;
