import React from 'react'

import { Formik, Form } from 'formik'
import * as yup from 'yup'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'

const loginSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .max(20, 'Password should be of maximum 20 characters length')
    .required('Password is required'),
})

export const Login = () => {
  console.log('LOGIn')

  return (
    <Grid
      container
      justify='center'
      alignItems='center'
      style={{ height: 'calc(100vh - 164px)' }}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values) => {
          console.log(values)
        }}>
        {({ errors, touched, handleChange }) => (
          <Grid item xs={12} md={6} sm={7}>
            <Form>
              <Grid container direction='column'>
                <TextField
                  id='email'
                  name='email'
                  label='Email'
                  placeholder='commerce@mail.com'
                  type='email'
                  onChange={handleChange}
                  error={Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  margin='normal'
                  variant='outlined'
                />

                <TextField
                  id='password'
                  name='password'
                  label='Password'
                  onChange={handleChange}
                  type='password'
                  error={Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  margin='normal'
                  variant='outlined'
                />
                <Button color='primary' type='submit'>
                  login
                </Button>
              </Grid>
            </Form>
          </Grid>
        )}
      </Formik>
    </Grid>
  )
}
