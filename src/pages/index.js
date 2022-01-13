// import cx from 'classnames';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';

import Card from '../components/layout/marketplace/HomepageCard';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import SearchMarketplace from '../components/ui/SearchMarketplace';

export default function Home({ data }) {
  const runtimeImage = getImage(data.runtimesImage);
  const palletsImage = getImage(data.palletsImage);
  const projectsImage = getImage(data.projectsImage);
  const cardContent = [
    {
      title: `Runtimes`,
      text: `See examples of the business logic enabled from combining capabilities of the pallets.`,
      link: `/runtimes`,
      image: runtimeImage,
    },
    {
      title: `Pallets`,
      text: `Browse through open source modules that give your blockchain specific capabilities.`,
      link: `/pallets`,
      image: palletsImage,
    },
    {
      title: `Projects`,
      text: `Discover what others are building, gain ideas, get inspired.`,
      link: `/projects`,
      image: projectsImage,
    },
  ];

  return (
    <Layout mode="full">
      <SEO title="Home" />
      <Section className="sm:text-center">
        <h1 className="mb-8 text-3xl sm:text-5xl md:text-6xl font-body font-extrabold">Substrate Marketplace</h1>
        <div className="sm:max-w-lg mx-auto mb-10">
          <p className="font-medium capitalize leading-8">
            Where blockchain innovators discover & share reusable pallets for use with Parity Substrate, the open-source
            Blockchain framework.
          </p>
        </div>
        <SearchMarketplace />
      </Section>
      <Section className="flex justify-center">
        <div className="flex flex-wrap justify-start xl:w-[1148px]">
          {cardContent.map(({ title, text, link, image }, index) => {
            return (
              <div key={index}>
                <Card title={title} text={text} link={link} image={image} />
              </div>
            );
          })}
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
    runtimesImage: file(name: { eq: "runtimes-home" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
    palletsImage: file(name: { eq: "pallets-home" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
    projectsImage: file(name: { eq: "projects-home" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;
