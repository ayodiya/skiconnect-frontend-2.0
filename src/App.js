import CssBaseline from '@material-ui/core/CssBaseline'
import { theme } from './utils/theme'
import { ThemeProvider } from '@material-ui/core/styles'

import Navbar from './components/navbar'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  )
}

export default App
