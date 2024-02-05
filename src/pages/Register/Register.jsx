import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledRegisterPage } from './Register.styled';
import { registerThunk } from '../../redux/auth/authSlice';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from 'constants/routes';
import eyeOpened from '../../assets/images/icons/eye.svg';
import eyeSlash from '../../assets/images/icons/eye-slash.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({

      email: Yup.string()
        .email('Invalid email address')
        .matches(
          /^[-?\w.?%?]+@\w+.{1}\w{2,4}$/,
          'Enter a valid email. For example user@gmail.com'
        )
        .required('Type your email please'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(64, 'Password must be at most 64 characters')
        // .matches(/[a-zA-Z]/, 'Must contain at least one letter')
        .required('Type your password please'),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Repeat your password please'),
    }),

    onSubmit: async (data, { resetForm }) => {
      try {
        const formData = { email: data.email, password: data.password };
        await dispatch(registerThunk(formData));
        resetForm();
        console.log('Registration  successful!')
        toast.success('Registration successful!');
      } catch (error) {
        console.error('Registration Error:', error);
        toast.error('Registration failed. Please try again.');
      }
    },
  
    // onSubmit: data => {
    //   const formData = { email: data.email, password: data.password };
    //   dispatch(registerThunk(formData));
    //   formik.resetForm();
    // },
  });

  return (
    <StyledRegisterPage className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <div className="backgr-elem-decktop"></div>
        <div className="content">
          <div className="register-form-container">
            <h1>Sign Up</h1>
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
                  className={formik.touched.email && formik.errors.email ? 'errorInput'  : ''}
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
                  className={formik.touched.password && formik.errors.password ? 'errorInput' : ''}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="errorMsg">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="password-container">
                <label htmlFor="confirmPassword">
                  Confirm Password
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
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Repeat password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className={formik.touched.confirmPassword && formik.errors.confirmPassword ? 'errorInput' : ''}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div className="errorMsg">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>

              <button type="submit">Submit</button>
            </form>
            <div>
              <Link to={LOGIN_ROUTE}>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" style={{ marginTop: '60px' }}/>
    </StyledRegisterPage>
  );
};

export default Register;
