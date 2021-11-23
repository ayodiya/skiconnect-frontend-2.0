import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Hidden from '@mui/material/Hidden'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import ButtonBase from '../components/buttons/buttonBase'
import CircularProgress from '@mui/material/CircularProgress'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { Link } from 'react-router-dom'
import { Form, Formik } from 'formik'
import AuthPage from '../components/AuthPage'
import InputField from '../components/forms/InputField'
import InputFieldError from '../components/forms/InputFieldError'
import { LANDING_ROUTE } from '../utils/routes'
import registerFormValidator, {
  FIRST_NAME,
  FIRST_NAME_LABEL,
  LAST_NAME,
  LAST_NAME_LABEL,
  GENDER,
  GENDER_LABEL,
  EMAIL,
  EMAIL_LABEL,
  PASSWORD,
  PASSWORD_LABEL,
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_LABEL
} from '../validator/registerFormValidator'

const initialValues = {
  [FIRST_NAME]: '',
  [LAST_NAME]: '',
  [EMAIL]: '',
  [PASSWORD]: '',
  [CONFIRM_PASSWORD]: '',
  [GENDER]: ''
}

const genderValues = [
  { value: 'Male', text: 'Male' },
  { value: 'Female', text: 'Female' },
  { value: 'Non-binary', text: 'Non-binary' }
]

const Register = () => {
  return (
    <AuthPage>
      <Box
        sx={{
          paddingTop: { lg: '100px' },
          paddingRight: { lg: '150px' },
          paddingBottom: '100px'
        }}
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
              SIGN UP
            </Box>
          </Hidden>
          <Box display='flex' justifyContent='center'>
            <Paper
              elevation={2}
              sx={{
                width: { xs: '350px', md: '450px' },
                minHeight: '400px',
                borderRadius: '20px',
                padding: '30px'
              }}
            >
              <Box display='flex' justifyContent='center'>
                <Formik
                  initialValues={initialValues}
                  validationSchema={registerFormValidator}
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
                      <Grid
                        container
                        spacing={2}
                        justifyContent='center'
                        alignItems='center'
                      >
                        <Grid item xs={12} md={6}>
                          <Box pt='20px'>
                            <InputField
                              name={FIRST_NAME}
                              type='text'
                              label={FIRST_NAME_LABEL}
                              onBlur={handleBlur}
                              error={
                                touched[FIRST_NAME] &&
                                errors[FIRST_NAME] !== undefined
                              }
                              onChange={handleChange}
                              sx={{
                                borderRadius: '10px',
                                width: { xs: '280px', md: '200px' }
                              }}
                              variant='outlined'
                              value={values[FIRST_NAME]}
                            />
                            {errors[FIRST_NAME] &&
                              touched[FIRST_NAME] &
                                <InputFieldError errorText={errors[EMAIL]} />}
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Box pt='20px'>
                            <InputField
                              name={LAST_NAME}
                              type='text'
                              label={LAST_NAME_LABEL}
                              onBlur={handleBlur}
                              error={
                                touched[LAST_NAME] &&
                                errors[LAST_NAME] !== undefined
                              }
                              onChange={handleChange}
                              sx={{
                                borderRadius: '10px',
                                width: { xs: '280px', md: '200px' }
                              }}
                              variant='outlined'
                              value={values[LAST_NAME]}
                            />
                            {errors[LAST_NAME] && touched[LAST_NAME] && (
                              <InputFieldError errorText={errors[LAST_NAME]} />
                            )}
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box pt='10px'>
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
                        </Grid>
                        <Grid item xs={12}>
                          <Box pt='10px'>
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
                        </Grid>
                        <Grid item xs={12}>
                          <Box pt='10px'>
                            <InputField
                              name={CONFIRM_PASSWORD}
                              type='password'
                              label={CONFIRM_PASSWORD_LABEL}
                              onBlur={handleBlur}
                              error={
                                touched[CONFIRM_PASSWORD] &&
                                errors[CONFIRM_PASSWORD] !== undefined
                              }
                              onChange={handleChange}
                              sx={{
                                borderRadius: '10px',
                                width: { xs: '280px', md: '400px' }
                              }}
                              variant='outlined'
                              value={values[CONFIRM_PASSWORD]}
                            />
                            {errors[CONFIRM_PASSWORD] &&
                              touched[CONFIRM_PASSWORD] && (
                                <InputFieldError
                                  errorText={errors[CONFIRM_PASSWORD]}
                                />
                            )}
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box pt='10px'>
                            <FormControl>
                              <InputLabel>
                                {GENDER_LABEL}
                              </InputLabel>
                              <Select
                                label={GENDER_LABEL}
                                name={GENDER}
                                value={values[GENDER]}
                                sx={{
                                  borderRadius: '10px',
                                  width: { xs: '280px', md: '400px' }
                                }}
                                onChange={handleChange}
                              >
                                {genderValues.map(({ value, text }) => (
                                  <MenuItem key={value} value={value}>
                                    {text}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                            {errors[GENDER] && touched[GENDER] && (
                              <InputFieldError errorText={errors[GENDER]} />
                            )}
                          </Box>
                        </Grid>
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
                              isSubmitting ? <CircularProgress /> : 'Sign up'
                            }
                            variant='contained'
                            type='submit'
                          />
                        </Box>
                      </Grid>
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
                  component={Link}
                  to={LANDING_ROUTE}
                  text='Login'
                  variant='contained'
                  type='submit'
                />
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </AuthPage>
  )
}

export default Register
