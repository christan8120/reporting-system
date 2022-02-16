# Project description

This project contains all services that are needed for the frontend. Each service has its own functionality, so make sure do not mix all of the complex logic into a single service.

# Project structure

|-- Application Name 
&emsp;|-- Service 1
&emsp;&emsp;|-- app.js  
&emsp;|-- Service 2
&emsp;&emsp;|-- app.js   
&emsp;etc..  

## Script to prepare the project

Before you run the service, you need to run the following scripts:

### In the service folder that you are want to run (./Application/Service 1)

Open terminal and run scripts:  
1 npm install 
2 nodemon app.js

### If you are having problem while running the nodemon script (OPTIONAL)

run the following script: 
1 npm install nodemon -g
2 nodemon app.js

### A little information about the service architecture

Due to the application that we are building is look so light, or it does not have to do a large process for its functionality, so we will not use the event driven architecture instead will use the simple synchronous API call in this project. 