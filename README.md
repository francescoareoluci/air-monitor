
# Air Monitor

## Project Overviewe

- **Academic Year**: 2019-2020
- **Project Title**: Serverless Cloud Based Air Quality Monitoring Web Application
- **Student**: Francesco Areoluci
- **CFUs**: 9

In this project I will implement a cloud based web application to show air monitoring data coming from an air quality sensor. The project idea has come up after a proposal submitted by Walter Nunziati (Magenta srl) to show the potential of a web development process in which the role of the server, and all the effort that will be spent on that side, is completely replaced by all the funcionalities that a Cloud host can offer. Serveless web development has recently growing its popularity and it has been formalized as JAM (Javscript, APIs, Markup) stack [1]. The application will be developed to use data coming from an air quality sensor (provided by Magenta) to show the user a complete overview of air quality index (such as co2, no3, pm2.5, pm10, etc.) in the surroundings of the sensor (Novoli, Florence).

## Tools and Techniques

The main tools and techniques that will be used are the following:
- **SensorWebHub**: the platform used by the sensor to collect data \[2\]. 
- **Microsoft Azure**: Cloud host providing all the functionalities of storing and accessing sensor data in a NoSQL database \[3\].
- **React**: a framework for the development of the front-end side \[4\].
- **React Redux**: React library for application state management \[5\].
- **Figma**: interface design tool to mockup the web interface \[6\].

## Expected Outcomes

The followings are the expected outcomes of this project:
- Time triggered function to grab data from sensor and store them in a NoSQL DB (Azure Storage Tables). This function will be developed and deployed on Cloud as an Azure Function component (Python). 
- HTTP REST triggered function to grant the front-end side application access data in the NoSQL DB. This function will be developed and deployed on Cloud as an Azure Function component (Python).
- Responsive Front-end application, using React Redux framework, which will consume samples stored on Cloud to let users view and analyze air quality indexes collected in a requested amount of time. The application will be accessible via Desktop and mobile.

## Summary

The purpose of this project is to explore a new development process for building serverless web application which involve the use of Cloud functionalities. This approach can result in a speedup in terms of developing time and a lower mantainance cost. If successful, this prototype can be a first step in the study of demanding and complex serverless web application development. Moreover, the developed web application can be further improved to extend its functionalities to more devices and users.

## Project Outcome

The serverless web app has been deployed through Github Pages and is reachable at the following address: https://francescoareoluci.github.io/air-monitor
The application interact with Azure deployed functions that are also been pushed to this repository: https://github.com/francescoareoluci/air-monitor-cloud

## Bibliography

\[1\] https://jamstack.org/

\[2\] http://www.sensorwebhub.org/

\[3\] https://azure.microsoft.com/

\[4\] https://it.reactjs.org/

\[5\] https://react-redux.js.org/

\[6\] https://www.figma.com/
