import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Divider,
  Stack,
  Typography,
  Link,
  ButtonGroup,
  IconButton,
  Grid,
  Container,
} from "@mui/material";
import React, { useState } from "react";

import logo from "../../images/Header_and_Footer/header_logo.png";
import logo_right from "../../images/Header_and_Footer/logo.png";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavHead from "./NavHead";
import NavBottom from "./NavBottom";
// import Dropdowns from "./Dropdowns";

const arr = ["HOME", "ABOUT PGI-D"];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setCurrentId(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <NavHead />

      {/* <NavBottom /> */}

      {/* <AppBar sx={{ width: "100%" }} color="transparent" position="sticky">
        <Toolbar
          sx={{ paddingLeft: "0", marginInlineStart: "0" }}
          className="header"
          disableGutters
        >
         
          <Box component="div" className="img">
            <Box
              component="img"
              sx={{
                marginLeft: 10,
              }}
              alt="Your logo."
              src={logo}
            />
            <Box
              component="img"
              sx={{
                marginRight: 10,
              }}
              alt="Your logo."
              src={logo_right}
            />
          </Box>
          <Divider className="divider" sx={{ my: 0.5 }} />

          <Box
            sx={{ width: "100%", display: { xs: "none", sm: "block" } }}
            className="bottom_header"
          >
            <Button
              className="btn"
              variant="text"
              color="inherit"
              component="div"
            >
              Home
            </Button>
            <Button
              className="btn"
              variant="text"
              color="inherit"
              component="div"
            >
              ABOUT PGI-D
            </Button>
          </Box>
        </Toolbar>
      </AppBar> */}
    </Box>
  );
};

export default Header;
