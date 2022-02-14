# ![v1-40-tall-black](https://user-images.githubusercontent.com/69861203/153937916-5bb638c2-ed79-4c14-b4b5-9e5d7b38a08c.png) Rancid Tomatillos ![v1-40-tall-black](https://user-images.githubusercontent.com/69861203/153937916-5bb638c2-ed79-4c14-b4b5-9e5d7b38a08c.png)



- Click [HERE](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html) to view the project spec
- Click [HERE](https://rancid-tomatillos-fw0sm9t03-rjur11.vercel.app/) to view the deployed site

## Table of Contents
- [Abstract](#abstract)
- [Tech Used](#tech-used)
- [Installation and Set-Up](#installation-and-set-up)
- [Features](#features)
- [See the Site in Action](#see-the-site-in-action)
- [Future Goals](#future-goals)
- [Created By](#created-by)
- [Credit](#credit)

## Abstract

*This project is definitely not Rotten Tomatoes.*

Have you been searching for a movie review website that can do it all? Look no further than Rancid Tomatillos! The homepage welcomes users to scroll through an extensive list of movies, populated thanks to a network request to a movie data API. At a glance, each movie on the homepage features that movie's poster, a tomatillo rating, and year of release. When a user clicks on a specific movie card, they are brought to a more indepth view of that movie's details. The modal that pops up provides a user with that movie's trailer (or still image if no trailer is available), the full runtime, release year, description, rating, and genre(s) of said movie. If a user knows a specific movie they want to search for, they can type their query into the search bar provided. If no movie can be found with that title, the user is kindly asked to search for another title. Thanks to React Router implementation, a user can easily navigate the site and obtain urls specific to the page they are on. 


## Tech Used

- React 
- JSX
- Cypress Testing
- React Router
- ReactPlayer, ReactModal packages
- Movie Data API used for Network Requests (https://rancid-tomatillos.herokuapp.com/api/v2)
- Project Structure Organized with [GitHub Project Board](https://github.com/rjur11/rancid-tomatillos/projects/1)

## Installation and Set-Up

To install this project, please see below:

```bash
1. Clone down this Repository using `git clone`
2. Next, `cd` into the cloned repository and `npm install` to install library dependancies
3. Finally, run `npm start` and open up localhost at the port indicated to view the webpage
```
Alternatively, you can access the deployed site [HERE](https://rancid-tomatillos-fw0sm9t03-rjur11.vercel.app/)
    
## Features

- Extensive list of movies on homepage
- "At-a-glance" view and detailed view for each movie
  - "At-a-glance" view is default on homepage (provides user with rating and release year)
  - Detailed view is accessed by clicking on a specific movie card. A modal will pop up with access to that movie's trailer (or still image), runtime, release year, description, rating, and genre(s)
- Search bar provided to narrow down full movie list
- 100% lighthouse accessbility rating
- Mobile and Computer friendly responsive design
- Deployed website


## See the Site in Action! 

Homepage View: 

<img width="1000" alt="Rancid Tomatillos Homepage" src="https://user-images.githubusercontent.com/69861203/153938125-2b24acf6-cfee-4323-b5eb-d6eaf296a227.png">

Individual Movie Details View:

<img width="1000" alt="Rancid Tomatillos Movie View" src="https://user-images.githubusercontent.com/69861203/153938253-4aa81874-d6a4-469c-955a-5496ab531387.png">

A user can select an individual movie to view more details. They can access the movie's trailer, the runtime, year of release, description, rating, and genre(s) that specific movie falls into.

![Modal view](https://media.giphy.com/media/CjccNJWzBUdDkSY9bu/giphy.gif)


If a user does not want to scroll through the full list of movies, they can use the search bar to narrow down the movie results on the page. If a movie title cannot be found, the user will see a polite message on the screen asking them to search for a different title.

![Search view](https://media.giphy.com/media/vsqsR4N2QmzvMp4e5V/giphy.gif)


Rancid Tomatillos is set up to be responsive and resizes nicely for both mobile and computer screens:

![Window resizing](https://media.giphy.com/media/5wRzJ2EKXdyuY0IXCN/giphy.gif)




## Future Goals

- Smooth animations for movies cards loading into homepage, and the loading animation as well
- Log in page for users to be able to review their own movies, or make a watch list
- Ability to import/write text reviews (or discussion page) for individual movies 

## Created By:

- [Rana Jurjus](https://github.com/rjur11)
- [Tony Carpenter](https://github.com/tonycarpenter21)

## Credit

- Loading animation inspired by: https://loading.io/css/

