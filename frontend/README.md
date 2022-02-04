# Project description

This project structure is designed to create a new project everytime we want to create a new page. The components in root path is designed to set up the master page of the main project.

# Project structure

|-- Application  
&emsp;|-- library  
&emsp;|-- src  
&emsp;&emsp;|-- components  
&emsp;&emsp;&emsp;|-- ... (reuseable file for all project)  
&emsp;&emsp;index.js  
&emsp;|-- workspace  
&emsp;&emsp;|-- Project 1  
&emsp;&emsp;|-- Project 2  
&emsp;package.json  
&emsp;etc..  

## Script to prepare the project

Before you start the project, you need to run the following scripts:

### In root of project (./Application)

Open terminal and run scripts:
1 npm install
2 npm update && npm run build

NOTE: npm run build is used to build the component in the root of project, so it can be used in all project inside it.

### Inside of the project folder (./Application/workspace/Project 1)

Open terminal and run scripts:
1 npm install --no-optional

## Script to run the project

After all the dependencies has been installed, it's time to run the application

### Inside of the project folder that you want to run (./Application/workspace/Project 1)

Open terminal and run scripts:
1 npm start