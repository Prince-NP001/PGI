import { AppBar, Button, Menu, MenuItem, Toolbar,MenuProps, Divider } from '@mui/material'
import React, { useState } from 'react'
import "../../styles/Header.css"
import logo from "../../images/Header_and_Footer/header_logo.png"
import logo_right from "../../images/Header_and_Footer/logo.png"
import { Box } from '@mui/system'
import { styled, alpha } from '@mui/material/styles';
const Header = () => {

  const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <AppBar sx={{width:"100%"}} color='transparent' position='sticky' >
        <Toolbar sx={{paddingLeft:"0",marginInlineStart:'0'}} className='header' disableGutters	>
            <Box  component='div' className='img'>
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
        <Divider className='divider' sx={{ my: 0.5 }} />
        <Box component='div' className="bottom_header">
           <Button className='btn' variant="text" color="error" component="div">
             Home
           </Button>
           <Button className='btn' variant="text" color="error" component="div">
             ABOUT PGI-D
           </Button>
           <Button onClick={handleClick} className='btn' variant="text" color="error" component="div">
             STATES INDEX
           </Button>
            <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
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
      </StyledMenu>
           
           <Button className='btn' variant="text" color="error" component="div">
             REPORTS
           </Button>
            <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
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
      </StyledMenu>
           <Button className='btn' variant="text" color="error" component="div">
             CATEGORIES
           </Button>
            <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
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
      </StyledMenu>
        </Box>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header   