import React from 'react'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import Divider from '@mui/material/Divider'
import Hidden from '@mui/material/Hidden'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin
} from 'react-icons/fa'

const socialMediaIcons = [
  {
    id: 1,
    icon: <FaTwitterSquare />
  },
  { id: 2, icon: <FaGithubSquare /> },
  { id: 3, icon: <FaFacebookSquare /> },
  { id: 4, icon: <FaLinkedin /> }
]

const navLinks = [
  { url: '!#', text: 'Home' },
  { url: '!#', text: 'Login' },
  { url: '!#', text: 'Register' }
]

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'secondary.main',
          color: 'white',
          paddingTop: '20px',
          paddingBottom: '20px'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <Box
            sx={{
              fontSize: '30px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center' }
            }}
          >
            <Box display='flex'>SKICONNECT</Box>
          </Box>
          <Hidden mdUp>
            <Box display='flex' justifyContent='center' pt='5px' pb='15px'>
              <Divider sx={{ width: '30%' }} variant='middle' />
            </Box>
          </Hidden>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Box display='flex' flexDirection='column'>
              {navLinks.map(({ text }) => (
                <Box
                  sx={{ margin: 1, fontSize: '20px' }}
                  key={text}
                  fontSize='20px'
                  align='center'
                  width='100%'
                  fontWeight='bold'
                >
                  {text}
                </Box>
              ))}
            </Box>
          </Box>
          <Hidden mdUp>
            <Box display='flex' justifyContent='center' pt='15px' pb='10px'>
              <Divider sx={{ width: '30%' }} variant='middle' />
            </Box>
          </Hidden>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'row', md: 'column' }
              }}
            >
              {socialMediaIcons.map(({ id, icon }) => (
                <Icon sx={{ margin: 1, fontSize: '50px' }} key={id}>
                  {icon}
                </Icon>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Footer
