import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledLoginPage } from './Login.styled';
import { loginThunk } from '../../redux/auth/authSlice';
import { Link } from 'react-router-dom';
import { REGISTER_ROUTE } from 'constants/routes';

const Login = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(64, 'Password must be at most 64 characters')
        .required('Required'),
    }),
    onSubmit: data => {
      dispatch(loginThunk(data));
      formik.resetForm();

      localStorage.setItem('userEmail', formik.values.email);

    },
  });

  return (
    <StyledLoginPage>
      <div className='login-form-container'>
      <h1>Sign In</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit">Sign In</button>
      </form>
      <div>
        <Link to={REGISTER_ROUTE}>Sign Up</Link>
      </div>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
