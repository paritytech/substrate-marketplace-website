import { graphql } from 'gatsby';
import React from 'react';

import { Link } from '../components/default/Link';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';

export default function TestPage({ data }) {
  console.log(data);
  return (
    <Layout mode="full">
      <SEO title="Home" />
      <Section>
        <h1 className="mb-20 mt-20 md:mt-52 text-4xl sm:text-5xl md:text-6xl font-body font-extrabold">
          marketplace all pages
        </h1>
        <h3>Links</h3>
        {data.pages.nodes.map((each, index) => {
          return (
            <div key={index}>
              <Link to={each.path}>{each.path}</Link>
            </div>
          );
        })}
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
    pages: allSitePage {
      nodes {
        path
      }
    }
  }
`;
