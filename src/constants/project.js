import tasktrackerss from "../media/tasktrackerss.png"
import codeforjusticess from "../media/codeforjusticess.png";
import ecommss from "../media/ecommss.png";
import bonappetitss from '../media/bonappetitss.png';
import splinesceness from "../media/splinesceness.png"

export const projects = [
  {
    title: "Bon Appetit Clone",
    description:
      "This web application mimics the design of the popular cooking magazine Bon Appetit",
    image: bonappetitss,
    tags: ["React", "JavaScript", "CSS", "Node", "MongoDB"],
    source: "https://github.com/aaalaina/bonappetitproject",
    liveVersion: "https://bone-apple-teeth-r2h-g1.netlify.app/",
    id: 0,
  },
  {
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce website, built with React, Node, and AWS.",
    image: ecommss,
    tags: ["React", "JavaScript", "AWS", "CSS", "SQL", "Node"],
    source: "https://github.com/aaalaina/ecommerce2",
    liveVersion: "https://master.d3sv5n3wbtbpxp.amplifyapp.com/",
    id: 1,
  },
  {
    title: "Righting Our Wrongs",
    description:
      "A fun challenge from Frontend Mentor using the REST Countries API.",
    image: codeforjusticess,
    tags: ["HTML", "JavaScript", "CSS"],
    source: "https://github.com/aaalaina/CodeForJustice-WrongfulConviction",
    liveVersion: "https://aaalaina.github.io/CodeForJustice-WrongfulConviction/",
    id: 2,
  },
  {
    title: "Task Tracker",
    description:
      "My first attempt at a CRUD application using localstorage to store client data.",
    image: tasktrackerss,
    tags: ["HTML", "JavaScript", "CSS"],
    source: "https://github.com/aaalaina/TaskTracker",
    liveVersion: "https://aaalaina.github.io/TaskTracker/",
    id: 3,
  },
  {
    title: "Spline Room Model",
    description:
      "My first attempt at 3d modelling a room.",
    image: splinesceness,
    tags: ["Spline"],
    source: "#",
    liveVersion: "https://app.spline.design/file/214f1fae-8e18-4261-8b46-832acdbe6c60",
    id: 4,
  }
];
