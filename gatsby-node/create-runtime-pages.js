const path = require('path');
const { slugify } = require('../src/utils/url');

/*
   Notes:
   - all graphql function call returns a Promise
 */

const createRuntimePages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      marketplace {
        search(category: "", query: "", type: RUNTIME) {
          results {
            ... on marketplace_Runtime {
              id
              compatibilityVersion
              name
              authors
              description
              documentation
              version
              categories
              repository
              homepage
              license
              totalDownloads
              readme
              readmeContent
              listingInsights {
                insights {
                  id
                  metricValue
                  metricName
                }
                stars
              }
              forwardDependencies {
                dependencies {
                  dependency {
                    name
                    type
                    version
                  }
                }
              }
            }
          }
        }
        marketplaceCategories(type: RUNTIME) {
          name
        }
      }
    }
  `);
  if (!result || !result.data) return;

  const section = 'runtimes';
  const categories = result.data.marketplace.marketplaceCategories;

  /* Single Runtime Pages e.g. siteurl.com/runtimes/runtime-name */
  result.data.marketplace.search.results.forEach(node => {
    const slug = slugify(node.name);
    const section = 'runtimes';
    createPage({
      path: `${section}/${slug}/`,
      component: path.resolve(`./src/templates/single.js`),
      context: {
        slug,
        node,
        section,
      },
    });
  });

  /* Aggregated Runtimes siteurl.com/runtimes */
  createPage({
    path: `/${section}/`,
    component: path.resolve(`./src/templates/sub-page.js`),
    context: {
      result,
      categories,
      section,
    },
  });
};

module.exports = {
  createRuntimePages,
};
