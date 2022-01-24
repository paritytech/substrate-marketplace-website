// import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function SingularPage({ pageContext }) {
  const { node } = pageContext;
  const { name, description } = node;

  return (
    <Layout mode="full">
      <SEO title={name} />
      <Section>
        <h1 className="mb-20 mt-20 md:mt-52 text-4xl sm:text-5xl md:text-6xl font-body font-extrabold">{name}</h1>
        <p>{description}</p>
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
