import React from 'react'
import Box from '@material-ui/core/Box'
import Icon from '@material-ui/core/Icon'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin
} from 'react-icons/fa'

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#0aa4b3',
    color: 'white',
    paddingTop: '20px',
    paddingBottom: '20px',
    [theme.breakpoints.down('md')]: {
      paddingTop: '20px',
      paddingBottom: '20px'
    }
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: '50px'
  },
  link: {
    margin: theme.spacing(1),
    fontSize: '20px'
  },
  dividerWidth: {
    width: '30%'
  },
  boxDirection: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  logo: {
    fontSize: '30px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '30px'
    }
  },
  socialMediaBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row'
    }
  }
}))

const navLinks = [
  { url: '!#', text: 'Home' },
  { url: '!#', text: 'Login' },
  { url: '!#', text: 'Register' }
]

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.footer}>
        <Box className={classes.boxDirection}>
          <Box className={classes.logo}>
            <Box display='flex'>SKICONNECT</Box>
          </Box>
          <Hidden mdUp>
            <Box display='flex' justifyContent='center' pt='5px' pb='15px'>
              <Divider className={classes.dividerWidth} variant='middle' />
            </Box>
          </Hidden>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Box display='flex' flexDirection='column'>
              {navLinks.map(({ text }) => (
                <Box
                  className={classes.link}
                  key={text}
                  fontSize='20px'
                  align='center'
                  width='100%'
                  fontWeight='bold'
                >
                  {text}
                </Box>
              ))}
            </Box>
          </Box>
          <Hidden mdUp>
            <Box display='flex' justifyContent='center' pt='15px' pb='10px'>
              <Divider className={classes.dividerWidth} variant='middle' />
            </Box>
          </Hidden>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Box className={classes.socialMediaBox}>
              <Icon className={classes.icon}>
                <FaTwitterSquare />
              </Icon>
              <Icon className={classes.icon}>
                <FaGithubSquare />
              </Icon>
              <Icon className={classes.icon}>
                <FaFacebookSquare />
              </Icon>
              <Icon className={classes.icon}>
                <FaLinkedin />
              </Icon>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
