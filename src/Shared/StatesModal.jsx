import {
  Menu,
  MenuItem,
  Divider,
  Grid,
  Container,
  DialogContent,
  Modal,
  Dialog,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/component/StatesModal.scss";
const StatesModal = (props) => {
  const handleClose = () => {
    props.close();
  };

  return (
    <Box className="states-modal">
      <Container maxWidth={"lg"}>
        <Grid container disablePadding sx={{ pl: 4 }}>
          <Grid item xs={12} sm={6} lg={3} md={3}>
            <ul onClick={handleClose} className="states-list">
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
            <ul onClick={handleClose} className="states-list">
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
            <ul onClick={handleClose} className="states-list">
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
            <ul onClick={handleClose} className="states-list">
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
    </Box>
  );
};

export default StatesModal;
