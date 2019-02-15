# 🤘 Check a demo out at [searchule.com](https://searchule.herokuapp.com/)

This app allows you to mitigate the stresses of a career search
By allowing users to add potential jobs to their dashboard and create an event based on that job. Events can include anything from calling a potential employer to what day their interview is at.
The user can also add comments to each job for anything such as addresses, phone numbers, and names.

## `How to Get started`

- First clone both the [server](https://github.com/etg624/job-search-server) and [client](https://github.com/etg624/job-search-app) repos.

- For the server make sure you have a local mongodb server running. Also, make sure you `npm install` after cding into the project directory. Run `node server.js` or just `nodemon` (if you have nodemon installed) and that will start the back end.

- For the client side make sure you cd into the project directory and `npm install`. After waiting for the project to install run `npm start` and `http://localhost:3000` should open with the app in your browser and voilà 💃 🕺

### `Tech Stack`

**Front End**

- React
- Redux
- Redux-Form
- Redux-Thunk
- React-Big-Calendar
- momentJs
- React-Router-DOM

**Back End**

- Express
- Mongodb & Mongoose
- Passport
- Bcryptjs

- The main server app can be found at `/server`
- All models can be found at `/models/<model-name>`
- All routes can be found at `/routes/<route-name>`
- The github repo for all the backend code can be found [here](https://github.com/etg624/job-search-server)

#### `<App />` located @ `/src/App`

**The `<App />` component is the main component.**

- It houses all of the `<Route />` components that each point to their own component and path.
- It also checks for `JWT` auth.

**Components Used**

- `<Header />` located @ `/src/components/header`
- `<LandingPage />` located @ `/src/components/landing-page`
- `<JobList />` located @ `/src/components/jobList`
- `<RegistrationPage />` located @ `/src/components/auth/registration-page`
- `<AddJob />` located @ `/src/components/addJob`
- `<ScheduleCalendar />` located @ `/src/components/scheduleCalendar`
- `<EditForm />` located @ `/src/components/editForm`
- `<AddEventForm />` located @ `/src/components/addEventForm`

### Landing Page

**Components used**

- `<PreLoginHeader />` located @ `/src/components/auth/preLoginHeader`
- `<LoginForm />` located @ `/src/components/auth/login-form`

Here you will see quick description of what the app is about.
There is also the `<Login />` from component. At the top of the page is header that allows the user to navigate between the sign up page and back to the landing page.

<img src ="./src/screenshots/login.png" width="400" height="400">

### Register Page

**Components used**

- `<PreLoginHeader />` located @ `/src/components/auth/preLoginHeader`
- `<RegistrationForm />` located @ `/src/components/auth/registration-form`

On the register page the user will be given shown the `<RegistrationForm />` component. The user will be able to fill out the form to register them for access to the main app.

<img src ="./src/screenshots/register.png" width="400" height="400">

### Welcome Page

**Components Used**

- `<AddJob />` located @ `/src/components/addJob`

If the user does not have any jobs added to their list, they will be greeted with a welcome message and a form to add a job.

<img src ="./src/screenshots/landing.png" width="400" height="400">

### Job List Page

**Components Used**

- `<JobCard />` located @ `/src/components/jobCard`

Once the user has added a job, a list of job cards will populate the page. The cards provide data from the form that they completed to add the job. The user can also write a comment about the job and create events regarding a particular job

<img src ="./src/screenshots/jobCards.png" width="500" height="400">

### Comment Added to Job

<img src ="./src/screenshots/comment.png" width="400" height="400">

### Create an Event Page

**Components Used**

- `<AddEventForm />` located @ `/src/components/addEventForm`

Here the user will be required to add a title, a stat date, and an end date for an event

<img src ="./src/screenshots/schedule.png" width="400" height="400">

### Calendar Page Showing all Events

**Components Used**

- `<ScheduleCalendar />` located @ `/src/components/scheduleCalendar`

This page shows a calendar representation of all the events from every job. This will help the user see an overview of all their upcoming events for their jobs.

<img src ="./src/screenshots/calendar.png" width="400" height="400">

### Agenda Page

<img src ="./src/screenshots/agenda.png" width="400" height="400">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
