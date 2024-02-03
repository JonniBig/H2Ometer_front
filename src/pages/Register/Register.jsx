import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledRegisterPage } from './Register.styled';
import { registerThunk } from '../../redux/auth/authSlice';
import { Link } from 'react-router-dom';
import { LOGIN_ROUTE } from 'constants/routes';

const Register = () => {
  const dispatch = useDispatch();

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(64, 'Password must be at most 64 characters')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: data => {
      console.log(data);
      const formData = { email: data.email, password: data.password };
      dispatch(registerThunk(formData));
      formik.resetForm();
    },
  });

  return (
    <StyledRegisterPage>
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

              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Repeat password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div>{formik.errors.confirmPassword}</div>
                ) : null}
              </div>

              <button type="submit">Submit</button>
            </form>
            <div>
              <Link to={LOGIN_ROUTE}>Sign In</Link>
            </div>

            <button type="submit">Submit</button>

            <div>
              <Link to={LOGIN_ROUTE}>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </StyledRegisterPage>
  );
};

export default Register;
