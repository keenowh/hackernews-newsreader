import React, {  memo } from "react";
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleMeta,
  ArticleMetaElement,
} from "../styles/ArticleStyles";
import { mapTime } from "../mappers/mapTime";

export const Article = memo(function Article({ article }) {


  return (
    <ArticleWrapper data-testid="Article">
      <ArticleTitle>
        <a href={article.url}>
          <p>{article.title}</p>
        </a>
      </ArticleTitle>
      <ArticleMeta>
        <span data-testid="Article-by">
          <ArticleMetaElement color="#000">By:</ArticleMetaElement>
          {` `}
          {article.author}
        </span>
        <span data-testid="Article-posted">
          <ArticleMetaElement color="#000">Posted:</ArticleMetaElement>
          {`  `}
          {mapTime(article.time)}
        </span>
      </ArticleMeta>
    </ArticleWrapper>
  );
});
