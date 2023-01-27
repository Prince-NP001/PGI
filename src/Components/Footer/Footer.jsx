import { Box, Container, Typography } from "@mui/material";

import React from "react";
import "../../styles/component/Footer.scss";
import FooterMiddle from "../../Shared/FooterMiddle";
import LinksFooter from "../../Shared/LinksFooter";
const Footer = () => {
  return (
    <Box className="footer">
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
          <Box className="content" component="div" sx={{ flexWrap: "wrap" }}>
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
        <FooterMiddle />
      </Container>
      <LinksFooter />
    </Box>
  );
};

export default Footer;
