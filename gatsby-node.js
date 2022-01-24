const { createProjectPages } = require('./gatsby-node/create-pages.js');

exports.createPages = async props => {
  await Promise.all([createProjectPages(props)]);
};

const { addLangFieldToMarkdown, addSlugFieldToMarkdown } = require('./gatsby-node/on-create-node.js');

exports.onCreateNode = props => {
  const { node } = props;
  if (node.internal.type === `MarkdownRemark`) {
    addLangFieldToMarkdown(props);
    addSlugFieldToMarkdown(props);
  }
};
