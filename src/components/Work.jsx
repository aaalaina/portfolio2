import { Box, Typography } from "@mui/material";
import React from "react";
import { projects } from "../constants/project";
import Project from "./Project";
import Stack from "./Stack";


const Work = () => {
  return <>
  <Box sx={{maxWidth: "1300px", mx: "auto", my: 12}} id="work">
    <Typography variant="h4" sx={{color: "white", textAlign: "center", mb: 2}}>
    Here are some of my most{" "}
        <span style={{ color: "#b8e8e8" }}>notable</span> creations so far!
    </Typography>
    <Box sx={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      {
        projects.map((project) => (
          <Project key={project.id} title={project.title} description={project.description} tags={project.tags} img={project.image}/>
        ))
      }
    </Box>
    <Stack/>
  </Box>
  </>;
};

export default Work;
