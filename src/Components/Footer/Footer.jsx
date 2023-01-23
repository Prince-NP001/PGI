import { Box, Container, Stack, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import "../../styles/component/Footer.scss";
import Footer_middle from "./Footer_middle";
import LinksFooter from "./LinksFooter";
const Footer = () => {
  return (
    <Box justifySelf="center" className="footer">
      <Container maxWidth={"lg"}>
        <Box component="div" className="footer_1">
          <Box component="div">
            <Typography
              variant="h3"
              sx={{ color: "#383876", textAlign: "center" }}
            >
              How it Works
            </Typography>
          </Box>
          <Box className="content" component="div" sx={{}}>
            <Typography variant="p">
              Performance Grading Index (PGI) is a index that measures the
              performance of states in school education undertaken by Department
              of School Education &Literacy (DoSEL). PGI strives to evaluate the
              relative performance of all the State/UTs and districts
              respectively in a uniform scale to encourage them to perform
              better.
            </Typography>
          </Box>
        </Box>
        <Footer_middle />
      </Container>
      <LinksFooter />
    </Box>
  );
};

export default Footer;
