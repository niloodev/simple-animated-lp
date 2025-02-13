import { Heading, Paragraph } from "@/components/atoms";
import { Flex, FlexProps } from "@/components/templates";
import styled, { css } from "styled-components";

export const AccordionButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  transition: 0.2s ease-in-out all;

  &:hover {
    scale: 1.05;
  }

  &:active {
    scale: 0.95;
  }
`;

export const AccordionContainer = styled(Flex).attrs({
  forwardedAs: "article",
  flex: { default: "column" },
  gap: { default: "1.2rem", desktop: "2.4rem" },
  align: { default: "flex-start" },
  justify: { default: "flex-start" },
})<FlexProps>`
  max-width: 45.7rem;
`;

export const AccordionParagraph = styled(Paragraph).attrs({
  fontSize: { default: "1.6rem", desktop: "3.2rem" },
  lineHeight: { default: "2rem", desktop: "4.1rem" },
})``;

export const AccordionHeading = styled(Heading).attrs({
  forwardedAs: "h2",
})<{ $accordionToggle?: boolean }>`
  ${(props) =>
    props.$accordionToggle &&
    css`
      &::before {
        content: "> ";
        transition: 0.2s ease-in-out all;
        display: inline-block;
        margin-right: clamp(0.5rem, 1vw, 1rem);
      }

      &[data-active] {
        &::before {
          transform: rotate(90deg);
        }
      }
    `}
`;
