const WEBSITE_URL = process.env.GATSBY_WEBSITE_URL;
const DOCS_URL = process.env.GATSBY_DOCS_URL;
const MARKETPLACE_URL = process.env.GATSBY_MARKETPLACE_URL;

/* the main menu, ids of items must match
   the submenu's key of this js object */
const main = [
  {
    url: WEBSITE_URL + '/technology',
    id: 'technology',
  },
  {
    url: WEBSITE_URL + '/developers',
    id: 'developers',
  },
  {
    url: WEBSITE_URL + '/vision',
    id: 'vision',
  },
  {
    url: WEBSITE_URL + '/ecosystem',
    id: 'ecosystem',
  },
];

/* sub menus, matching the main menu items' "id" */
const technology = [
  {
    url: WEBSITE_URL,
    id: 'technology.overview',
  },
  {
    url: WEBSITE_URL + '/flexible',
    id: 'technology.flexible',
  },
  {
    url: WEBSITE_URL + '/open',
    id: 'technology.open',
  },
  {
    url: WEBSITE_URL + '/interoperable',
    id: 'technology.interoperable',
  },
  {
    url: WEBSITE_URL + '/future-proof',
    id: 'technology.future-proof',
  },
];

const developers = [
  {
    url: DOCS_URL,
    id: 'developers.home',
  },
  {
    url: DOCS_URL + '/v3/getting-started/overview/',
    id: 'developers.docs',
  },
  {
    url: DOCS_URL + '/how-to-guides/v3/',
    id: 'developers.how-to-guides',
  },
  {
    url: DOCS_URL + '/tutorials/v3/',
    id: 'developers.tutorials',
  },
  {
    url: MARKETPLACE_URL,
    id: 'developers.marketplace',
  },
  {
    url: DOCS_URL + '/rustdocs/',
    id: 'developers.rustdocs',
  },
  {
    url: DOCS_URL + '/playground/',
    id: 'developers.playground',
  },
];

const vision = [
  {
    url: WEBSITE_URL + '/substrate-and-polkadot',
    id: 'vision.substrate-and-polkadot',
  },
];

const ecosystem = [
  {
    url: WEBSITE_URL + '/ecosystem',
    id: 'ecosystem.home',
  },
  {
    url: WEBSITE_URL + '/projects',
    id: 'ecosystem.projects',
  },
  {
    url: WEBSITE_URL + '/substrate-builders-program',
    id: 'ecosystem.substrate-builders-program',
  },
  {
    url: WEBSITE_URL + '/opportunities',
    id: 'ecosystem.opportunities',
    child: 'opportunities',
  },
  {
    url: WEBSITE_URL + '/resources',
    id: 'ecosystem.resources',
    child: 'resources',
  },
  {
    url: WEBSITE_URL + '/connect',
    id: 'ecosystem.connect',
    child: 'connect',
  },
];

/* child menus for sub menus, matching the parent menu items with "child: id" */

const opportunities = [
  {
    url: WEBSITE_URL + '/hackathons',
    id: 'ecosystem.opportunities.hackathons',
  },
  {
    url: WEBSITE_URL + '/grants',
    id: 'ecosystem.opportunities.grants',
  },
  {
    url: WEBSITE_URL + '/jobs',
    id: 'ecosystem.opportunities.jobs',
  },
];

const resources = [
  {
    url: WEBSITE_URL + '/seminar',
    id: 'ecosystem.resources.seminar',
  },
  {
    url: WEBSITE_URL + '/awesome-substrate',
    id: 'ecosystem.resources.awesome-substrate',
  },
];

const connect = [
  {
    url: WEBSITE_URL + '/contact',
    id: 'ecosystem.resources.contact',
  },
  {
    url: WEBSITE_URL + 'https://www.parity.io/events/',
    id: 'ecosystem.resources.events',
  },
  {
    url: WEBSITE_URL + '/newsletter',
    id: 'ecosystem.resources.newsletter',
  },
  {
    url: 'https://www.parity.io/blog/tag/parity-substrate/',
    id: 'ecosystem.resources.blog',
  },
];

const legal = [
  {
    url: WEBSITE_URL + 'https://www.parity.io/privacy/',
    id: 'legal.privacy',
  },
  {
    url: 'https://www.parity.io/terms/',
    id: 'legal.terms',
  },
];

const extra = [
  {
    url: WEBSITE_URL + '/substrate-connect',
    id: 'extra.substrate-connect',
  },
];

module.exports = {
  main,
  technology,
  developers,
  vision,
  ecosystem,
  opportunities,
  resources,
  connect,
  extra,
  legal,
};
