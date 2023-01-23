import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import pic from "../../images/Header_and_Footer/NIC.png";
import React from "react";

const LinksFooter = () => {
  return (
    <>
      <Box className="linksfooter">
        <Container maxWidth={"lg"}>
          <Grid container columns={16}>
            <Grid item md={4}>
              <Typography paddingLeft={2} variant="h5">
                Links
              </Typography>
              <ul className="about_pgid">
                <li style={{ paddingLeft: "1.2vw" }}>About PGI-D</li>
                <li style={{ paddingLeft: "1.2vw" }}>
                  Report
                  <ul className="about_pgid_nested">
                    <li>PGI-D-2018-19 & 2019-20 ENGLISH</li>
                    <li>PGI-D-2018-19 & 2019-20 HINDI</li>
                  </ul>
                </li>
              </ul>
            </Grid>
            <Grid item md={6} marginLeft={3}>
              <Typography paddingLeft={2} variant="h5">
                Categories
              </Typography>
              <ul className="about_pgid">
                <li style={{ paddingLeft: "1.2vw" }}>Outcomes</li>
                <li style={{ paddingLeft: "1.2vw" }}>
                  Effective Classroom Transaction (ECT)
                </li>
                <li style={{ paddingLeft: "1.2vw" }}>
                  Infrastructure, Facilities, Student Entitlements (IF & SE)
                </li>
                <li style={{ paddingLeft: "1.2vw" }}>
                  School Safety and Child Protection (SS & CP)
                </li>
                <li style={{ paddingLeft: "1.2vw" }}>Digital Learning (DL)</li>
                <li style={{ paddingLeft: "1.2vw" }}>
                  Governance Processes (GP)
                </li>
              </ul>
            </Grid>
            <Grid item md={5} paddingLeft={5}>
              <Box component="img" src={pic} />
              <Typography
                className="about_pgid_nested_nic"
                paragraph
                align="left"
                sx={{ paddingBottom: "0" }}
              >
                This site is designed, developed, maintained and hosted by
                National Informatics Centre (NIC), Ministry of Electronics &
                Information Technology.
              </Typography>
              <Typography
                className="about_pgid_nested_nic"
                paragraph
                align="left"
              >
                Content owned & provided by Department of School Education &
                Literacy, Ministry of Education, Government of India
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="footer_bottom">
        <Container maxWidth={"lg"} disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography
                gutterBottom
                alignItems="center"
                className="text_footer"
              >
                © Copyright 2023 Department of School Education & Literacy,
                Ministry of Education
              </Typography>
            </Grid>
            <Grid textAlign="right" item xs={4}>
              <Typography
                gutterBottom
                alignItems="center"
                className="text_footer"
              >
                {" "}
                Visitor Counter :
                <span
                  style={{ backgroundColor: "red", padding: "0.2vw 0.2vw" }}
                >
                  878
                </span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default LinksFooter;
