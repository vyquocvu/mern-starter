# *Mern Stater project*

# Overview
  This project is a fullstack starter app with Nodejs, Mongoose and ReactJS  
  First page [Material Dashboard React - Free Material-UI Design Admin](https://creativetimofficial.github.io/material-dashboard-react/)  

  

# How do I install this?

  Download and extract this project and run commands below.  

// `cd mern-starter`  
// `npm install` or `yarn install`  
// `npm run server` and `npm start` (run both of 2, server and client)

# Struct

.  
├── bin  
│   └── www // Setup  
├── LICENSE.md  
├── package.json  
├── package-lock.json  
├── public // *public resources, img ...*  
│   ├── apple-icon.png  
│   ├── favicon.ico  
│   ├── index.html  
│   └── manifest.json  
├── README.md  
├── server // *Backend API server*  
│   ├── app.js // *Setup, config*  
│   ├── controllers  
│   │   └── BooksController.js  
│   ├── jobs  
│   │   └── email.js  
│   ├── libs  
│   ├── models  
│   │   └── Book.js  
│   └── routes  
│       └── api.v1.0.0  
│           ├── book.js  
│           └── index.js  
├── src // *Fontend React*  
│   ├── actions  
│   │   ├── book.js  
│   │   └── constants.js  
│   ├── assets  
│   │   ├── css  
│   │   │   └── material-dashboard-react.css  
│   │   └── img  
│   │       ├── apple-icon.png  
│   │       ├── cover.jpeg  
│   │       ├── faces  
│   │       │   └── marc.jpg  
│   │       ├── favicon.png  
│   │       ├── mask.png  
│   │       ├── new_logo.png  
│   │       ├── reactlogo.png  
│   │       ├── sidebar-1.jpg  
│   │       ├── sidebar-2.jpg  
│   │       ├── sidebar-3.jpg  
│   │       ├── sidebar-4.jpg  
│   │       └── tim_80x80.png  
│   ├── components  
│   │   ├── Book  
│   │   │   ├── Create.js  
│   │   │   ├── Edit.js  
│   │   │   ├── List.js  
│   │   │   └── Show.js  
│   │   ├── Cards  
│   │   │   ├── ChartCard.jsx  
│   │   │   ├── ProfileCard.jsx  
│   │   │   ├── RegularCard.jsx  
│   │   │   ├── StatsCard.jsx  
│   │   │   └── TasksCard.jsx  
│   │   ├── CustomButtons  
│   │   │   ├── Button.jsx  
│   │   │   └── IconButton.jsx  
│   │   ├── CustomInput  
│   │   │   └── CustomInput.jsx  
│   │   ├── Footer  
│   │   │   └── Footer.jsx  
│   │   ├── Grid  
│   │   │   └── ItemGrid.jsx  
│   │   ├── Header  
│   │   │   ├── Header.jsx  
│   │   │   └── HeaderLinks.jsx  
│   │   ├── index.js  
│   │   ├── Sidebar  
│   │   │   └── Sidebar.jsx  
│   │   ├── Snackbar  
│   │   │   ├── SnackbarContent.jsx  
│   │   │   └── Snackbar.jsx  
│   │   ├── Table  
│   │   │   └── Table.jsx  
│   │   ├── Tasks  
│   │   │   └── Tasks.jsx  
│   │   └── Typography  
│   │       ├── A.jsx  
│   │       ├── Danger.jsx  
│   │       ├── Info.jsx  
│   │       ├── Muted.jsx  
│   │       ├── P.jsx  
│   │       ├── Primary.jsx  
│   │       ├── Quote.jsx  
│   │       ├── Small.jsx  
│   │       ├── Success.jsx  
│   │       └── Warning.jsx  
│   ├── containers  
│   │   └── App  
│   │       └── App.jsx  
│   ├── helpers // *Define helper functions*  
│   │   └── axios.js  
│   ├── index.js  
│   ├── logo.svg  
│   ├── reducers  
│   │   ├── books.js  
│   │   ├── reducers.js  
│   │   └── store.js  
│   ├── registerServiceWorker.js  
│   ├── routes  
│   │   ├── app.jsx  
│   │   └── index.jsx  
│   ├── variables  
│   │   ├── charts.jsx  
│   │   ├── general.jsx  
│   │   ├── styles  
│   │   │   ├── appStyle.jsx  
│   │   │   ├── buttonStyle.jsx  
│   │   │   ├── chartCardStyle.jsx  
│   │   │   ├── customInputStyle.jsx  
│   │   │   ├── dashboardStyle.jsx  
│   │   │   ├── footerStyle.jsx  
│   │   │   ├── headerLinksStyle.jsx  
│   │   │   ├── headerStyle.jsx  
│   │   │   ├── iconButtonStyle.jsx  
│   │   │   ├── iconsStyle.jsx  
│   │   │   ├── profileCardStyle.jsx  
│   │   │   ├── regularCardStyle.jsx  
│   │   │   ├── sidebarStyle.jsx  
│   │   │   ├── snackbarContentStyle.jsx  
│   │   │   ├── statsCardStyle.jsx  
│   │   │   ├── tableStyle.jsx  
│   │   │   ├── tasksCardStyle.jsx  
│   │   │   ├── tasksStyle.jsx  
│   │   │   └── typographyStyle.jsx  
│   │   └── styles.jsx  
│   └── views  
│       ├── Books  
│       │   └── Books.jsx  
│       ├── Dashboard  
│       │   └── Dashboard.jsx  
│       ├── Icons  
│       │   └── Icons.jsx  
│       ├── Maps  
│       │   └── Maps.jsx  
│       ├── Notifications  
│       │   └── Notifications.jsx  
│       ├── TableList  
│       │   └── TableList.jsx  
│       ├── Typography  
│       │   └── Typography.jsx  
│       └── UserProfile  
│           └── UserProfile.jsx  
├── yarn-error.log  
└── yarn.lock  
