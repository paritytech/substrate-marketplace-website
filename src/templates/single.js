// import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/site/Layout';
import NavBreadcrumb from '../components/site/NavBreadcrumb';
import SEO from '../components/site/SEO';

export default function SingularPage({ pageContext }) {
  const { node } = pageContext;
  const { name, description } = node;

  return (
    <Layout>
      <SEO title={name} />
      <article className="container flex flex-col lg:flex-row">
        <div className="flex-grow mt-2 mb-20">
          <div className="mb-12">
            <NavBreadcrumb />
          </div>
          <h1 className="">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="w-full lg:w-60 bg-red-200">SideBar</div>
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
