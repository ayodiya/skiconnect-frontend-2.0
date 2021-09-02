import React from 'react'
import Box from '@material-ui/core/Box'

const InputFieldError = ({ errorText, ...props }) => {
  return (
    <Box pt='5px' pl='15px' fontSize='12px' color='red' {...props}>
      {errorText}
    </Box>
  )
}

export default InputFieldError
