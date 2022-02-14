import { graphql, useStaticQuery } from 'gatsby';

export const useDisclaimer = () => {
  const { disclaimer } = useStaticQuery(
    graphql`
      query {
        disclaimer: markdownRemark(frontmatter: { title: { eq: "Substrate Marketplace Listing Disclaimer" } }) {
          frontmatter {
            title
          }
          html
        }
      }
    `
  );
  return { disclaimer };
};
