import { createMuiTheme } from '@material-ui/core/styles'

// import { milkshake, poppins, poppins900, poppins600 } from './fonts'

export const theme = createMuiTheme({
  //   typography: {
  //     fontFamily: 'Poppins, Arial, Milkshake, poppins900, poppins600'
  //   },
  //   overrides: {
  //     MuiCssBaseline: {
  //       '@global': {
  //         '@font-face': [poppins, milkshake, poppins600, poppins900]
  //       }
  //     }
  //   },
  palette: {
    primary: {
      main: '#002e9f'
    },
    secondary: {
      main: '#3dbff9'
    },
    tertiary: {
      main: '#fbcd9d'
    }
  }
})
