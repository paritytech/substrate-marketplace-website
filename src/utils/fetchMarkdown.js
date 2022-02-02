const fetch = require('node-fetch');
var TurndownService = require('turndown');

async function fetchMarkdown(link) {
  if (link && link.includes('crates.io')) {
    const response = await fetch(link);
    const html = await response.text().then(html => html);
    var turndownService = new TurndownService();
    var markdown = turndownService.turndown(html);
    return markdown;
  }
}

module.exports = {
  fetchMarkdown,
};
