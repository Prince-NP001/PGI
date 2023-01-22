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
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "../../styles/component/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { textAlign } from "@mui/system";
import NavBottom from "./NavBottom";
const arr = ["HOME", "ABOUT PGI-D"];
const NavHead = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [currentOpenId, setCurrentOpenId] = useState(
    null
    //   {
    //   status_indux_head: false, reports_head: false, categories_head: false,main_menu:false
    // }
  );
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.currentTarget.id === currentId
      ? setCurrentId(null)
      : setCurrentId(event.currentTarget.id);
    setAnchorEl(event.currentTarget);
  };
  const handleOpen = (id) => {
    id === currentOpenId ? setCurrentOpenId(null) : setCurrentOpenId(id);
    // setCurrentOpenId(prev =>({...prev,[id]:!currentOpenId[id]}))
  };
  useEffect(() => {
    console.log(currentOpenId === "status_indux_head");
  }, [currentOpenId]);
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar sx={{ width: "100%" }}  disableGutters color="transparent" position="sticky">
      <Toolbar
        sx={{ paddingLeft: "0", minHeight:"0",marginInlineStart: "0" }}
        className="header"
        disableGutters
        disablePadding
        variant="dense"
      >
        <Box className="header-top" component="p">
          <Grid container className="box" spacing={2} disablePadding disableGutters>
            <Grid item md={4}>
              <Typography variant="caption">
                Last Modified : 20/07/2022
              </Typography>
            </Grid>
            <Grid item md={8}>
              <Grid container sx={{ display: "flex", justifyContent: "end" }}>
                <ButtonGroup
                className='btn_group'
                  sx={{ }}
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
                <List>
                  <ListItemButton
                    id="main_menu"
                    className="main-menu"
                    sx={{  }}
                    onClick={handleClick}
                  >
                    <ListItemIcon size="large" edge="start">
                      <MenuIcon sx={{ color: "white" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse
                    in={currentId === "main_menu"}
                    timeout="auto"
                     sx={{  width:"90%" }}
                    unmountOnExit
                  >
                    <List
                      className="main-menu-list"
                      component="div"
                      disablePadding
                      sx={{
                        width:"90%",
                      }}
                    >
                      <ListItemButton className="list_btn" sx={{ pl: 4 }}>
                        <ListItemText className="text_item" primary="HOME" />
                      </ListItemButton>
                      <ListItemButton className="list_btn" sx={{ pl: 4 }}>
                        <ListItemText
                          className="text_item"
                          primary="ABOUT PGI-D"
                        />
                      </ListItemButton>
                      <ListItemButton
                        className="list_btn"
                        id="status_indux_head"
                        sx={{ pl: 4 }}
                        onClick={() => handleOpen("status_indux_head")}
                      >
                        <ListItemText
                          className="text_item"
                          primary="STATES INDEX"
                        />
                        {currentOpenId === "status_indux_head" ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItemButton>
                      <Collapse
                        in={currentOpenId == "status_indux_head"}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List
                          className="status_indux_head"
                          component={Paper}
                          disablePadding
                        >
                          <Grid
                            className="States_grid"
                            container
                            sx={{ pl: 4 }}
                          >
                            <Grid item xs={12} sm={3}>
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
                                <Grid item  xs={12} sm={3}>
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
                                <Grid item  xs={12}  sm={3}>
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
                                <Grid item  xs={12}  sm={3}>
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
                        </List>
                      </Collapse>
                      <ListItemButton
                        className="list_btn"
                        id="reports_head"
                        sx={{ pl: 4, height: "100%" }}
                        onClick={() => handleOpen("reports_head")}
                        disablePadding
                      >
                        <ListItemText className="text_item" primary="REPORTS" />
                        {currentOpenId === "reports_head" ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItemButton>
                      <Collapse
                        in={currentOpenId === "reports_head"}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List
                          className="status_indux_head"
                          component={Paper}
                          disablePadding
                        >
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="PGI-D-2018-19 & 2019-20 ENGLISH"
                            />
                          </ListItemButton>
                          <Divider />
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="PGI-D-2018-19 & 2019-20 HINDI"
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                      <ListItemButton
                        className="list_btn"
                        id="categories_head"
                        sx={{ pl: 4 }}
                        onClick={() => handleOpen("categories_head")}
                      >
                        <ListItemText
                          className="text_item"
                          primary="CATEGORIES"
                        />
                        {currentOpenId === "categories_head" ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        )}
                      </ListItemButton>

                      <Collapse
                        in={currentOpenId === "categories_head"}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List
                          className="status_indux_head"
                          component={Paper}
                          disablePadding
                        >
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="Outcomes"
                            />
                          </ListItemButton>
                          <Divider />
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="Effective Classroom transacion (ECT)"
                            />
                          </ListItemButton>
                          <Divider />
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="Infrastructure, facilities, Student Entitlements (IF & SE)"
                            />
                          </ListItemButton>
                          <Divider />
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="School Safely and Child Protection (SS & CP)"
                            />
                          </ListItemButton>
                          <Divider />
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="Digital Learning (DL)"
                            />
                          </ListItemButton>
                          <Divider />
                          <ListItemButton className="text_btn" sx={{ pl: 4 }}>
                            <ListItemText
                              className="text_item"
                              primary="Governance Processes(GP)"
                            />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </List>
                  </Collapse>
                </List>
                {/* <IconButton
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
                  <Button
                    endIcon={<KeyboardArrowDownIcon />}
                    id="state-index-menu"
                    onClick={handleClick}
                    aria-controls={open ? "states-index-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    className="btn"
                    variant="text"
                    color="inherit"
                  >
                    STATES INDEX
                  </Button>
                  <Menu
                    id="state-index-menu"
                    anchorEl={anchorEl}
                    open={currentId === "state-index-menu" ? open : false}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      Duplicate
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                      Archive
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      More
                    </MenuItem>
                  </Menu>

                  <Button
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
                  </Button>
                  <Menu
                    id="report-menu"
                    anchorEl={anchorEl}
                    open={currentId === "report-menu" ? open : false}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      Duplicate
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                      Archive
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      More
                    </MenuItem>
                  </Menu>

                  <Button
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
                  </Button>
                  <Menu
                    id="categories-menu"
                    anchorEl={anchorEl}
                    open={currentId === "categories-menu" ? open : false}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose} disableRipple>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      Duplicate
                    </MenuItem>
                    <Divider sx={{ my: 0.5 }} />
                    <MenuItem onClick={handleClose} disableRipple>
                      Archive
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>
                      More
                    </MenuItem>
                  </Menu>
                </Menu> */}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <NavBottom/>
      </Toolbar>
    </AppBar>
  );
};

export default NavHead;
