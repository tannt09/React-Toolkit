// Lib
import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

// Import
import { auth } from '@/connect_firebase/config/firebase'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const RegisterPage = () => {
  const [error, setError] = useState('')

  const register = ({ email, password }) => {
    setError('')
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user)
        alert('User register success : ' + email)
      })
      .catch((err) => setError(err.message))
  }

  useEffect(() => {
    if (error === '') return
    alert('Register error : ' + error)
  }, [error])

  return (
    <React.Fragment>
      <h1>Register</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            register({ email: values.email, password: values.password })
            setSubmitting(false)
            resetForm()
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: 'flex', flexDirection: 'column' }}>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  )
}

export default RegisterPage
