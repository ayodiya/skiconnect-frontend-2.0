import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#28EBFF',
    minHeight: '100vh',
    width: '100%',
    color: 'white'
  },
  pageBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },
  headerText: {
    color: '#002E9F',
    fontSize: '35px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: '250px',
    paddingBottom: '10px',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      fontSize: '70px'
    }
  }
}))

const AuthPage = ({ children }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.pageBox}>
        <Hidden mdDown>
          <Box className={classes.alignCenter}>
            <Box display='flex' flexDirection='column'>
              <Box className={classes.headerText}>SKICONNECT</Box>
              <Box display='flex' justifyContent='center'>
                <Box width='55%' fontSize='34px'>
                  Helping you open windows of opportunity worldwide.
                </Box>
              </Box>
            </Box>
          </Box>
        </Hidden>
        {children}
      </Box>
    </Box>
  )
}

export default AuthPage
