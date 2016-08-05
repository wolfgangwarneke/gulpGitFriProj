var GitHubUserRepositories = require('./../js/githubapi.js').GitHubUserRepositoriesModule;
var GetRepos = require('./../js/githubapi.js').getRepos;
var apiKey = require('./../.env').apiKey;


$(document).ready(function() {
  $('#userReposQuery').submit(function(event) {
    event.preventDefault();
    var userNameQuery = $('#userName').val();
    var userGitHub;
    var gettingRepos = new GetRepos(userNameQuery);
    gettingRepos.done(function(repos) {
      userGitHub = new GitHubUserRepositories(userNameQuery, repos);
      var htmlOutput = "<table id='hello'><tr><th>Repo Name</th><th>Repo Description</th><th>Creation Date</th></tr>";
      userGitHub.userRepositories.forEach(function(repo) {
        htmlOutput += "<tr><td>" + repo.name + "</td><td>" + repo.description + "</td><td>" + repo.creationDate + "</td></tr>";
      });
      htmlOutput += "</table>";
      $('#repositoryInfoOutput').html(htmlOutput);
    });
  });
});
