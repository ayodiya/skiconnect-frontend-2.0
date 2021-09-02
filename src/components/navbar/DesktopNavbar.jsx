import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  nav: {
    fontSize: '30px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  links: {
    margin: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white'
  }
}))

const DesktopNavbar = ({ navLinks }) => {
  const classes = useStyles()

  return (
    <>
      <Box display='flex' className={classes.nav} width='100%'>
        SKICONNECT
      </Box>
      {navLinks.map(({ text }) => (
        <Box className={`${classes.links}  ${classes.nav}`}>{text}</Box>
      ))}
    </>
  )
}

export default DesktopNavbar
