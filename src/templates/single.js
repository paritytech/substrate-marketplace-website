import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import DevLinks from '../components/layout/single-template/DevLinks';
import Insights from '../components/layout/single-template/Insights';
import ListSection from '../components/layout/single-template/ListSection';
import Layout from '../components/site/Layout';
import NavBreadcrumb from '../components/site/NavBreadcrumb';
import SEO from '../components/site/SEO';

export default function SingularPage({ pageContext }) {
  const { node } = pageContext;
  const { name, description, homepage, repository, listingInsights } = node;
  console.log(listingInsights);
  return (
    <Layout>
      <SEO title={name} />
      <article
        className={cx(`container flex flex-col lg:flex-row xl:px-12`, `underline-animate underline-animate-thin`)}
      >
        <div className="flex-grow mt-2 mb-20">
          <div className="mb-12">
            <NavBreadcrumb />
          </div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="w-full lg:w-60 p-1 bg-red-200">
          <ListSection title="Developer Links">
            <DevLinks link={homepage} />
            <DevLinks type="repo" link={repository} />
          </ListSection>
          <ListSection title="Insights">
            <Insights data={listingInsights} />
          </ListSection>
        </div>
      </article>
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
