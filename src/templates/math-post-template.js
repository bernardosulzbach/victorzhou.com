import { graphql } from 'gatsby';
import PostTemplate from './post-template';

require('katex/dist/katex.min.css');

export const query = graphql`
  query MathPostBySlug($slug: String!, $prev: String!, $next: String!) {
    ...PostFragment
  }
`;

export default PostTemplate;
