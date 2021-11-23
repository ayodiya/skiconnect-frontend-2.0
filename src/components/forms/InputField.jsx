import React from 'react'
import FormControl from '@mui/material/FormControl'
import TextField from '@mui/material/TextField'

const InputField = ({ name, onChange, label, ...props }) => {
  return (
    <FormControl fullWidth>
      <TextField
        sx={{ className: { borderRadius: '50px', width: '280px' } }}
        name={name}
        label={label}
        onChange={onChange}
        {...props}
      />
    </FormControl>
  )
}

export default InputField
