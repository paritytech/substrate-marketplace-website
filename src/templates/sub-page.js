// import cx from 'classnames';
import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';

import Section from '../components/layout/Section';
import CardsContainer from '../components/layout/sub-pages/CardsContainer';
import Filters from '../components/layout/sub-pages/Filters';
import LocalSearch from '../components/layout/sub-pages/LocalSearch';
import Layout from '../components/site/Layout';
import NavBreadcrumb from '../components/site/NavBreadcrumb';
import SEO from '../components/site/SEO';
import { capitalize } from '../utils/capitalize';
import { slugify } from '../utils/url';

export default function SingularPage({ pageContext }) {
  const { categories, section, result } = pageContext;
  const [selectedVersion, setSelectedVersion] = useState('VERSION_3_0');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    if (location.hash) {
      setSelectedCategory(location.hash.replace(/-/g, ' ').substring(1));
    }
  }, []);

  useEffect(() => {
    if (selectedCategory != 'all') {
      const hash = slugify(selectedCategory);
      location.hash = `#${hash}`;
    }
  }, [selectedCategory]);

  return (
    <Layout>
      <SEO title={`${capitalize(section)}`} />
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
          <LocalSearch section={section} searchQuer={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </Section>
      <Section>
        <div className="lg:flex">
          <Filters
            categories={categories}
            section={section}
            selectedVersion={selectedVersion}
            setSelectedVersion={setSelectedVersion}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="lg:flex-grow min-h-screen">
            <CardsContainer
              data={result}
              section={section}
              selectedVersion={selectedVersion}
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
            />
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
