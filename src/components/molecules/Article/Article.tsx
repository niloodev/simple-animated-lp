"use client";
import { ArticleProps } from "./Article.types";
import {
  ArticleContainer,
  ArticleHeading,
  ArticleParagraph,
} from "./Article.styles";
import { forwardRef } from "react";

export const Article = forwardRef<HTMLDivElement, ArticleProps>(
  ({ title, description, ...props }, ref) => {
    return (
      <ArticleContainer ref={ref} {...props}>
        <ArticleHeading>{title}</ArticleHeading>
        <ArticleParagraph
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
        >
          {description}
        </ArticleParagraph>
      </ArticleContainer>
    );
  }
);
