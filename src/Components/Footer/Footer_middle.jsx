import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import pic from "../../images/Header_and_Footer/Analytics1.png";
import pic2 from "../../images/Header_and_Footer/Analytics2.png";
const Footer_middle = () => {
  const { ref: dataRef1, inView: inView1, entry } = useInView();
  const { ref: imgRef1, inView: inView2, entry2 } = useInView();
  const { ref: dataRef2, inView: inView3, entry3 } = useInView();
  const { ref: imgRef2, inView: inView4, entry4 } = useInView();

  console.log(inView1);
  return (
    <Box component="div">
      <Grid container alignItems="center" justify="center" spacing={15}>
        <Grid className="footer_2" ref={dataRef1} item xs={6}>
          <Box className={` ${inView1 ? "animateLeft" : ""}`}>
            <Typography className="header" variant="h3">
              Data Source
            </Typography>
            <Box className="content">
              <Typography variant="p">
                PGI-D is constructed based on identified indicators and domains.
                The data for PGI-D drawn from several sources, viz., Unified
                District Information System for Education Plus (UDISE +),
                National Achievement Survey (NAS) 2017 and data provided by
                respective Districts.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          ref={imgRef1}
          item
          textAlign="right"
          className={`${"img"} ${inView2 ? "animateRight" : ""}`}
          xs={6}
        >
          <Box component="img" src={pic} />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justify="center" spacing={15}>
        <Grid
          ref={imgRef2}
          item
          textAlign="left"
          className={`${"img"} ${inView3 ? "animateLeft" : ""}`}
          xs={6}
        >
          <Box component="img" src={pic2} />
        </Grid>
        <Grid ref={dataRef2} item xs={6}>
          <Box className={`${"footer_2"} ${inView4 ? "animateRight" : ""}`}>
            <Typography className="header" variant="h3">
              Methodology
            </Typography>
            <Box className="content">
              <Typography variant="p">
                The architecture of the PGI-D emanates from the rationale that
                an efficient, inclusive and equitable school education system is
                contingent upon the regular monitoring of interconnected
                matrices of inputs, outputs and outcomes related to school
                education indicators, and the development of a quick response
                system for course correction in the entire system.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer_middle;
