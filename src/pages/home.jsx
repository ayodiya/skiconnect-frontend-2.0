import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import Divider from '@material-ui/core/Divider'
import ButtonBase from '../components/buttons/buttonBase'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'
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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#28EBFF',
    minHeight: '100vh',
    width: '100%',
    color: 'white'
  },
  pageBox: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },
  headerText: {
    color: '#002E9F',
    fontSize: '35px',
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: '100px',
    paddingBottom: '10px',
    justifyContent: 'center',
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      fontSize: '70px'
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '150px',
      fontSize: '50px'
    }
  },
  paper: {
    width: '300px',
    minHeight: '400px',
    borderRadius: '20px',
    [theme.breakpoints.up('md')]: {
      width: '450px'
    }
  },
  loginButton: {
    fontSize: '15px',
    width: '280px',
    height: '50px',
    borderRadius: '10px',
    textTransform: 'none',
    [theme.breakpoints.up('md')]: {
      width: '400px'
    }
  },
  createButton: {
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
  },
  link: {
    textTransform: 'none',
    textDecoration: 'none',
    paddingTop: '15px',
    paddingBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    flexDirection: 'column'
  },
  alignCenter: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  form: {
    [theme.breakpoints.up('lg')]: {
      paddingTop: '100px',
      paddingRight: '150px'
    }
  },
  textFieldStyle: {
    borderRadius: '10px',
    width: '280px',
    [theme.breakpoints.up('md')]: {
      width: '400px'
    }
  }
}))

const initialValues = {
  [EMAIL]: '',
  [PASSWORD]: ''
}

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <AuthPage>
        <Box className={classes.form}>
          <Box display='flex' justifyContent='center' flexDirection='column'>
            <Hidden lgUp>
              <Box className={classes.headerText}>SKICONNECT</Box>
            </Hidden>
            <Box display='flex' justifyContent='center'>
              <Paper elevation={2} className={classes.paper}>
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
                            InputProps={{
                              className: classes.textFieldStyle
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
                            InputProps={{
                              className: classes.textFieldStyle
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
                            className={classes.loginButton}
                            disabled={isSubmitting}
                            color='primary'
                            text={
                              isSubmitting ? (
                                <CircularProgress
                                  className={classes.colorWhite}
                                />
                              ) : (
                                'Log In'
                              )
                            }
                            variant='contained'
                            type='submit'
                          />
                        </Box>
                        <Box className={classes.link} component={Link} to='!#'>
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
                    className={classes.createButton}
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
