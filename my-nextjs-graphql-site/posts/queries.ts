// src/posts/queries.ts

import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      content
    }
  }
`;
