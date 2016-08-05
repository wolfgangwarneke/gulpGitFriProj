# GitHub User Repositories Lookup

#### Keep track of *repositories* by searching by *user name*, August 5th, 2016_

#### By Wolfgang Warneke

## Description

If one would wish to peruse the names and descriptions all the repositories of their most favorite GitHub users, one would be most pleased to know that they have come to the right spot. Intriguing? This local browser app, upon boot and opening, provides this very opportunity so desired.  After providing a validation key, a user will be able to search for GitHub repositories to their heart's content.  (Unless that heart is of such heft and their querying submissions are of such rapid succession that a request limit would be reached.)

## Specifications
| Behavior        | Input           | Outcome  |
| ------------- |:-------------:| -----:|
| Returns repository names, descriptions, and repository creation dates upon query submission of a GitHub user name | "wolfgangwarneke" | Page displays a series of repository names, descriptions, and creation dates.  The names are often somewhat confusing and descriptions often missing.  When present, descriptions are meaningless and silly.  The author admits that this trend should be rectified. |



## Setup/Installation Requirements

* Clone reposition
* Install Gulp and Bower in the top level of the repository directory
* Create file called `.env` containing this line of code `exports.apiKey = "your api access token here"` with your own access token code;
* Run `gulp build` and `gulp serve`
* Enter desired usernames to search and peruse away

## Known Bugs

_Unknown..._

## Support and contact details

_Twitter: @wolfgangwarneke_

## Technologies Used

_This project uses jQuery, Javascript, NPM, Gulp, and Bower, including numerous dependencies_

### License

Copyright (c) 2016 **Wolfgang Warneke**
