import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  buttonStyle: {
    width: '280px',
    height: '50px',
    borderRadius: '10px',
    textTransform: 'none'
  }
})

const ButtonBase = ({ text, color, variant, ...props }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.buttonStyle}
      color={color}
      variant={variant}
      disableElevation
      {...props}
    >
      {text}
    </Button>
  )
}

export default ButtonBase
