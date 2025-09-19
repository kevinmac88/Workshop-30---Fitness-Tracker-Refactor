# Fitness Intro

Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
discover new routines. Anyone can browse the site and make an account, and users with an
account will be able to upload and manage their own activities.

This information is accessible via [the Fitness Trackr API](https://fitnesstrac-kr.herokuapp.com/).

This activity will guide you through reading some code that has already been written.

> [!TIP]
>
> Remember that you can clone this repository down and run the code locally
> to help you answer the questions as you read the code!

## Navigating between different pages

The app will render different components depending on which page is active.
This logic is managed in `PageContext`.

1. When the app first loads, what page does it start on?
2. What are the four possible pages of `<App>`?
3. Notice that `<App>` is wrapped by `<Layout>` in `main.jsx`. What is the purpose of the
   `<Layout>` component?
4. How does `<Navbar>` navigate users to different pages?
5. `<Navbar>` uses the presence of a token to tell whether the user is logged in or not.\
   Where is `<Navbar>` getting the token from?
6. What does `<Navbar>` render if the user is logged in?
7. What does `<Navbar>` render if the user is _not_ logged in?

## Handle user authentication

Users can register for a new account, or log into an existing account.
This logic is managed in `AuthContext`.

8. What is the value of the `VITE_API` **environment variable**?

> [!WARNING]
>
> The `example.env` is provided as an _example_, but the file must be renamed
> to `.env` in order for the code to work.

9. What state does `AuthContext` manage? What value does it provide?
10. Which API endpoint does the `register` function make a request to?
11. What happens if the request is successful?
12. How are the `register` and `login` functions different?
13. What does it mean for a user to log out? What state is changed?

The `<Register>` and `<Login>` components use form actions to authenticate the user.

14. What page is the user redirected to after they successfully register for an account?
15. What happens if there's an error with registration?
16. How are the `<Register>` and `<Login>` components different?

## Handle API communication

The API will send back a token once the user successfully registers or logs in.
We can use this token to authenticate the user in subsequent requests.

Before answering the following questions, read through the components in `activities/`.

17. What error does `createActivity` in `api/activities.js` throw if the user is
    not logged in?
18. What error does `createActivity` throw if the activity is _not_ successfully created?
19. How does `<ActivityForm>` handle thrown errors from `createActivity`?
20. Where does `<ActivityForm>` get the token from to pass into `createActivity`?
21. What would happen if `<ActivityForm>` does _not_ call `syncActivities` after
    calling `createActivity`?
22. Why does the `activities` state need to live in `<ActivitiesPage>` instead
    of `<ActivityList>?`
