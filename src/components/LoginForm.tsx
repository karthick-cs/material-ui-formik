import React from 'react';
import {Form, Formik} from 'formik';
import {Button, TextField} from '@mui/material';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const LoginForm = () => {

    const handleFormSubmit = (values: any)=> {
        // Handle form submission
        console.log(values);
        // do api call
    }

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
        >
            {({
                  handleSubmit,
                  touched,
                  errors,
                  handleChange,
                  handleBlur
              }) => (
                <Form onSubmit={handleSubmit}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        name="email"
                        fullWidth
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.email && errors.email)}
                        helperText={touched.email && errors.email}
                        sx={{mb: 2}}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        name="password"
                        type="password"
                        fullWidth
                        required
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={Boolean(touched.password && errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{mb: 2}}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                </Form>
            )}
        </Formik>
    );
};


export default LoginForm;