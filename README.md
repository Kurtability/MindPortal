# Mind Portal

Project requirements:
- Functional Requirements
●The user is able to create an account and sign up.
●The user is able to sign in and log in to the application.
●The user is able to answer the questionnaires, and the result of the diagnosis is
saved to the database.
●The user will be able to view their answers from the questionnaires.
●The user is able to view a dashboard that presents the outcome of the diagnosis.
●The dashboard contains resources tailored to the outcome of the diagnosis
(displayed in text format under dashboard).
●The diagnosis of the user can be downloaded as a pdf file or sent to the user’s
phone as a text message.
●The users can change their personal details.
●When the dashboard indicates the user’s current condition, it will have a navigation
button to the next page that displays the possible actions.
●The user will be able to access a COVID help page, where it will present help
suggestions from different organisations.
●The user can view active covid cases in Australia on the home page.
●The user can view current vaccination rates in Australia on the home page.
●Web scraping functions will be implemented for the covid information, such as the
covid help page, covid current vaccination rates, and current active covid cases.

- Non-Functional Requirements
●Security of the user login details/ user details
○User password will be securely encrypted (e.g. using MD5)
●The system will always be available to the user
○The website wouldn’t be prone to crashing.
○The database would always be available.
○If for distinctive reasons, the web scraping functionalities for the audios,
images, and videos needed for the program runs into an error, the system
would use the media sources manually stored in the database.
●Users will be able add extra security to login if they desire
○This will be provided by the 2FA process, where the user will receive login
authorisations using either SMS or email to successfully sign in to the system.
●The program will be responsive at all times
○The system will be utilising the AJAX library to achieve optimal
responsiveness of the website.
●The diagnosis of the user will be accurate according to the K10 questionnaire and
saved under their profile
○The diagnosis would be stored in its corresponding database schema.

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
