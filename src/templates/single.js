import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Sidebar from '../components/layout/single-template/Sidebar';
import Layout from '../components/site/Layout';
import NavBreadcrumb from '../components/site/NavBreadcrumb';
import SEO from '../components/site/SEO';
import ProjectLogo from '../components/ui/ProjectLogo';

export default function SingularPage({ pageContext }) {
  const { node } = pageContext;
  const { name, description } = node;

  return (
    <Layout>
      <SEO title={name} />
      <article
        className={cx(`container flex flex-col lg:flex-row xl:px-12`, `underline-animate underline-animate-thin`)}
      >
        <div className="flex-grow mt-2 mb-20 pr-4">
          <div className="mb-12">
            <NavBreadcrumb />
          </div>
          <div className="flex flex-col lg:flex-row">
            <ProjectLogo name={name} />
            <h1 className="font-body">{name}</h1>
          </div>
          <p className="max-w-4xl">{description}</p>
        </div>
        <Sidebar data={node} />
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
