import React from "react";

import { Box } from "@mui/system";

import Navbar from "../../Shared/Navbar";
import HeaderTop from "../../Shared/HeaderTop";
import { Toolbar } from "@mui/material";

const Header = () => {
  return (
    <>
      <HeaderTop />
      {/* <AppBar disablePadding>
        <Toolbar className="head" disableGutters>
          <Navbar />
        </Toolbar>
      </AppBar> */}

      <Box disablePadding>
        <Toolbar className="head" disableGutters>
          <Navbar />
        </Toolbar>
      </Box>
    </>
  );
};

export default Header;
