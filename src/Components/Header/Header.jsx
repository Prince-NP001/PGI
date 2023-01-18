import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import "../../styles/Header.css"
import logo from "../../images/Header_and_Footer/header_logo.png"
import logo_right from "../../images/Header_and_Footer/logo.png"
import { Box } from '@mui/system'
const Header = () => {
  return (
    <>
    <AppBar sx={{width:"100%",}} color='transparent' position='sticky' >
        <Toolbar sx={{paddingLeft:"0",marginInlineStart:'0'}} className='header'>
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
        <hr/>
        <Box component='div' className="bottom_header">
           <Button  className="div">
             Home
           </Button>
        </Box>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header   