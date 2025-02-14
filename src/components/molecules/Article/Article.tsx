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
        <ArticleHeading
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          {title}
        </ArticleHeading>
        <ArticleParagraph
          initial={{ x: -25, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {description}
        </ArticleParagraph>
      </ArticleContainer>
    );
  }
);
