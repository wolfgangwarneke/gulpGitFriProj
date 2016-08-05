var apiKey = require('./../.env').apiKey;

function GitHubUserRepositories(userName, retrievedRepos) {
  var self = this;
  var retrievedRepositories = retrievedRepos;
  self.userName = userName;
  self.userRepositories = [];
  retrievedRepositories.forEach(function(retrievedRepo) {
    var repository = {};
    repository['name'] = retrievedRepo.name;
    repository['description'] = retrievedRepo.description;
    repository['creationDate'] = retrievedRepo.created_at;
    self.userRepositories.push(repository);
  });
}

function GetRepos(userName){
   return $.get('https://api.github.com/users/' + userName + '/repos?access_token=' + apiKey).then(function(response){
    return response;
  }).fail(function(error){
    console.log(error.responseJSON.message);
    console.log("failure");
  });
};

exports.getRepos = GetRepos;
exports.GitHubUserRepositoriesModule = GitHubUserRepositories;
