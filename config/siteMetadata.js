const menus = require('./menus.js');
const { WEBSITE_URL, DOCS_URL, MARKETPLACE_URL, CAREERS_URL } = require('./webConsts.js');

module.exports = {
  menus,
  title: `Substrate_ Marketplace`,
  title_meta: `Discover & share reusable pallets for use with Substrate.`,
  description: `Browse through open source modules that give your blockchain specific capabilities & examples of the ecosystem projects enabled from combining the pallets.`,
  image_og: `${MARKETPLACE_URL}/img/substrate_og.png`,
  siteUrl: MARKETPLACE_URL,
  websiteUrl: WEBSITE_URL,
  docsUrl: DOCS_URL,
  marketplaceUrl: MARKETPLACE_URL,
  careersUrl: CAREERS_URL,
  author: 'Parity WebDev/W3F WebOps',
  pressEmail: 'press@parity.io',
  email: 'info@parity.io',
  twitter: 'https://twitter.com/substrate_io',
  linkedIn: 'https://www.linkedin.com/company/paritytech',
  element: 'https://matrix.to/#/#substrate-technical:matrix.org',
  github: 'https://github.com/paritytech/',
  telegram: 'https://t.me/parity_technologies',
  gitter: 'https://gitter.im/paritytech/parity',
  stackoverflow: 'https://stackoverflow.com/questions/tagged/substrate',
  stackexchange: 'https://substrate.stackexchange.com/',
};
