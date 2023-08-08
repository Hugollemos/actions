const { Octokit } = require('@octokit/rest');
const core = require('@actions/core');
const fetch = require('node-fetch').default;


const octokit = new Octokit({
  request: {
    fetch: fetch
  }
});
const hugo = core.getInput('hugo');
console.log(` ${hugo}!`);
// Realize a consulta à API
octokit.repos.get({
  owner: 'hugollemos',
  repo: 'actions'
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error('Ocorreu um erro:', error);
});