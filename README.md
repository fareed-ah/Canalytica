# Canalytica

Canalytica is a platform focused on social media analysis. It allows you to monitor your social media account view what posts/commments are saying about you or your company.

# Installation
1) Download/clone the project from the git repo
2) Navigate to client folder and run the following command
```bash
npm i
```
3) Run the same command in the server folder

# Run the Project
1) In the client folder run the following command
```bash
npm start
```
You should see the homepagee open at http://localhost:3000/

2)In the server folder run the following commend
```bash
nodemon index.js
```

# Languages

The platform is built using React as the front end framework. The React application communicates with a Node application that is built using Express. The node server executes the client request in a python script that performs sentinement analysis using NLTK. 

# Future Updates

- Improve state management in React
- Call the API to get data and populate the dashboard
- Set up react page routing
