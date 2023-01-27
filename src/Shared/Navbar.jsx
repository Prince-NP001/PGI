import { Menu, MenuItem, Divider, Grid, Box, Container } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../images/Header_and_Footer/header_logo.png";
import logo_right from "../images/Header_and_Footer/logo.png";
import "../styles/component/Header.scss";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(true);
  const [currentId, setCurrentId] = useState(null);

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleClick = (event) => {
    event.currentTarget.id === currentId && open
      ? setCurrentId(null)
      : setCurrentId(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      {" "}
      <Box className="navbar" disableGutters color="inherit">
        <Container
          maxWidth={"lg"}
          sx={{ backgroundColor: "white" }}
          disableGutters
        >
          <Grid container spacing={1} className="img">
            <Grid item xs={12} md={3} textAlign={"center"}>
              <Box
                sx={{ maxWidth: "95%" }}
                component="img"
                alt="Your logo."
                src={logo}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
            <Grid item xs={12} md={3} textAlign={"center"}>
              <Box
                sx={{ maxWidth: "90%", paddingRight: "5%" }}
                component="img"
                alt="Your logo."
                src={logo_right}
              />
            </Grid>
          </Grid>
        </Container>
        <Divider className="divider" sx={{ margin: 0 }} />
        <Container maxWidth={"lg"}>
          <Box disableGutters component="div" className="bottom_header">
            <ul>
              <li
                className="btn"
                variant="text"
                color="inherit"
                component="div"
                size="large"
              >
                Home
              </li>
              <li
                className="btn"
                variant="text"
                color="inherit"
                component="div"
                size="large"
              >
                ABOUT PGI-D
              </li>

              <li
                id="state-index-menu"
                onClick={handleClick}
                aria-controls={open ? "states-index-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                className="btn"
                variant="text"
                color="inherit"
                size="large"
              >
                STATES INDEX
                <KeyboardArrowDownIcon />
              </li>
              <Menu
                id="state-index-menu"
                className="state-index-menu"
                anchorEl={anchorEl}
                open={currentId === "state-index-menu" ? open : false}
                onClose={handleClose}
                size="large"
              >
                <MenuItem
                  className="states_grid"
                  onClick={handleClose}
                  disableRipple
                  disablePadding
                >
                  <Container maxWidth={"lg"}>
                    <Grid container disablePadding sx={{ pl: 4 }}>
                      <Grid item xs={12} sm={6} lg={3} md={3}>
                        <ul className="states_list">
                          <li>Andaman and Nicobar </li>
                          <li>Bihar</li>
                          <li>Daman & Diu</li>
                          <li>Haryana</li>
                          <li>Andhra Pradesh</li>
                          <li>Assam</li>
                          <li>Arunachal Pradesh</li>
                          <li>Chhattisgarh</li>
                          <li>Goa</li>
                          <li>Gujarat</li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={3} md={3}>
                        <ul className="states_list">
                          <li>Andaman </li>
                          <li>Bihar</li>
                          <li>Daman & Diu</li>
                          <li>Haryana</li>
                          <li>Andhra Pradesh</li>
                          <li>Assam</li>
                          <li>Arunachal Pradesh</li>
                          <li>Chhattisgarh</li>
                          <li>Goa</li>
                          <li>Gujarat</li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={3} md={3}>
                        <ul className="states_list">
                          <li>Andaman </li>
                          <li>Bihar</li>
                          <li>Daman & Diu</li>
                          <li>Haryana</li>
                          <li>Andhra Pradesh</li>
                          <li>Assam</li>
                          <li>Arunachal Pradesh</li>
                          <li>Chhattisgarh</li>
                          <li>Goa</li>
                          <li>Gujarat</li>
                        </ul>
                      </Grid>
                      <Grid item xs={12} sm={6} lg={3} md={3}>
                        <ul className="states_list">
                          <li>Andaman and Nicobar Islands</li>
                          <li>Bihar</li>
                          <li>Daman & Diu</li>
                          <li>Haryana</li>
                          <li>Andhra Pradesh</li>
                          <li>Assam</li>
                          <li>Arunachal Pradesh</li>
                          <li>Chhattisgarh</li>
                          <li>Goa</li>
                          <li>Gujarat</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </Container>
                </MenuItem>
              </Menu>

              <li
                size="large"
                endIcon={<KeyboardArrowDownIcon />}
                id="report-menu"
                className="btn"
                onClick={handleClick}
                aria-controls={open ? "report-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                variant="text"
                color="inherit"
              >
                REPORTS
                <KeyboardArrowDownIcon />
              </li>
              <Menu
                id="report-menu"
                anchorEl={anchorEl}
                open={currentId === "report-menu" ? open : false}
                onClose={handleClose}
                className="state-index-menu"
                disableGutters
              >
                <MenuItem
                  disablePadding
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  PGI-D-2018-19 & 2019-20 ENGLISH
                </MenuItem>
                <MenuItem
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  PGI-D-2018-19 & 2019-20 HINDI
                </MenuItem>
              </Menu>

              <li
                size="large"
                endIcon={<KeyboardArrowDownIcon />}
                id="categories-menu"
                className="btn"
                variant="text"
                color="inherit"
                onClick={handleClick}
                aria-controls={open ? "categories-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                CATEGORIES
                <KeyboardArrowDownIcon />
              </li>
              <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={currentId === "categories-menu" ? open : false}
                onClose={handleClose}
                className="state-index-menu"
                disableGutters
              >
                <MenuItem
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  Outcomes
                </MenuItem>
                <MenuItem
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  Effective Classroom transacion (ECT)
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  Infrastructure, facilities, Student Entitlements (IF & SE)
                </MenuItem>
                <MenuItem
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  School Safely and Child Protection (SS & CP)
                </MenuItem>
                <MenuItem
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  Digital Learning (DL)
                </MenuItem>
                <MenuItem
                  className="text_btn"
                  onClick={handleClose}
                  disableRipple
                >
                  Governance Processes(GP)
                </MenuItem>
              </Menu>
            </ul>
          </Box>
        </Container>
        <Divider className="divider" sx={{ margin: 0 }} />
      </Box>
      {/* <StatesModal /> */}
    </>
  );
};

export default Navbar;
