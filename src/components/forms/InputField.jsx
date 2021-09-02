import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  textFieldStyle: {
    borderRadius: '10px',
    width: '280px'
  }
})

const InputField = ({ name, onChange, label, ...props }) => {
  const classes = useStyles()

  return (
    <FormControl>
      <TextField
        name={name}
        label={label}
        onChange={onChange}
        InputProps={{
          className: classes.textFieldStyle
        }}
        {...props}
      />
    </FormControl>
  )
}

export default InputField
