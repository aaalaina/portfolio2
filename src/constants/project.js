import ecommerceImg from "../media/ecommerce.png";
import linkedincloneImg from "../media/linkedinclone.png";
import restcountriesImg from "../media/restcountries.png";

export const projects = [
  {
    title: "Bon Appetit Clone",
    description:
      "This web application mimics the design of the popular cooking magazine Bon Appetit",
    image: linkedincloneImg,
    tags: ["React", "JavaScript", "CSS", "Node", "MongoDB"],
    source: "https://github.com/aaalaina/bonappetitproject",
    liveVersion: "https://bone-apple-teeth-r2h-g1.netlify.app/",
    id: 0,
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website, built with React, Node, and AWS.",
    image: ecommerceImg,
    tags: ["React", "JavaScript", "AWS", "CSS", "SQL", "Node"],
    source: "https://github.com/aaalaina/ecommerce2",
    liveVersion: "https://master.d3sv5n3wbtbpxp.amplifyapp.com/",
    id: 1,
  },
  {
    title: "Righting Our Wrongs",
    description:
      "A fun challenge from Frontend Mentor using the REST Countries API.",
    image: restcountriesImg,
    tags: ["HTML", "JavaScript", "CSS"],
    source: "https://github.com/aaalaina/CodeForJustice-WrongfulConviction",
    liveVersion: "https://aaalaina.github.io/CodeForJustice-WrongfulConviction/",
    id: 2,
  },
  {
    title: "Task Tracker",
    description:
      "My first attempt at a CRUD application using localstorage to store client data.",
    image: restcountriesImg,
    tags: ["HTML", "JavaScript", "CSS"],
    source: "https://github.com/aaalaina/TaskTracker",
    liveVersion: "https://aaalaina.github.io/TaskTracker/",
    id: 3,
  },
  {
    title: "Three.js Squid Game",
    description:
      "A project I saw on FreeCodeCamp that I wanted to recreate.",
    image: restcountriesImg,
    tags: ["React", "JavaScript", "CSS"],
    source: "",
    liveVersion: "",
    id: 4,
  }
];
