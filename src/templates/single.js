import cx from 'classnames';
import { graphql } from 'gatsby';
import React from 'react';

import Sidebar from '../components/layout/single-template/Sidebar';
import Layout from '../components/site/Layout';
import NavBreadcrumb from '../components/site/NavBreadcrumb';
import SEO from '../components/site/SEO';
import ProjectLogo from '../components/ui/ProjectLogo';

export default function SingularPage({ pageContext }) {
  const { node, section } = pageContext;
  const { name, description } = node;
  console.log(section);
  console.log(node);
  return (
    <Layout>
      <SEO title={name} />
      <article
        className={cx(`container flex flex-col lg:flex-row xl:px-12`, `underline-animate underline-animate-thin`)}
      >
        <div className="flex-grow pr-4 mt-2 mb-20">
          <div className="mb-12">
            <NavBreadcrumb />
          </div>
          <div className="flex flex-col lg:flex-row">
            {section === 'projects' && <ProjectLogo name={name} />}
            <h1 className="font-body">{name}</h1>
          </div>
          <p>{description}</p>
        </div>
        <Sidebar data={node} section={section} />
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
