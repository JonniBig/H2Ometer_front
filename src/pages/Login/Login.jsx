import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledLoginPage } from './Login.styled';
import { loginThunk, refreshThunk } from '../../redux/auth/authSlice';
import { Link } from 'react-router-dom';
import { FORGOT_PASSWORD_ROUTE, REGISTER_ROUTE } from 'constants/routes';
import eyeOpened from '../../assets/images/icons/eye.svg';
import eyeSlash from '../../assets/images/icons/eye-slash.svg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Type your email please'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(64, 'Password must be at most 64 characters')
        .required('Type your password please'),
    }),

    onSubmit: async data => {
      try {
        await dispatch(loginThunk(data)).unwrap();
        dispatch(refreshThunk());
        formik.resetForm();

        localStorage.setItem('userEmail', formik.values.email);
        toast.success('Login successful!');
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
      }
    },
  });

  return (
    <StyledLoginPage className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <div className="backgr-elem-decktop"></div>
        <div className="content">
          <div className="login-form-container">
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
                  className={
                    formik.touched.email && formik.errors.email
                      ? 'errorInput'
                      : ''
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="errorMsg">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="password-container">
                <label htmlFor="password">
                  Password
                  <div
                    className="show-psw-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <img
                        src={eyeOpened}
                        width={18}
                        height={18}
                        alt="Hide Password"
                      />
                    ) : (
                      <img
                        src={eyeSlash}
                        width={18}
                        height={18}
                        alt="Show Password"
                      />
                    )}
                  </div>
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={
                    formik.touched.password && formik.errors.password
                      ? 'errorInput'
                      : ''
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="errorMsg">{formik.errors.password}</div>
                ) : null}
              </div>

              <button type="submit">Sign In</button>
            </form>
            <div className="links-container">
              <Link to={REGISTER_ROUTE}>Sign Up</Link>
              <Link to={FORGOT_PASSWORD_ROUTE}>Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
    </StyledLoginPage>
  );
};

export default Login;
