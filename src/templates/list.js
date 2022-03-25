// import cx from 'classnames';
import { graphql } from 'gatsby';
import React, { useEffect, useState } from 'react';

import CardsContainer from '../components/layout/list-template/CardsContainer';
import Filters from '../components/layout/list-template/Filters';
import LocalSearch from '../components/layout/list-template/LocalSearch';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import NavBreadcrumb from '../components/site/NavBreadcrumb';
import SEO from '../components/site/SEO';

export default function ListTemplate({ pageContext, location }) {
  const currentUrl = location.href || 'https://example.org';
  const searchParams = new URL(currentUrl).searchParams;
  const activeCategory = searchParams.get('category');

  const { categories, section, result } = pageContext;
  const [selectedVersion, setSelectedVersion] = useState('VERSION_3_0');
  const [searchQuery, setSearchQuery] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    activeCategory && setSelectedCategory(activeCategory);
  }, []);

  useEffect(() => {
    const url = currentUrl.split('?');
    if (selectedCategory) {
      if (selectedCategory === 'all') history.replaceState(null, null, url[0]);
      else history.replaceState(null, null, '?category=' + selectedCategory.toString());
    }
  }, [selectedCategory]);

  return (
    <Layout>
      <SEO title={section.charAt(0).toUpperCase() + section.slice(1)} />
      <Section className="mb-9">
        <div className="mb-12 underline-animate underline-animate-thin">
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
