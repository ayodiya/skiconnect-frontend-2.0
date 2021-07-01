import React from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { GiHamburgerMenu } from 'react-icons/gi'

import logo from '../../assets/images/logo.svg'

const useStyles = makeStyles(theme => ({
  menuIcon: {
    color: 'white'
  },
  list: {
    width: 250,
    display: 'flex',
    justifyContent: 'center'
  },
  nav: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

const MobileNavbar = ({ navLinks }) => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = React.useState(false)

  const openSideNavbar = () => setOpenDrawer(true)

  const closeSideNavbar = () => {
    setOpenDrawer(false)
  }

  const NavLinks = () => (
    <Box className={classes.list} onClick={closeSideNavbar}>
      <List>
        {navLinks.map(({ text }) => (
          <ListItem button key={text}>
            <ListItemText
              primary={<Typography align='center'>{text}</Typography>}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <Box className={classes.nav}>
        <IconButton className={classes.menuIcon} onClick={openSideNavbar}>
          <GiHamburgerMenu />
        </IconButton>
        <SwipeableDrawer
          anchor='left'
          open={openDrawer}
          onOpen={openSideNavbar}
          onClose={closeSideNavbar}
        >
          <NavLinks />
        </SwipeableDrawer>
        <Box display='flex' justifyContent='space-evenly' width='100%'>
          <img src={logo} alt='skiconnect' width='70%' height='100%' />
        </Box>
      </Box>
    </>
  )
}

export default MobileNavbar
