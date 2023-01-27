import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Divider,
  Grid,
  List,
  Collapse,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "../styles/component/Header.scss";
const Modal = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentId, setCurrentId] = useState(null);
  const [currentOpenId, setCurrentOpenId] = useState(
    null
    //   {
    //   status_indux_head: false, reports_head: false, categories_head: false,main_menu:false
    // }
  );
  const [modalOpen, setModalOpen] = useState(true);
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
  return (
    <Container
      className="dropdown"
      maxWidth={"md"}
      sx={{ margin: "auto" }}
      disablePadding
    >
      <List className="main-menu-list" component="div">
        <ListItemButton className="list_btn">
          <ListItemText className="text_item" primary="HOME" />
        </ListItemButton>
        <ListItemButton className="list_btn">
          <ListItemText className="text_item" primary="ABOUT PGI-D" />
        </ListItemButton>
        <ListItemButton
          className="list_btn"
          id="status_indux_head"
          onClick={() => handleOpen("status_indux_head")}
        >
          <ListItemText className="text_item" primary="STATES INDEX" />
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
          <List className="status_indux_head" component={Paper} disablePadding>
            <Grid className="States_grid" container>
              <Grid item xs={12} sm={6} md={3}>
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
              <Grid item xs={12} sm={6} md={3}>
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
              <Grid item xs={12} sm={6} md={3}>
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
              <Grid item xs={12} sm={6} md={3}>
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
          sx={{ height: "100%" }}
          onClick={() => handleOpen("reports_head")}
          disablePadding
        >
          <ListItemText className="text_item" primary="REPORTS" />
          {currentOpenId === "reports_head" ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse
          in={currentOpenId === "reports_head"}
          timeout="auto"
          unmountOnExit
        >
          <List className="status_indux_head" component={Paper} disablePadding>
            <ListItemButton className="text_btn">
              <ListItemText
                className="text_item"
                primary="PGI-D-2018-19 & 2019-20 ENGLISH"
              />
            </ListItemButton>
            <Divider />
            <ListItemButton className="text_btn">
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
          onClick={() => handleOpen("categories_head")}
        >
          <ListItemText className="text_item" primary="CATEGORIES" />
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
          <List className="status_indux_head" component={Paper} disablePadding>
            <ListItemButton className="text_btn">
              <ListItemText className="text_item" primary="Outcomes" />
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
    </Container>
  );
};

export default Modal;
