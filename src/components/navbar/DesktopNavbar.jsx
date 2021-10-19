import Box from '@mui/material/Box'

const DesktopNavbar = ({ navLinks }) => {
  return (
    <>
      <Box display='flex' sx={{}} width='100%'>
        SKICONNECT
      </Box>
      {navLinks.map(({ text }) => (
        <Box
          sx={{
            fontWeight: 'bold',
            display: { xs: 'none' },
            margin: '10px',
            fontSize: '20px',
            color: 'white'
          }}
        >
          {text}
        </Box>
      ))}
    </>
  )
}

export default DesktopNavbar
