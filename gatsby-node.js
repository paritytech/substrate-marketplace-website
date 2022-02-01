const { createProjectPages } = require('./gatsby-node/create-project-pages.js');
const { createRuntimePages } = require('./gatsby-node/create-runtime-pages.js');
const { createPalletPages } = require('./gatsby-node/create-pallet-pages.js');

exports.createPages = async props => {
  await Promise.all([createProjectPages(props), createRuntimePages(props), createPalletPages(props)]);
};

const { addLangFieldToMarkdown, addSlugFieldToMarkdown } = require('./gatsby-node/on-create-node.js');

exports.onCreateNode = props => {
  const { node } = props;
  if (node.internal.type === `MarkdownRemark`) {
    addLangFieldToMarkdown(props);
    addSlugFieldToMarkdown(props);
  }
};
