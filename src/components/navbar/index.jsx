import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const useStyles = makeStyles({
  toolbar: {
    paddingLeft: '150px',
    paddingRight: '150px'
  }
})

const navLinks = [
  { url: '!#', text: 'Login' },
  { url: '!#', text: 'Register' }
]

const Navbar = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Box>
        <AppBar color='secondary' position='fixed' elevation={0}>
          <Toolbar className={classes.toolbar}>
            <DesktopNavbar navLinks={navLinks} />
            <MobileNavbar navLinks={navLinks} />
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </React.Fragment>
  )
}

export default Navbar
