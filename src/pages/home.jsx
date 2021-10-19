import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Hidden from '@mui/material/Hidden'
import Divider from '@mui/material/Divider'
import ButtonBase from '../components/buttons/buttonBase'
import CircularProgress from '@mui/material/CircularProgress'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'

import AuthPage from '../components/AuthPage'
import InputField from '../components/forms/InputField'
import InputFieldError from '../components/forms/InputFieldError'
import loginFormValidator, {
  EMAIL,
  EMAIL_LABEL,
  PASSWORD,
  PASSWORD_LABEL
} from '../validator/loginFormValidator'

const initialValues = {
  [EMAIL]: '',
  [PASSWORD]: ''
}

const Home = () => {
  return (
    <>
      <AuthPage>
        <Box
          sx={{ paddingTop: { lg: '100px' }, paddingRight: { lg: '150px' } }}
        >
          <Box display='flex' justifyContent='center' flexDirection='column'>
            <Hidden lgUp>
              <Box
                sx={{
                  color: '#002E9F',
                  fontSize: { xs: '35px', md: '50px', lg: '70px' },
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  paddingTop: { xs: '100px', md: '150px' },
                  paddingBottom: '10px',
                  justifyContent: 'center',
                  display: 'flex'
                }}
              >
                SKICONNECT
              </Box>
            </Hidden>
            <Box display='flex' justifyContent='center'>
              <Paper
                elevation={2}
                sx={{
                  width: { xs: '300px', md: '450px' },
                  minHeight: '400px',
                  borderRadius: '20px'
                }}
              >
                <Box display='flex' justifyContent='center'>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={loginFormValidator}
                  >
                    {({
                      handleChange,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      isSubmitting,
                      handleBlur
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <Box pt='20px'>
                          <InputField
                            name={EMAIL}
                            type='text'
                            label={EMAIL_LABEL}
                            onBlur={handleBlur}
                            error={
                              touched[EMAIL] && errors[EMAIL] !== undefined
                            }
                            onChange={handleChange}
                            sx={{
                              borderRadius: '10px',
                              width: { xs: '280px', md: '400px' }
                            }}
                            variant='outlined'
                            value={values[EMAIL]}
                          />
                          {errors[EMAIL] && touched[EMAIL] && (
                            <InputFieldError errorText={errors[EMAIL]} />
                          )}
                        </Box>
                        <Box pt='20px'>
                          <InputField
                            name={PASSWORD}
                            type='password'
                            label={PASSWORD_LABEL}
                            onBlur={handleBlur}
                            error={
                              touched[PASSWORD] &&
                              errors[PASSWORD] !== undefined
                            }
                            onChange={handleChange}
                            sx={{
                              borderRadius: '10px',
                              width: { xs: '280px', md: '400px' }
                            }}
                            variant='outlined'
                            value={values[PASSWORD]}
                          />
                          {errors[PASSWORD] && touched[PASSWORD] && (
                            <InputFieldError errorText={errors[PASSWORD]} />
                          )}
                        </Box>
                        <Box fontWeight='bold' pt='20px'>
                          <ButtonBase
                            sx={{
                              fontSize: '15px',
                              width: { xs: '280px', md: '400px' },
                              height: '50px',
                              borderRadius: '10px',
                              textTransform: 'none'
                            }}
                            disabled={isSubmitting}
                            color='primary'
                            text={
                              isSubmitting ? <CircularProgress /> : 'Log In'
                            }
                            variant='contained'
                            type='submit'
                          />
                        </Box>
                        <Box
                          sx={{
                            textTransform: 'none',
                            textDecoration: 'none',
                            paddingTop: '15px',
                            paddingBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: '15px',
                            flexDirection: 'column'
                          }}
                          component={Link}
                          to='!#'
                        >
                          Forgot Password?
                        </Box>
                      </Form>
                    )}
                  </Formik>
                </Box>
                <Divider variant='middle' />
                <Box
                  display='flex'
                  justifyContent='center'
                  fontWeight='bold'
                  pt='15px'
                >
                  <ButtonBase
                    sx={{
                      fontSize: '15px',
                      width: '150px',
                      height: '50px',
                      borderRadius: '10px',
                      textTransform: 'none',
                      background: '#8dc133',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#8dc133'
                      }
                    }}
                    text='Create Account'
                    variant='contained'
                    type='submit'
                  />
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
      </AuthPage>
    </>
  )
}
export default Home
