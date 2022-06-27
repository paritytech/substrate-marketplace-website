import { graphql } from 'gatsby';
import React from 'react';

import CardsList from '../components/layout/marketplace/CardsList';
import SearchMarketplace from '../components/layout/marketplace/SearchMarketplace';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function Home({ data }) {
  const { content } = data;

  return (
    <Layout mode="full">
      <SEO title="Home" />
      <Section className="sm:text-center">
        <h1 className="mb-8 text-5xl lg:text-6xl md:text-6xl font-title font-extrabold">Substrate Marketplace</h1>
        <div className="sm:max-w-lg mx-auto mb-10">
          <p className="max-w-lg text-xl">
            Where blockchain innovators discover & share reusable pallets for use with Substrate, the open-source
            blockchain framework.
          </p>
        </div>
        <SearchMarketplace />
      </Section>
      <Section className="flex justify-center">
        <CardsList data={content.edges} />
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    content: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "//(categories)/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            link
            order
            description
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`;
