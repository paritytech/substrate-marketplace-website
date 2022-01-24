const path = require('path');
const { slugify } = require('../src/utils/url');

/*
   Notes:
   - all graphql function call returns a Promise
 */

const createProjectPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      marketplace {
        search(category: "", query: "", type: PROJECT) {
          results {
            ... on marketplace_Project {
              id
              name
              authors
              description
              version
              categories
              repository
              homepage
              license
              listingInsights {
                insights {
                  id
                  metricValue
                  metricName
                }
                stars
              }
              readme
              documentation
              projectRelations {
                relations {
                  listing {
                    name
                    type
                    version
                  }
                  relationType
                }
              }
            }
          }
        }
      }
    }
  `);
  if (!result || !result.data) return;

  result.data.marketplace.search.results.forEach(node => {
    const slug = slugify(node.name);
    console.log(slug);
    createPage({
      path: `projects/${slug}/`,
      component: path.resolve(`./src/templates/single.js`),
      context: {
        slug,
        node,
      },
    });
  });
};

module.exports = {
  createProjectPages,
};
