// import cx from 'classnames';
import { graphql } from 'gatsby';
import React, { useState } from 'react';

import Cards from '../components/layout/pallets-page/Cards';
import Filters from '../components/layout/pallets-page/Filters';
import LocalSearch from '../components/layout/pallets-page/LocalSearch';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import NavBreadcrumb from '../components/site/NavBreadcrumb';
import SEO from '../components/site/SEO';

export default function SingularPage({ pageContext }) {
  const { categories, allVersions, section, result } = pageContext;
  const [selectedVersion, setSelectedVersion] = useState('VERSION_3_0');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <Layout>
      <SEO title="Pallets" />
      <Section className="mb-9">
        <div className="mb-12">
          <NavBreadcrumb />
        </div>
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:mb-8">
            <h1 className="font-bold mb-0 lg:text-5xl capitalize">{section}</h1>
          </div>
          <hr className="hidden lg:block" />
        </div>
        <div className="flex items-center border-b mb-9 lg:ml-52">
          <LocalSearch searchQuer={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </Section>
      <Section>
        <div className="lg:flex">
          <Filters
            categories={categories}
            allVersions={allVersions}
            setSelectedVersion={setSelectedVersion}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="lg:flex-grow min-h-screen">
            <div className="w-1/1 grid gap-y-8 md:grid-cols-2 md:gap-x-6 2xl:grid-cols-3">
              <Cards
                data={result}
                selectedVersion={selectedVersion}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
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
