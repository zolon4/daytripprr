## Synopsis

Welcome to Daytripprr! We built this app to help folks plan and save daytrips they'd like to take. The functionality is basic: 

1. If you have an account, you are able to login and do a search for a destination. We'll tell you the estimated drivetime and a link to the map. If you like what you see, you're able to save the trip to your profile for a later date. If you decide you'd rather not take that trip ever, you can delete it. If you take the trip, you can go ahead and mark it as complete; it will move to your completed trips file.
2. If you haven't signed up for an account yet, you can still do a search! You'll just need to enter your origin AND destination on this search, and we'll still show you the estimated drive time and a map to accompany. 

As we grow, we plan to include additional information about your destination, including recommended activities and hotel information. We also want you to be able to follow your friends trips, because daytrips are more fun with friends :)

## Motivation

We wanted to build something easy to use to store all of our daytrip ideas in one place. Time is often a limiting factor, and rather than try to remember a passing thought weeks later when free time appears, we thought it would be better to have all of these ideas stored in one place. 

As we grow, we plan to add additional features for pre- and post-trip planning. Feel free to fork and add features if you've got a cool idea to improve. We want to help the world plan trips as easily and concisely as possible!

## User Story

* As a user, I want to login to my account and do a search without entering in my origin, because I haven't moved
* As a user, I want to update my physical location, email address, or user name as the wind blows.
* As a user, I want to save daytrips that I've searched, because they look like a lot of fun
* As a user, I want to be able to delete those trips once they start to look less fun
* As a user, I want to be able to cross trips that I've taken off my list, and save them elsewhere for posterity 
* As a user, I want to be able to see what this app does, even if I'm not logged in

## Tech Specs

We built this app using node.js, express, passport, and mongodb. We used the google distance matrix api, as well as the google maps embed api. Please see the following package.json for dependencies:

![image](/public/images/daytripprr_dependencies.png)

# ScreenShots
![image](/public/images/trips.png)


## Code Example

The heart of our app is the profile page, where users are able to save and complete trips. The code for this page is as follows:

![image](/public/images/profile_code_1.png)
![image](/public/images/profile_code_2.png)

The main functionality lives in our script.js folder, where the majority of api calls and all ajax is found:

![image](/public/images/scripts_show.png)


## Installation

Visit [daytripprr](https://daytripprr.herokuapp.com/) to use the app as it exists today! If you want to tinker with it yourself, feel free to fork and code! If you build something cool that you think should be integrated, submit a pull request and we'll take a look at what you've made. We love open source!

Make sure to run npm install before making any changes!


## Contributors
### Zolon Wilkins
Badass coding kid extrodinaire, Zolon is both brains and beauty in this operation. Responsible for much of the look, feel, and UI of the app (as well as many of the features)... we would be nowhere without zoldawg on the team. 

* Check out his [github](https://github.com/zolon4)
* And his [twitter](https://twitter.com/zolonw)

### Munish Chaturvedi
Zenmaster javascript juggernaut Munish coded, debugged, developed features, and kept the team on track and together throughout the project. We'd probably still be eating candy in an empty room without his in-depth knowlege of JS and ability to keep us on track and moving forward.

* Take a look at his github to see what else Munish has been working on: [github](https://github.com/Mooku1)

### Allie Sudholt
Chief candy-eater, shit-talker, and high-fiver, Allie did the majority of her work on api implementation and user authentication. 

* For more shit-talk: [twitter](https://twitter.com/mlleallie88)
* For more projects she's working on: [github](https://github.com/mlleallie)


### You
Hit any one of the main contributers up on twitter or email us at <daytripprrapp@gmail.com> if you've got any questions or would like to be a part of the project! We're all pretty friendly. Most of the time.

## License

MIT License

Copyright (c) [2016] [bumpsonalog]
