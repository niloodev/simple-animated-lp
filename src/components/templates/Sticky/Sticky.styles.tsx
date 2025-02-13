import { device } from "@/utils/breakpoints";
import { motion } from "motion/react";
import styled from "styled-components";

export const StickyWrapper = styled(motion.div)`
  ${device.desktop} {
    display: block;
    position: relative;

    && > * {
      position: sticky;
      top: 1.5rem;
    }
  }
`;
