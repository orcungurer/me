// projects
import tunetown from "../assets/tunetown.png";
import eventzone from "../assets/eventzone.png";
import trendyol from "../assets/trendyol.png";
import kindi from "../assets/kindi.png";
import HtmlIcon from "./Icons/HtmlIcon";
import CssIcon from "./Icons/CssIcon";
import JavascriptIcon from "./Icons/JavascriptIcon";
import BootstrapIcon from "./Icons/BootstrapIcon";
import JqueryIcon from "./Icons/JqueryIcon";
import ScssIcon from "./Icons/ScssIcon";
import ReactIcon from "./Icons/ReactIcon";
import ReactRouterIcon from "./Icons/ReactRouterIcon";
import FirebaseIcon from "./Icons/FirebaseIcon";
import ReduxIcon from "./Icons/ReduxIcon";
import NextIcon from "./Icons/NextIcon";
import GitIcon from "./Icons/GitIcon";
import MongoDBIcon from "./Icons/MongoDBIcon";
import JestIcon from "./Icons/JestIcon";
// about
import CompanyIcon from "./Icons/CompanyIcon";
import EducationIcon from "./Icons/EducationIcon";
// socials
import LinkedInIcon from "./Icons/LinkedInIcon";
import GithubIcon from "./Icons/GithubIcon";
import EmailIcon from "./Icons/EmailIcon";
import TypescriptIcon from "./Icons/TypescriptIcon";

// ------------------------------------------------------------------------
// README
// 1: MainNavigation.js : navigationLinks -> home, projects, about, contact
// 2: TechStack.js      : teckStack -> technologies
// 3: Projects.js       : projects  -> tunetown, eventzone, trendyol, kindi
// 4: About.js          : about     -> job experience, education history
// 5: Footer.js         : socials   -> linkedin, github, email
// ------------------------------------------------------------------------

export const navigationLinks = [
  {
    to: "home",
    title: "Home",
  },
  {
    to: "projects",
    title: "Projects",
  },
  {
    to: "about",
    title: "About",
  },
  {
    to: "contact",
    title: "Contact",
  },
];

export const techStack = [
  {
    id: "html",
    icon: <HtmlIcon />,
  },
  {
    id: "css",
    icon: <CssIcon />,
  },
  {
    id: "javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: "bootstrap",
    icon: <BootstrapIcon />,
  },
  {
    id: "scss",
    icon: <ScssIcon />,
  },
  {
    id: "react",
    icon: <ReactIcon />,
  },
  {
    id: "redux",
    icon: <ReduxIcon />,
  },
  {
    id: "reactrouter",
    icon: <ReactRouterIcon />,
  },
  {
    id: "next",
    icon: <NextIcon />,
  },
  {
    id: "typescript",
    icon: <TypescriptIcon />,
  },
  {
    id: "jest",
    icon: <JestIcon />,
  },
  {
    id: "git",
    icon: <GitIcon />,
  },
  {
    id: "mongodb",
    icon: <MongoDBIcon />,
  },
  {
    id: "firebase",
    icon: <FirebaseIcon />,
  },
];

export const projects = [
  {
    id: 4,
    title: "Tune Town",
    image: tunetown,
    description:
      "Tune Town is a unique music app built with React and Redux Toolkit. With its modern and user-friendly interface, it enables users to easily filter, select, and order their favorite music albums.",
    // that allows users to easily filter, select, and order their favorite music albums with its modern and user-friendly interface.
    techs: [
      <HtmlIcon />,
      <CssIcon />,
      <JavascriptIcon />,
      <ReactIcon />,
      <ReduxIcon />,
      <FirebaseIcon />,
    ],
    link: "https://orcungurer.github.io/tunetown/",
  },
  {
    id: 3,
    title: "EventZone",
    image: eventzone,
    description:
      "EventZone is an all-in-one event listing application that leverages the power of React Router to provide seamless event creation, preview, editing, and deletion.",
    techs: [
      <HtmlIcon />,
      <CssIcon />,
      <JavascriptIcon />,
      <ReactIcon />,
      <ReactRouterIcon />,
      <FirebaseIcon />,
    ],
    link: "https://orcungurer.github.io/eventzone/",
  },
  {
    id: 2,
    title: "Smart Locker",
    image: trendyol,
    description:
      "This Smart Locker app has been developed for Trendyol, providing a pleasant experience for customers to pick up their online purchases.",
    techs: [
      <HtmlIcon />,
      <CssIcon />,
      <JavascriptIcon />,
      <BootstrapIcon />,
      <ScssIcon />,
      <ReactIcon />,
      <ReactRouterIcon />,
    ],
  },
  {
    id: 1,
    title: "Kindi",
    image: kindi,
    description:
      "Kindi is a crypto device, which has been developed for Aselsan, and this app helps users to manage the device through the portal.",
    techs: [
      <HtmlIcon />,
      <CssIcon />,
      <JavascriptIcon />,
      <BootstrapIcon />,
      <JqueryIcon />,
    ],
  },
];

export const about = [
  {
    id: "experience",
    type: "Experience",
    icon: <CompanyIcon />,
    career: [
      {
        id: 2,
        company: "Rovenma",
        title: "Frontend Engineer",
        startDate: "May 2019",
        endDate: "Jan 2023",
      },
      {
        id: 1,
        company: "Comodo",
        title: "DevOps Engineer",
        startDate: "Mar 2018",
        endDate: "Feb 2019",
      },
    ],
  },
  {
    id: "education",
    type: "Education",
    icon: <EducationIcon />,
    career: [
      {
        id: 1,
        company: "Atilim University",
        title: "Software Engineering",
        startDate: "Sep 2012",
        endDate: "Jun 2017",
      },
    ],
  },
];

export const socials = [
  {
    id: 1,
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/orcungurer/",
  },
  {
    id: 2,
    icon: <GithubIcon />,
    link: "https://github.com/orcungurer/",
  },
  {
    id: 3,
    icon: <EmailIcon />,
    link: "mailto:orcungurer@gmail.com",
  },
];
