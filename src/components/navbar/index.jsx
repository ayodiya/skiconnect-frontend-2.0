import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import { useLocation } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'

const useStyles = makeStyles(theme => ({
  toolbar: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '150px',
      paddingRight: '150px'
    }
  }
}))

const navLinks = [
  { url: '!#', text: 'Login' },
  { url: '!#', text: 'Register' }
]

const Navbar = () => {
  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <>
      <Hidden xlDown={pathname === '/'}>
        <Box>
          <AppBar color='secondary' position='fixed' elevation={0}>
            <Toolbar className={classes.toolbar}>
              <DesktopNavbar navLinks={navLinks} />
              <MobileNavbar navLinks={navLinks} />
            </Toolbar>
          </AppBar>
          <Toolbar />
        </Box>
      </Hidden>
    </>
  )
}

export default Navbar
