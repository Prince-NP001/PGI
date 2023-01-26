import React, { useEffect, useState } from "react";
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
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Collapse,
  ListItemText,
  Paper,
  Container,
} from "@mui/material";

import "../styles/component/Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Modal from "./Modal";
const arr = ["HOME", "ABOUT PGI-D"];
const HeaderTop = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [currentOpenId, setCurrentOpenId] = useState(
    null
   
  );
  const [modalOpen, setModalOpen] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.currentTarget.id === currentId
      ? setCurrentId(null)
      : setCurrentId(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    console.log(currentOpenId === "status_indux_head");
  }, [currentOpenId]);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{ paddingLeft: "0", minHeight: "0", marginInlineStart: "0" }}
      className="header"
      disableGutters
      disablePadding
      variant="dense"
    >
      <Container maxWidth={"xl"}>
        <Box className="header-top" disablePadding>
          <Grid container className="box" disablePadding disableGutters>
            <Grid item disablePadding>
              <Typography variant="caption">
                Last Modified : 20/07/2022
              </Typography>
            </Grid>
            <Grid item>
              <Grid container sx={{ display: "flex", justifyContent: "end" }}>
                <ButtonGroup
                  className="btn_group"
                  sx={{}}
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
                  <Divider sx={{ borderRight: "1px solid white" }} />
                  <Button className="link" color="inherit" component={Link}>
                    Screen Reader Access
                  </Button>
                  <Divider sx={{ borderRight: "1px solid white" }} />
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
                  <Divider sx={{ borderRight: "1px solid white" }} />
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
                <List>
                  <ListItemButton
                    id="main_menu"
                    className="main-menu"
                    onClick={() => setModalOpen(!modalOpen)}
                  >
                    <ListItemIcon size="large" edge="start">
                      <MenuIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                  </ListItemButton>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {modalOpen && <Modal />}
    </Box>
  );
};

export default HeaderTop;
