var GitHubUserRepositories = require('./../js/githubapi.js').GitHubUserRepositoriesModule;
var GetRepos = require('./../js/githubapi.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#userReposQuery').submit(function(event) {
    event.preventDefault();
    var userNameQuery = $('#userName').val();
    var userRepos;
    var gettingRepos = new GetRepos(userNameQuery);
    gettingRepos.done(function(repos) {
      console.log("fun");
      userRepos = new GitHubUserRepositories(userNameQuery, repos);
    });
    var htmlOutput = "<table><tr><td>Repo Name</td><td>Repo Description</td></tr>";
    htmlOutput += "</table>";
    $('#repositoryInfoOutput').html(htmlOutput);
  });
});
