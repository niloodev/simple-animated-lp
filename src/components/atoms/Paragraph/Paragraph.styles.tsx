import { motion } from "motion/react";
import styled from "styled-components";
import { ParagraphProps } from "./Paragraph.types";
import { device } from "@/utils/breakpoints";

export const ParagraphContainer = styled(motion.p)<ParagraphProps>`
  font-family: ${(props) =>
    props.font ? `var(--font-${props.font})` : "var(--font-dmsans)"};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize?.default}` : "1.6rem"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight?.default}` : "2rem"};
  color: ${(props) => (props.color ? `${props.color}` : "#FFF")};
  font-weight: ${(props) => (props.fontWeight ? `${props.fontWeight}` : "400")};

  ${device.tablet} {
    font-size: ${(props) =>
      props.fontSize ? `${props.fontSize?.tablet}` : "1.8rem"};
    line-height: ${(props) =>
      props.lineHeight ? `${props.lineHeight?.tablet}` : "2.2rem"};
  }

  ${device.desktop} {
    font-size: ${(props) =>
      props.fontSize ? `${props.fontSize?.desktop}` : "3.2rem"};
    line-height: ${(props) =>
      props.lineHeight ? `${props.lineHeight?.desktop}` : "4.1rem"};
  }
`;
