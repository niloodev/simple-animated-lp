import { Paragraph } from "@/components/atoms";
import { Flex, FlexProps } from "@/components/templates";
import styled from "styled-components";

export const ArticleContainer = styled(Flex).attrs({
  forwardedAs: "article",
  flex: { default: "column" },
  gap: { default: "1.2rem", desktop: "2.4rem" },
  align: { default: "flex-start" },
  justify: { default: "flex-start" },
})<FlexProps>`
  max-width: 45.7rem;
`;

export const ArticleParagraph = styled(Paragraph).attrs({
  fontSize: { default: "1.6rem", desktop: "3.2rem" },
  lineHeight: { default: "2rem", desktop: "4.1rem" },
})``;
