import CircularProgress from '@material-ui/core/CircularProgress'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  centered: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

const Loading = () => {
  const classes = useStyles()

  return (
    <Box className={classes.centered}>
      <CircularProgress />
    </Box>
  )
}

export default Loading
