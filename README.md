# Mind Portal

- Libraries used
Frontend

Library	Version
react	17.0.2
axios	0.21.4
react-bootstrap	1.6.3
react-dom	17.0.2
react-icons	4.3.1
react-router	5.2.1
react-router-dom	5.3.0
bootstrap	5.1.1
framer-motion	4.1.17
node-sass	6.0.1
animate.css	4.1.1
react-scripts	4.0.3
web-vitals	1.0.1
Backend

Library	Version
spring-boot	2.5.4
spring-boot-starter-parent	2.5.4
spring-cloud-gcp	2.0.4
spring-cloud	2020.0.3
frontend-maven-plugin	1.9.1
node	14.16.1
yarn	1.12.1
sendgrid-java	4.0.1
spring-security-crypto	5.5.2
passay	1.0
jjwt	0.9.1
- Working functionalities
Users able to register a new account
Users able to log in with an existing account
Users are able to answer the questionnaires and the result is saved to the database
Users are able to answer the questionnaires and the final results can be sent to their email
Users are able to view a results page that presents the outcome of the diagnosis.
Users can view current COVID-19 alerts on the dashboard home page.
The dashboard contains default mindfulness recommendations for registered users.
Users can change their personal details
Users can modify their passwords.
Users can undertake a smile challenge that will analyze their smile and return a result.
- Getting started guide
Setup

Clone the repo or download the zip
Import into your favourite IDE. IntelliJ = New project from existing sources.
Building the application JAR (frontend + backend combined)

GUI method

Click 'Maven' on the right-hand side of IntelliJ
open up lifecycle and run clean, then run install.
the jar file will be in the target folder.
run the jar java -jar MindPortal-0.0.1-SNAPSHOT.jar
open up the app at port 8080 and it will be the frontend + backend running together.
Command line

mvn clean
mvn install
Running separately for Development purposes

Running backend

Run MindPortalApplication location in MindPoratl33/src/main/java/sydney.uni.edu.au.elec5619.MindPortal/
Running frontend

Make sure the backend is already running.
Open just the frontend folder by itself in a separate IDE or in the terminal.
Make sure you are in the root of the frontend folder and run npm install npm install
Start the frontend for dev (this will run on port 3000) npm start
