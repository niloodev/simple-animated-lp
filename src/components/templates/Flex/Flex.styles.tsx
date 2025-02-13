import styled, { css } from "styled-components";
import { FlexProps } from "./Flex.types";
import { device } from "@/utils/breakpoints";
import { motion } from "motion/react";

export const FlexContainer = styled(motion.div).withConfig({
  shouldForwardProp: (prop) =>
    !["flex", "gap", "align", "justify"].includes(prop),
})<FlexProps>`
  display: flex;
  flex-flow: ${(props) => (props.flex ? props.flex?.default : "row wrap")};
  gap: ${(props) => (props.gap ? props.gap?.default : "2rem 2rem")};
  justify-content: ${(props) =>
    props.justify ? props.justify?.default : "flex-start"};
  align-items: ${(props) =>
    props.align ? props.align?.default : "flex-start"};

  ${device.tablet} {
    ${(props) =>
      props.flex?.tablet
        ? css`
            flex-flow: ${props.flex?.tablet};
          `
        : ""}
    ${(props) =>
      props.gap?.tablet
        ? css`
            gap: ${props.gap?.tablet};
          `
        : ""}
    ${(props) =>
      props.justify?.tablet
        ? css`
            justify-content: ${props.justify?.tablet};
          `
        : ""}
    ${(props) =>
      props.align?.tablet
        ? css`
            align-items: ${props.align?.tablet};
          `
        : ""}
  }

  ${device.desktop} {
    ${(props) =>
      props.flex?.desktop
        ? css`
            flex-flow: ${props.flex?.desktop};
          `
        : ""}
    ${(props) =>
      props.gap?.desktop
        ? css`
            gap: ${props.gap?.desktop};
          `
        : ""}
    ${(props) =>
      props.justify?.desktop
        ? css`
            justify-content: ${props.justify?.desktop};
          `
        : ""}
    ${(props) =>
      props.align?.desktop
        ? css`
            align-items: ${props.align?.desktop};
          `
        : ""}
  }
`;
