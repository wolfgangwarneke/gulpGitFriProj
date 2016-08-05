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
      console.log("fun");
      userGitHub = new GitHubUserRepositories(userNameQuery, repos);
      var htmlOutput = "<table><tr><td>Repo Name</td><td>Repo Description</td><td>Creation Date</td></tr>";
      userGitHub.userRepositories.forEach(function(repo) {
        htmlOutput += "<tr><td>" + repo.name + "</td><td>" + repo.description + "</td><td>" + repo.creationDate + "</td></tr>";
      });
      htmlOutput += "</table>";
      $('#repositoryInfoOutput').html(htmlOutput);
    });
  });
});
