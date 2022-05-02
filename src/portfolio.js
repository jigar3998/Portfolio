import se from "./asserts/search-engine.jpeg";
import ReactJS from "./asserts/ReactJS.png";
import NodeJS from "./asserts/NodeJS.png";
import Elastic from "./asserts/elastic.png";
import MongoDB from "./asserts/MongoDB.png";
import PostgreSQL from "./asserts/PostgreSQL.png";
import JWT from "./asserts/JWT.png";
import Express from "./asserts/Express.png";
import ReactNative from "./asserts/react-native.jpg";
import Expo from "./asserts/expo.png";
import covid from "./asserts/covid.jpg";
import blockchain from "./asserts/blockchain.jpg";
import asc from "./asserts/asc.png";
import am from "./asserts/appoint-meet.png";
import ps from "./asserts/park-spot.png";
import sma from "./asserts/sma.png";
import java from "./asserts/java.png";
import as from "./asserts/as.jpg";
import mysql from "./asserts/mysql.png";
import php from "./asserts/php.png";


export const HeaderSection = {
  title: "I'm Jigar Mehta",
  description: " A Software Engineer working with",
  skills: ["Javascript", 1000, "NodeJS", 1000, "ReactJS", 1000],
};
export const skillsSection = {
  title: "Tools and Technologies",
  skills: [
    "⚡ Web Applications with MERN Stack",
    "⚡ Develop highly interactive Front end / User Interfaces for web and mobile applications",
    "⚡ Progressive Web Applications ( PWA )",
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "AiFillHtml5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const ExpereinceEducation = {
  title: "Experience and Education",
  content: [
    {
      date: "September 2021 - Present",
      place: "University of Windsor",
      city: "Windsor, Ontario",
      details: "Pursuing Master's of Applied Computing Degree",
      icon: "education",
    },
    {
      date: "December 2020 - April 2021",
      place: "TandM TechLabs Pvt. Ltd.",
      city: "Hyderabad, India",
      details: "Worked as a Software Intern to build Supply Chain",
      icon: "work",
    },
    {
      date: "May 2020 - July 2020",
      place: "Ways Software",
      city: "Rajkot, India",
      details: "Worked as a Full Stack Developer to build a Web Application",
      icon: "work",
    },
    {
      date: "May 2019 - July 2019",
      place: "Sannibh Infotech",
      city: "Vadodara, India",
      details: "Worked as a Mobile Application Developer to build Cross-Platform Mobile Application",
      icon: "work",
    },
    {
      date: "June 2017 - June 2021",
      place: "Charusat University",
      city: "Anand, India",
      details: "Bachelor of Technology in Computer Science and Engineering",
      icon: "education",
    },
  ],
};

export const Projects = [
  {
    imageUrl: se,
    imageAlt: "Search Engine",
    title: "Swift Search",
    shortdescription:
      "A Search Engine created for Organizations to search their classified data quickly and efficiently.",
    longDescription:
      "To search classified data in an efficient and streamlined manner, the organization will require a Search Engine that can be integrated into their websites and search through their data. To increase the productivity of searching the content with a modern, flexible site search experience, we are proposing a Search Engine that can help the Organization to search efficiently.",
    technology: [
      { tech: "ReactJS", image: ReactJS },
      { tech: "Elastic Search", image: Elastic },
    ],
  },
  {
    imageUrl: covid,
    imageAlt: "VacFace",
    title: "VacFace",
    shortdescription:
      "A cross-platform mobile application for verifying Covid-19 Vaccine doses taken by face recognition.",
    longDescription:
      "An application to detect number of Covid vaccines taken by individuals by scanning faces of people to reduce verification time of vaccination status",
    technology: [
      { tech: "React Native", image: ReactNative },
      { tech: "NodeJS", image: NodeJS },
      { tech: "MongoDB", image: MongoDB },
      { tech: "Expo", image: Expo },
      { tech: "JWT", image: JWT },
      { tech: "Express", image: Express },
    ],
  },
  {
    imageUrl: asc,
    imageAlt: "Agriculture Supply Chain",
    title: "Agriculture Supply Chain",
    shortdescription:
      "Built a Decentralized Blockchain platform for dealing with Agriculture Supply Chain transactions.",
    longDescription:
      " A decentralized blockchain platform built for dealing with agriculture supply chain transactions leading to an open and traceable end-to-end system allowing customers to trace origin of product.",
    technology: [
      { tech: "ReactJS", image: ReactJS },
      { tech: "Blockchain Hyperledger", image: blockchain },
    ],
  },
  {
    imageUrl: am,
    imageAlt: "AppointMeet",
    title: "AppointMeet",
    shortdescription:
      "An Online Appointment Booking system to schedule appointments for organizations and individuals.",
    longDescription:
      "An online appointment booking Web Application to supervise all appointment scheduling processes for organizations and individuals to decrease appointment booking time to a great extent.",
    technology: [
      { tech: "ReactJS", image: ReactJS },
      { tech: "NodeJS", image: NodeJS },
      { tech: "Express", image: Express },
      { tech: "JWT", image: JWT },
      { tech: "PostgreSQL", image: PostgreSQL },

    ],
  },
  {
    imageUrl: ps,
    imageAlt: "ParkSpot",
    title: "ParkSpot",
    shortdescription:
      "A cross-platform mobile application that helps in finding empty parking spot around individual, to reduce parking time.",
    longDescription:
      "Park Spot is a cross-platform mobile application to find the empty parking lot around you using the inbuilt map functionality and automate and the parking entry and exit process using QR code. The drivers can easily scan the QR code to get the parking spot. The app is user friendly. The app takes the time of entry when a spot is provided and the time of exit when the spot is left. This application also collects all the entry and exit data of each vehicle and analyzes it for the best business decisions. In this project, there is also an automated billing system that produces the bill with respect to the time the vehicle spends in the parking lot.",
    technology: [
      { tech: "React Native", image: ReactNative },
      { tech: "NodeJS", image: NodeJS },
      { tech: "Express", image: Express },
      { tech: "JWT", image: JWT },
      { tech: "PostgreSQL", image: PostgreSQL },

    ],
  },
  {
    imageUrl: sma,
    imageAlt: "School Management App",
    title: "School Management App",
    shortdescription:
      "An Android Mobile Application that helps faculties to automate regular administrative tasks to student performance monitoring.",
    longDescription:
      "School Management application is an Android application which was recommended by students, parents and teachers to develop it for sharing information about daily progress of student. It has personal a unique account for each student. The aim of the project was to make teachers and students life more easy.",
    technology: [
      { tech: "Java", image: java },
      { tech: "Android Studio", image: as },
      { tech: "MySQL", image: mysql },
      { tech: "PHP", image: php },

    ],
  }
];
