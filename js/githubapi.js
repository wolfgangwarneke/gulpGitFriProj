var apiKey = require('./../.env').apiKey;

function GitHubUserRepositories(userName) {
  var retrievedRepositories = this.getRepos(userName);
}

GitHubUserRepositories.prototype.getRepos = function(userName){
  $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    return response;
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.GitHubUserRepositoriesModule = GitHubUserRepositories;
