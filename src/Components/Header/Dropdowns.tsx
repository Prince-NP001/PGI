import React, { useState } from "react";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Dropdowns = () => {
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
    <div>
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
    </div>
  );
};

export default Dropdowns;
