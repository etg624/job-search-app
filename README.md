# 🤘 Check a demo out at [searchule.com](https://searchule.herokuapp.com/)

This app allows you to mitigate the stresses of a career search
By allowing users to add potential jobs to their dashboard and create an event based on that job. Events can include anything from calling a potential employer to what day their interview is at.
The user can also add comments to each job for anything such as addresses, phone numbers, and names.

### `Tech Stack`

**Front End**

- React
- Redux

- React-Big-Calendar

**Back End**

- Express
- Mongodb & Mongoose
- Passport
- Bcryptjs

## `<App />`

located @ `/src/App`

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

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
