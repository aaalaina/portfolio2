import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";


const Footer = () => {
  return (<>
   <Box
      sx={{
        maxWidth: "1100px",
        borderTop: "1px solid white",
        mx: "auto",
        padding: 3,
        display: "flex",
        justifyContent: "space-around",
        marginTop: 5
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "white", fontWeight: "bold", mb: 2 }}
        >
          PAGES
        </Typography>

        <Link
          to="home"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Home
        </Link>
        <Link
          to="experience"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          Experience
        </Link>
        <Link
          to="about"
          className="link"
          smooth
          style={{ color: "white", margin: "0.5rem 0", cursor: "pointer" }}
        >
          About
        </Link>
        </Box>

<Box
  sx={{
    display: "flex",
    flexDirection: "column",
  }}
>
  <Typography
    variant="body1"
    sx={{ color: "white", fontWeight: "bold", mb: 2 }}
  >
    SOCIAL
  </Typography>

  <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
    <GitHubIcon sx={{ mr: 2, color: "white" }} href=""/>
    <Typography variant="body2" sx={{ color: "white", my: 1 }}>
      GitHub
    </Typography>
  </Box>

  <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
    <EmailIcon sx={{ mr: 2, color: "white" }} />
    <Typography variant="body2" sx={{ color: "white", my: 1 }}>
      Email
    </Typography>
  </Box>

  <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
    <LinkedInIcon sx={{ mr: 2, color: "white" }} />
    <Typography variant="body2" sx={{ color: "white", my: 1 }} >
      LinkedIn
    </Typography>
  </Box>
</Box>
</Box>
  </>
  );
};

export default Footer;
