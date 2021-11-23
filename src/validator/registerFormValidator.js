import * as Yup from 'yup'

export const FIRST_NAME = 'first_name'
export const FIRST_NAME_LABEL = 'First Name'

export const LAST_NAME = 'last_name'
export const LAST_NAME_LABEL = 'Last Name'

export const EMAIL = 'email'
export const EMAIL_LABEL = 'Email'

export const GENDER = 'GENDER'
export const GENDER_LABEL = 'Gender'

export const PASSWORD = 'password'
export const PASSWORD_LABEL = 'Password'

export const CONFIRM_PASSWORD = 'confirm_password'
export const CONFIRM_PASSWORD_LABEL = 'Confirm Password'

export default Yup.object({
  [EMAIL]: Yup.string()
    .label(EMAIL_LABEL)
    .required()
    .email(),
  [PASSWORD]: Yup.string()
    .label(PASSWORD_LABEL)
    .required()
    .min(8),
  [GENDER]: Yup.string()
    .label(GENDER_LABEL)
    .required()

})
