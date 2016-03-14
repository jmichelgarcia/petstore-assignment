Assignment
==========
Intro
-----
The Scrum team went through one week of development (of a two weeks sprint), and delivered this petstore project to CVS. Your role as a QA automation engineer, is to create the UI testing based on the user stories by using **Robot** and **Selenium**.
In accordance to the NFR in our definition of done, you're also encouraged to verify and assess the performance of the application by using a tool like **JMeter** or any other tool of preference.
You will find below the users stories and DoD that might guide you on your journey. Be sure to test all of the user stories, but your tests may not all pass.

The product owner is going to use your automated tests to validate the work the team has done.

User stories and definition of Done
-----------------------------------
[User stories and DoD](./assignment/USER-STORIES.md)

How to run the application
==========================
Prerequisites to install
------------------------
*The team tested the app on MacOSX & Windows 7, it should work on Linux and win7 as well*
- Version 4.3.1 of Node.js.

Download app dependencies
-------------------------
*Depending on your system, you might need to execute npm with admin rights.*

- Navigate to project root folder and type `npm install`. 
- Navigate to project root folder and type `bower install`.

Build the app
-------------
- Navigate to project root and type `grunt dist`.

Run the app
-----------
- Navigate to project root folder and type
`./node_modules/json-server/bin/index.js --watch src/server/db.json --routes src/server/routes.json --static src/client`.

Accessing the app
-----------------
[Petstore web app](http://localhost:3000)

Useful 
------------
- [Node.js website](https://nodejs.org/en/download/)
- [Python](https://www.python.org/downloads/)
- [Robot](http://robotframework.org/)
- [Selenium](http://www.seleniumhq.org/)
- [Eclipse](https://eclipse.org/downloads/)
- [Robot - Eclipse IDE](https://github.com/NitorCreations/RobotFramework-EclipseIDE)
- [JMeter](http://jmeter.apache.org/)