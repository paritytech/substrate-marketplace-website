import { graphql, useStaticQuery } from 'gatsby';

export const useProjectLogos = () => {
  const { projectLogos } = useStaticQuery(
    graphql`
      query {
        projectLogos: allFile(
          filter: { sourceInstanceName: { eq: "media" }, relativeDirectory: { eq: "images/project_logos" } }
        ) {
          edges {
            node {
              id
              name
              publicURL
              logo: childrenImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    `
  );
  return { projectLogos };
};
