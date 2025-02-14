/* istanbul ignore file */
import { motion } from "motion/react";
import styled, { css } from "styled-components";
import { ParagraphProps } from "./Paragraph.types";
import { device } from "@/utils/breakpoints";

export const ParagraphContainer = styled(motion.p).withConfig({
  shouldForwardProp: (prop) =>
    !["font", "fontSize", "lineHeight", "color", "fontWeight"].includes(prop),
})<ParagraphProps>`
  font-family: ${(props) =>
    props.font ? `var(--font-${props.font})` : "var(--font-dmsans)"};
  font-size: ${(props) =>
    props.fontSize ? `${props.fontSize?.default}` : "1.6rem"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight?.default}` : "2rem"};
  color: ${(props) => (props.color ? `${props.color}` : "#FFF")};
  font-weight: ${(props) =>
    props.fontWeight ? `${props.fontWeight?.default}` : "400"};

  ${device.tablet} {
    ${(props) =>
      props.fontSize?.tablet
        ? css`
            font-size: ${props.fontSize?.tablet};
          `
        : ""}
    ${(props) =>
      props.lineHeight?.tablet
        ? css`
            line-height: ${props.lineHeight?.tablet};
          `
        : ""}
    ${(props) =>
      props.fontWeight?.tablet
        ? css`
            font-weight: ${props.fontWeight?.tablet};
          `
        : ""}
  }

  ${device.desktop} {
    ${(props) =>
      props.fontSize?.desktop
        ? css`
            font-size: ${props.fontSize?.desktop};
          `
        : ""}
    ${(props) =>
      props.lineHeight?.desktop
        ? css`
            line-height: ${props.lineHeight?.desktop};
          `
        : ""}
    ${(props) =>
      props.fontWeight?.desktop
        ? css`
            font-weight: ${props.fontWeight?.desktop};
          `
        : ""}
  }
`;
