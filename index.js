const { Octokit } = require('@octokit/rest');
const core = require('@actions/core');
const fetch = require('node-fetch').default;
const hugo = core.getInput('hugo');

const octokit = new Octokit({
  request: {
    fetch: fetch
  }
});

console.log(`Hellolo ${hugo}!`);
// Realize a consulta à API
octokit.repos.get({
  owner: 'hugollemos',
  repo: 'actions'
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error('Ocorreu um erro:', error);
});