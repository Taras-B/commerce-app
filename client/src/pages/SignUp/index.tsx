import React from 'react'
import { useDispatch } from 'react-redux'

import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { authActions } from '../../store/auth/actions'

const signupSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  username: yup.string().required('username is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .max(20, 'Password should be of maximum 20 characters length')
    .required('Password is required'),
})

interface ISignUpForm {
  email: string
  username: string
  password: string
}

export const SignUp = () => {
  const dispatch = useDispatch()
  const onSubmitForm = (values: ISignUpForm, actions: FormikHelpers<ISignUpForm>) => {
    console.log(values)
    dispatch(authActions.fetchSignUp(values))
    actions.resetForm()
  }
  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      style={{ height: 'calc(100vh - 164px)' }}>
      <Formik
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        validationSchema={signupSchema}
        onSubmit={onSubmitForm}>
        {({ errors, touched, handleChange, values }) => (
          <Grid item xs={12} md={6} sm={7}>
            <Form>
              <Grid container direction='column'>
                <TextField
                  id='email'
                  name='email'
                  label='Email'
                  placeholder='commerce@mail.com'
                  type='email'
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  margin='normal'
                  variant='outlined'
                />
                <TextField
                  id='username'
                  name='username'
                  label='User Name'
                  type='text'
                  value={values.username}
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  margin='normal'
                  variant='outlined'
                />

                <TextField
                  id='password'
                  name='password'
                  label='Password'
                  onChange={handleChange}
                  type='password'
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  margin='normal'
                  variant='outlined'
                />
                <Button color='primary' type='submit'>
                  signup
                </Button>
              </Grid>
            </Form>
          </Grid>
        )}
      </Formik>
    </Grid>
  )
}
