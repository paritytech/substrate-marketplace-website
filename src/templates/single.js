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

  return (
    <Layout>
      <SEO title={name} />
      <article
        className={cx(`container flex flex-col lg:flex-row xl:px-12`, `underline-animate underline-animate-thin`)}
      >
        <div className="flex-grow w-full mt-2 mb-10 lg:mb-20 pr-4">
          <div className="mb-12">
            <NavBreadcrumb />
          </div>
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center">
              {section === 'projects' && (
                <ProjectLogo
                  projectName={name}
                  className="w-12 h-12 lg:w-[60px] lg:h-[60px] mr-5 p-0.5 object-contain rounded-full dark:bg-gray-300"
                />
              )}
              <h1 className="font-body mb-0 lg:text-5xl">{name}</h1>
            </div>
          </div>
          <p className="max-w-4xl">{description}</p>
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
