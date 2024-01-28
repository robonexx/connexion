## Vite + React + TypeScript + Tailwind + React-router-dom + framer-motion + Vercel


# DC APP - EXAM

[Link to the website.](https://dev-dcapp.vercel.app)

So on the page you can sign up for now, will be removed
to try out all passwords for now is test123
name        role
rupert      admin
student1    student
teach1      teacher

so admin should be able to enter all pages

students should not be able to enter /teachers or /dashboard
teachers should not be able to enter /students or /dashboard

everyone can enter / /login /signup

authenticated user can enter /home

(thats about it for now, more to be added, pages for differetn classes, notes page, setting and profile for each user to be entered with their own content and info)

everyone should be able to add posts /posts

admin should be able to add user and update them also delete the users

Focus was on creating a prototype and to learn role based authentication
This project will continue and be released in august of 2024 as a communication app 

## Tech used in this project

-   NEXT 14
-   TAILWIND
-   TYPESCRIPT
-   MONGO DB
-   NEXT-AUTH



## What I Learned?

Started to learn auth, how to secure routes and make them role based
Next-Auth login and singup
Server actions
More Tailwind
New functions while working on this project
I done some new functions to be used in mongo db like checking year, checking passwords

I converted images to base64 saving on mongo db as a string ( which im using)
I tried out Cloudinary form image storage
Firebase and Uploathing for image storage 🥳 

Server side vs Client side pros and cons

## Purpose
Purpose is to build and communication app so that the school dont have to use fb groups and has full control over the content

## Features
Features will include, login, admin being able to add, update delete students and teachers
Post to share on different channels, 
Post crud is done, but not the channels
Notes to be kept for each user by them selfs - doing at the moment
Comment and likes on posts - not done yet

## Future features
Notifications
Direct messaging
Attendance
Better auth security and more deep dive to next auth

## Api routes vs server functions
For scalability i think api routes still servers its purpose, and having the server separete is probable a better choice
I like server actions and will definitly use them more in projects
Server functions are easier and takes less time to get going with

## DB
Firebase vs Mongodb vs Supabase
I like em all!


