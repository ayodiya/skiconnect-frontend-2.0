import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

const MobileNavbar = ({ navLinks }) => {
  const [openDrawer, setOpenDrawer] = useState(false)

  const openSideNavbar = () => setOpenDrawer(true)

  const closeSideNavbar = () => {
    setOpenDrawer(false)
  }

  const NavLinks = () => (
    <Box
      sx={{ width: 250, display: 'flex', justifyContent: 'center' }}
      onClick={closeSideNavbar}
    >
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
      <Box
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexGrow: 1,
          display: { sm: 'flex', md: 'none' }
        }}
      >
        <Box>
          <IconButton
            sx={{ color: 'white', fontSize: '35px' }}
            onClick={openSideNavbar}
          >
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
        <Box
          sx={{
            fontSize: '35px',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            width: '100%'
          }}
        >
          SKICONNECT
        </Box>
      </Box>
    </>
  )
}

export default MobileNavbar
