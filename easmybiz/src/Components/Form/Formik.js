import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';



const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    name: yup
        .string('Enter your Name')
        .min(8, 'Name should be of minimum 8 characters length')
        .required('Name is required'),

    mobile: yup
        .number(10, 'Enter correct Mobile Number')
        .required('Mobile is required'),

});

const FormValidation = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            mobile: '',
            message: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div>

            <form onSubmit={formik.handleSubmit}>
                <Container>
                    <Typography variant="h4" sx={{ marginY: 3 }}>Contact Us</Typography>
                    <TextField
                        sx={{
                            marginBlock: 3, '& .MuiInput-underline:after': {
                                borderBottomColor: '#90c404',
                            }, '& .MuiOutlined-root': { '& .Mui-focused fieldset': { borderColor: "#90c404" } }
                        }}
                        fullWidth
                        id="name"
                        name="name"
                        placeholder="Name"
                        variant="standard"

                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        sx={{
                            marginBlock: 3,
                            '& .MuiInput-underline:after': {
                                borderBottomColor: '#90c404',
                            }, '& .MuiOutlined-root': { '& .Mui-focused fieldset': { borderColor: "#90c404" } }
                        }}
                        fullWidth
                        variant="standard"
                        id="mobile"
                        name="mobile"
                        placeholder="Mobile"
                        type="number"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile && formik.errors.mobile}
                    />

                    <TextField
                        sx={{
                            marginBlock: 3, '& .MuiInput-underline:after': {
                                borderBottomColor: '#90c404',
                            }, '& .MuiOutlined-root': { '& .Mui-focused fieldset': { borderColor: "#90c404" } }
                        }}
                        fullWidth
                        variant="standard"
                        id="email"
                        name="email"
                        placeholder="E-mail"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        sx={{
                            marginBlock: 3, '& .MuiInput-underline:after': {
                                borderBottomColor: '#90c404',
                            }, '& .MuiOutlined-root': { '& .Mui-focused fieldset': { borderColor: "#90c404" } }
                        }}
                        fullWidth
                        variant="standard"
                        id="message"
                        name="message"
                        placeholder="Mobile"
                        type="number"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                </Container>
                <Button sx={{ marginBlock: 3, backgroundColor: "#90c404" }} variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default FormValidation;