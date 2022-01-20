import { graphql } from 'gatsby';
import React from 'react';

import HomepageCards from '../components/layout/marketplace/HomepageCards';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import SearchMarketplace from '../components/ui/SearchMarketplace';

export default function Home() {
  return (
    <Layout mode="full">
      <SEO title="Home" />
      <Section className="sm:text-center">
        <h1 className="mb-8 text-3xl sm:text-5xl md:text-6xl font-title font-extrabold">Substrate Marketplace</h1>
        <div className="sm:max-w-lg mx-auto mb-10">
          <p className="font-medium leading-8">
            Where blockchain innovators discover & share reusable pallets for use with Parity Substrate, the open-source
            Blockchain framework.
          </p>
        </div>
        <SearchMarketplace />
      </Section>
      <Section className="flex justify-center">
        <HomepageCards />
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
  }
`;
