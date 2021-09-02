import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  menuIcon: {
    color: 'white',
    fontSize: '35px'
  },
  list: {
    width: 250,
    display: 'flex',
    justifyContent: 'center'
  },
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  logo: {
    fontSize: '35px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  }
}))

const MobileNavbar = ({ navLinks }) => {
  const classes = useStyles()
  const [openDrawer, setOpenDrawer] = useState(false)

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
        <Box>
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
        </Box>
        <Box className={classes.logo}>SKICONNECT</Box>
      </Box>
    </>
  )
}

export default MobileNavbar
