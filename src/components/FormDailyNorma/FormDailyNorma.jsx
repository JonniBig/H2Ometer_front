import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StyledFormDailyNorma } from './FormDailyNorma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserSettingsThunk } from '../../redux/auth/authSlice';



const FormDailyNorma = ({ onClose }) => {
  
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const [calculatedQuantity, setCalculatedQuantity] = useState('');
  
  const formik = useFormik({
    initialValues: {
      gender: 'female',
      weight: '',
      activityTime: '',
      personalAmount: '',
    },
    validationSchema: Yup.object().shape({
      gender: Yup.string().required('Gender is required'),
      weight: Yup.number()
        .positive('Weight must be a positive number')
        .required('Weight is required'),
      activityTime: Yup.number()
        .positive('Activity time must be a positive number')
        .required('Activity time is required'),
      personalAmount: Yup.number().positive('Personal amount must be a positive number'),
    }),
    onSubmit: async (values) => {
      try {
        const bodyData = values.personalAmount
          ? { waterRate: parseFloat(values.personalAmount) }
          : { waterRate: parseFloat(calculatedQuantity) };

        await dispatch(updateUserSettingsThunk(bodyData)).unwrap();

        toast.success('Data saved successfully');
      } catch (error) {
        console.error('Error saving data to backend:', error.message);
        toast.error('Failed to save data to backend');
      } finally {
        onClose();
      }
    },
  });

  useEffect(() => {
    const { gender, weight, activityTime } = formik.values;

    if (gender && weight && activityTime) {
      const M = parseFloat(weight);
      const T = parseFloat(activityTime);

      const calculatedValue =
        gender === 'female' ? M * 0.03 + T * 0.4 : M * 0.04 + T * 0.6;

      setCalculatedQuantity(calculatedValue.toFixed(2));
    }
  }, [formik.values]);

  return (
    <StyledFormDailyNorma
      className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      onSubmit={formik.handleSubmit}
    >
      <div className="formulas-container">
        <div className="formulas-string">
          <div className="formula-box">
            <span className="formula-gender">For girl:</span>
            <span className="formula">V=(M*0,03) + (T*0,4)</span>
          </div>
          <div className="formula-box">
            <span className="formula-gender">For man:</span>
            <span className="formula"> V=(M*0,04) + (T*0,6)</span>
          </div>
        </div>
        <div className="coment-container">
          <span className="coment">
            * V is the volume of the water norm in liters per day, M is your
            body weight, T is the time of active sports, or another type of
            activity commensurate in terms of loads (in the absence of these,
            you must set 0).
          </span>
        </div>
      </div>
      <div className="values-container">
        <div className="to-calc">Calculate your rate</div>
        <div className="gender-container">
          <div className="genderBtn">
            <label className="genderLabel">
              <input
                className="genderInput"
                type="radio"
                name="gender"
                value="female"
                checked={formik.values.gender === 'female'}
                onChange={formik.handleChange}
              />
              For woman
            </label>
          </div>
          <div className="genderBtn">
            <label className="genderLabel">
              <input
                className="genderInput"
                type="radio"
                name="gender"
                value="male"
                checked={formik.values.gender === 'male'}
                onChange={formik.handleChange}
              />
              For man
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="weight">Your weight in kilograms: </label>
          <input
            type="number"
            id="weight"
            name="weight"
            placeholder="0"
            value={formik.values.weight}
            onChange={formik.handleChange}
            className={
              formik.touched.weight && formik.errors.weight
                ? 'errorInput'
                : ''
            }
          />
          {formik.touched.weight && formik.errors.weight ? (
            <div className="errorMsg">{formik.errors.weight}</div>
          ) : null}
          
        </div>
        <div>
          <label htmlFor="activityTime">
            The time of active participation in sports or other activities with
            a high physical load in hours:
          </label>
          <input
            type="number"
            id="activityTime"
            name="activityTime"
            placeholder="0"
            value={formik.values.activityTime}
            onChange={formik.handleChange}
            className={
              formik.touched.activityTime && formik.errors.activityTime
                ? 'errorInput'
                : ''
            }
          />
          {formik.touched.activityTime && formik.errors.activityTime ? (
            <div className="errorMsg">{formik.errors.activityTime}</div>
          ) : null}
        
        </div>
        <div className="req-amount-container">
          <p className="req-amount-text">
            The required amount of water in liters per day:
          </p>
          <span className="volume">{calculatedQuantity + 'L'}</span>
        </div>
      </div>
      <div className="personal-amount-container">
        <label htmlFor="personalAmount">
          Write down how much water you will drink:
        </label>
        <input
          type="number"
          id="personalAmount"
          name="personalAmount"
          placeholder="0"
          max="15"
          value={formik.values.personalAmount}
          onChange={formik.handleChange}
          className={
            formik.touched.personalAmount && formik.errors.personalAmount
              ? 'errorInput'
              : ''
          }
        />
        {formik.touched.personalAmount && formik.errors.personalAmount ? (
          <div className="errorMsg">{formik.errors.personalAmount}</div>
        ) : null}
      </div>
      <div className="save-btn-container">
        <button className="save-btn" type="submit">
          Save
        </button>
      </div>
    </StyledFormDailyNorma>
  );
};

export default FormDailyNorma;
