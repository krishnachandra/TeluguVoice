import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query GetPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($id: ID!, $idType: PostIdType!) {
    post(id: $id, idType: $idType) {
      id
      title
      slug
      content
      excerpt
      date
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`;
