const { Octokit } = require('@octokit/rest');
const core = require('@actions/core');
const fetch = require('node-fetch').default;


const octokit = new Octokit({
  request: {
    fetch: fetch
  }
});
const owner = core.getInput('owner');
const repo = core.getInput('repo');


// Realize a consulta à API
octokit.repos.get({
  owner: 'lucasdoourado',
  repo: 'cypress-automation-framework'
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error('Ocorreu um erro:', error);
});