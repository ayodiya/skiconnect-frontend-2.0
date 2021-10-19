import Box from '@mui/material/Box'
import Hidden from '@mui/material/Hidden'

const AuthPage = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: '#28EBFF',
        minHeight: '100vh',
        width: '100%',
        color: 'white'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: { xs: 'center', md: 'space-around' }
        }}
      >
        <Hidden mdDown>
          <Box>
            <Box display='flex' flexDirection='column'>
              <Box
                sx={{
                  color: '#002E9F',
                  fontSize: { xs: '35px', md: '70px' },
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  paddingTop: '150px',
                  paddingBottom: '10px',
                  justifyContent: 'center',
                  display: 'flex'
                }}
              >
                SKICONNECT
              </Box>
              <Box display='flex' justifyContent='center'>
                <Box
                  sx={{ width: '60%', fontSize: '25px', textAlign: 'center' }}
                >
                  Helping you open windows of opportunity worldwide.
                </Box>
              </Box>
            </Box>
          </Box>
        </Hidden>
        {children}
      </Box>
    </Box>
  )
}

export default AuthPage
