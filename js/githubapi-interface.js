var GitHubUserRepositories = require('./../js/githubapi.js').GitHubUserRepositoriesModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#userReposQuery').submit(function(event) {
    event.preventDefault();
    var userNameQuery = $('#userName').val();
    var newUserRepositories = new GitHubUserRepositories(userNameQuery);
    console.log(newUserRepositories);
    var htmlOutput = "<table><tr><td>Repo Name</td><td>Repo Description</td></tr>";
    htmlOutput += "</table>";
    console.log(htmlOutput);
    $('#repositoryInfoOutput').html(htmlOutput);
  });
});
