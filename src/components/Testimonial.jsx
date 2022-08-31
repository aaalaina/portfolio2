import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";



const Testimonial = () => {
  return <>
  <Box sx={{
    backgroundColor: "#000F2E",
    padding: 3,
    border: "1px solid #00CF77",
    borderRadius: "10px",
    maxWidth: "315px",
    position: "relative",
    mx: 3
    }}>
      <Typography variant="body1" sx={{color: "white", mb: 2}}>
      Alaina Harris is an inquisitive apprentice that showcased determination and a high level understanding of coding concepts. Her ability to quickly understand the lessons were showcased via the weekly coding challenges every Friday. I enjoyed having Alaina as an apprentice and look forward to seeing her career soar!
      </Typography>
      
      <Typography>
      <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          Jordon Douglas
        </span>
        <span style={{ color: "#7B89A8" }}> - Tech Lead</span>
      </Typography>
      <FormatQuoteIcon
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#00C7FF",
          height: "50px",
          width: "50px",
        }}
      />
  </Box>
  <Box sx={{
    backgroundColor: "#000F2E",
    padding: 3,
    border: "1px solid #00CF77",
    borderRadius: "10px",
    maxWidth: "315px",
    position: "relative",
    mx: 3
    }}>
      <Typography variant="body1" sx={{color: "white", mb: 2}}>
      Alaina has grown so much from the beginning of the program. She started very shy and only participated when called upon. By the end of the program, she was more engaged and confident in her presentation. Her growth is evident, and I couldn’t be prouder.
      </Typography>
      
      <Typography>
      <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          Ay'Shya Balkcom
        </span>
        <span style={{ color: "#7B89A8" }}> - PD Lead</span>
      </Typography>
      <FormatQuoteIcon
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#00C7FF",
          height: "50px",
          width: "50px",
        }}
      />
  </Box>
  <Box sx={{
    backgroundColor: "#000F2E",
    padding: 3,
    border: "1px solid #00CF77",
    borderRadius: "10px",
    maxWidth: "315px",
    position: "relative",
    mx: 3
    }}>
      <Typography variant="body1" sx={{color: "white", mb: 2}}>
      Watching Alaina grow both professionally, and technically has been a joy to watch!  When she first joined the program, Alaina was visibly nervous while presenting, didn’t speak up in class, and was hesitant to ask questions.  Over the past 6 months, Alaina has learned to advocate for herself, ask clarify questions, and give purposeful presentations.  With her ability to take and implement feedback, I have no doubts about her continued success post the Apprenticeship program!
      </Typography>
      
      <Typography>
      <span style={{ color: "#33C7FF", fontWeight: "bold" }}>
          Justin McNeil
        </span>
        <span style={{ color: "#7B89A8" }}> - Senior Tech Instructor</span>
      </Typography>
      <FormatQuoteIcon
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          color: "#00C7FF",
          height: "50px",
          width: "50px",
        }}
      />
  </Box>
  </>;
};

export default Testimonial;
