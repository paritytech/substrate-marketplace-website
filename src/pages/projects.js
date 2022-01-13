// import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function Pallets() {
  return (
    <Layout mode="full">
      <SEO title="Projects" />
      <Section>
        <h1 className="mb-20 mt-20 md:mt-52 text-4xl sm:text-5xl md:text-6xl font-body font-extrabold">
          projects page
        </h1>
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
