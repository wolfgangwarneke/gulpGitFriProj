var GitHubAPI = require('./../js/githubapi.js').GitHubAPIModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  console.log("document ready");
  var newGitHub = new GitHubAPI();
});
