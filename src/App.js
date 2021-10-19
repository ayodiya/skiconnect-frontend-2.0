import CssBaseline from '@mui/material/CssBaseline'
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { theme } from './utils/theme'
import { ThemeProvider } from '@mui/material/styles'

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
