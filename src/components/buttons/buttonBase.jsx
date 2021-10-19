import Button from '@mui/material/Button'

const ButtonBase = ({ text, color, variant, ...props }) => {
  return (
    <Button
      sx={{
        width: '280px',
        height: '50px',
        borderRadius: '10px',
        textTransform: 'none'
      }}
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
