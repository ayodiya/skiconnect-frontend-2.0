import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

import logo from '../../assets/images/logo.svg'

const useStyles = makeStyles(theme => ({
  nav: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  links: {
    margin: '10px',
    fontSize: '20px',
    color: 'white',
    fontWeight: 'bold'
  }
}))

const DesktopNavbar = ({ navLinks }) => {
  const classes = useStyles()

  return (
    <>
      <Box display='flex' className={classes.nav} width='100%'>
        <img src={logo} alt='skiconnect' width='20%' height='100%' />
      </Box>
      {navLinks.map(({ text }) => (
        <Box className={`${classes.links}  ${classes.nav}`}>{text}</Box>
      ))}
    </>
  )
}

export default DesktopNavbar
