const path = require('path');
const { slugify } = require('../src/utils/url');

/*
   Notes:
   - all graphql function call returns a Promise
 */

const createPalletPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      marketplace {
        search(category: "", query: "", type: PALLET) {
          results {
            ... on marketplace_Pallet {
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
              reverseDependencies {
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
        marketplaceCategories(type: PALLET) {
          name
        }
      }
    }
  `);
  if (!result || !result.data) return;

  const section = 'pallets';
  const categories = result.data.marketplace.marketplaceCategories;

  /* Single Pallet Pages e.g. siteurl.com/pallets/pallet-name */
  result.data.marketplace.search.results.forEach(node => {
    const slug = slugify(node.name);
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

  /* Aggregated Pallets siteurl.com/pallets */
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
  createPalletPages,
};
