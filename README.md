# Fitness Trackr

Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
discover new routines. Anyone can browse the site and make an account, and users with an
account will be able to upload and manage their own activities.

This information is accessible via [the Fitness Trackr API](https://fitnesstrac-kr.herokuapp.com/).

A [live demo of the finished project](https://fsa-fitness-trackr.netlify.app/) is available for you to reference.

## Requirements

Build components as you see fit to meet the following requirements. This will involve
writing new functions to send requests to the API and referencing the `token` from
`AuthContext` to provide different features for users who are logged in.

- A user can click on an activity in the list of activities to navigate
  to a page with more details about that activity.
- On the page with details about a single activity, a user sees the
  name, creator, and description of the activity.
- On the page with details about a single activity, a _logged-in_ user
  sees a "delete" button.
- If the user clicks the delete button for an activity,
  but they are not authorized to delete that activity,
  they will see a corresponding error message.
- If the user clicks the delete button for an activity and
  they _are_ authorized to delete that activity, that activity is deleted.
- After an activity is successfully deleted, the user is automatically
  redirected back to the list of all activities.

> [!WARNING]
>
> Please be mindful of the activities that you create and delete!
> This API is currently **not instanced by cohort** so everyone will be working
> with the _same set of data_, including past and future cohorts.
> The database is occasionally reset, but please reach out to an instructor or staff
> member if you notice an issue with this API.

## Submission

Please submit the link to your public GitHub repository.
