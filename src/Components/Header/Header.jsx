import React from "react";

import { Box } from "@mui/system";

import NavBottom from "./Navbar";
import NavHead from "./NavTop";

const Header = () => {
  return (
    <Box sx={{ backgroundColor: "transparent" }}>
      <NavHead />

      <NavBottom />

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
