import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Hidden from '@mui/material/Hidden'
import { useLocation } from 'react-router'

import MobileNavbar from './MobileNavbar'
import DesktopNavbar from './DesktopNavbar'
import { hideOnPath } from '../../utils/hideOnPath'
import { LANDING_ROUTE, REGISTER_ROUTE } from '../../utils/routes'

const navLinks = [
  { url: '!#', text: 'Login' },
  { url: '!#', text: 'Register' }
]

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <>
      <Hidden xlDown={hideOnPath(pathname, LANDING_ROUTE, REGISTER_ROUTE)}>
        <Box>
          <AppBar color='secondary' position='fixed' elevation={0}>
            <Toolbar
              sx={{
                toolbar: {
                  md: {
                    paddingLeft: '150px',
                    paddingRight: '150px'
                  }
                }
              }}
            >
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
