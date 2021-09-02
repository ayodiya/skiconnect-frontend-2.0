import { Suspense } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './utils/theme'
import { ThemeProvider } from '@material-ui/core/styles'

import Routes from './routes'
import Loading from './components/Loading'
import Navbar from './components/navbar'
import Footer from './components/Footer'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes />
          <Footer />
        </Suspense>
      </Router>
    </ThemeProvider>
  )
}

export default App
