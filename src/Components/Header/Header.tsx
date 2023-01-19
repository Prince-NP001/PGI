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
} from "@mui/material";
import React, { useState } from "react";
import "../../styles/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/Header_and_Footer/header_logo.png";
import logo_right from "../../images/Header_and_Footer/logo.png";
import { Box } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Dropdowns from "./Dropdowns";

const arr = ["HOME", "ABOUT PGI-D"];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentId, setCurrentId] = useState<null | String>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentId(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar sx={{ width: "100%" }} color="transparent" position="sticky">
        <Toolbar
          sx={{ paddingLeft: "0", marginInlineStart: "0" }}
          className="header"
          disableGutters
        >
          <Box className="header-top" component="p">
            <Grid container className="box">
              <Grid item md={2}>
                <Typography variant="caption">
                  Last Modified : 20/07/2022
                </Typography>
              </Grid>
              <Grid item md={10}>
                <Grid container sx={{ display: "flex", justifyContent: "end" }}>
                  <ButtonGroup
                    sx={{ display: { sm: "none", md: "flex" } }}
                    variant="text"
                    aria-label="text button group"
                  >
                    <Button
                      sx={{ borderRight: "1px solid white" }}
                      className="link"
                      color="inherit"
                      component={Link}
                    >
                      Skip to Main Content
                    </Button>
                    <Button className="link" color="inherit" component={Link}>
                      Screen Reader Access
                    </Button>
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button className="link" color="inherit" component={Link}>
                        A
                      </Button>
                      <Button className="link" color="inherit" component={Link}>
                        A+
                      </Button>
                      <Button className="link" color="inherit" component={Link}>
                        A++
                      </Button>
                    </ButtonGroup>
                    <Button
                      className="link"
                      id="language-menu"
                      color="inherit"
                      onClick={handleClick}
                      aria-controls={open ? "language-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      English
                    </Button>
                    <Menu
                      className="menu"
                      id="language-menu"
                      anchorEl={anchorEl}
                      open={currentId === "language-menu" ? open : false}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleClose} disableRipple>
                        English
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        Hindi
                      </MenuItem>
                    </Menu>
                  </ButtonGroup>
                  <IconButton
                    id="main-menu"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleClick}
                    aria-controls={open ? "language-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    sx={{ display: { sm: "flex", md: "none" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="main-menu"
                    PaperProps={{
                      style: {
                        width: "95%",
                      },
                    }}
                    anchorEl={anchorEl}
                    open={currentId === "main-menu" ? open : false}
                    onClose={handleClose}
                  >
                    {arr.map((item) => (
                      <MenuItem onClick={handleClose} disableRipple>
                        {item}
                      </MenuItem>
                    ))}
                    {/* <Dropdowns /> */}
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Box>
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
      </AppBar>
    </>
  );
};

export default Header;
