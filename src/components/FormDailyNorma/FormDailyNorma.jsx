import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { StyledFormDailyNorma } from './FormDailyNorma.styled';
import { useSelector } from 'react-redux';

const initialValues = {
  gender: 'female',
  weight: '',
  activityTime: '',
  personalAmount: '',
  calculatedQuantity: '',
};

const FormDailyNorma = ({ onSave }) => {
  const [formData, setFormData] = useState(initialValues);
  const [calculatedQuantity, setCalculatedQuantity] = useState('');

  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  useEffect(() => {
    const { gender, weight, activityTime } = formData;

    if (gender && weight && activityTime) {
      const M = parseFloat(weight);
      const T = parseFloat(activityTime);
      let calculatedValue;
      if (gender === 'female') {
        calculatedValue = M * 0.03 + T * 0.4;
      } else {
        calculatedValue = M * 0.04 + T * 0.6;
      }
      setCalculatedQuantity(calculatedValue.toFixed(2));
    }
  }, [formData]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveCalcQuantity = async () => {
    try {
      let bodyData;
      if (formData.personalAmount) {
        bodyData = { personalAmount: formData.personalAmount };
      } else {
        bodyData = { calculatedQuantity };
      }

      const response = await fetch(
        'https://h2ometer.onrender.com/users/update',
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ waterRate: bodyData }),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to save data to the backend');
      }

      toast.success('Data saved successfully');
    } catch (error) {
      console.error('Error saving data to backend:', error.message);
      toast.error('Failed to save data to backend');
    }
  };

  return (
    <StyledFormDailyNorma
      className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <ToastContainer />
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
            <label htmlFor="Woman" className="genderLabel">
              <input
                className="genderInput"
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              For woman
            </label>
          </div>
          <div className="genderBtn">
            <label htmlFor="Man" className="genderLabel">
              <input
                className="genderInput"
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
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
            value={formData.weight}
            onChange={handleChange}
          />
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
            value={formData.activityTime}
            onChange={handleChange}
          />
        </div>
        <div className="req-amount-container">
          <p>The required amount of water in liters per day:</p>
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
          value={formData.personalAmount}
          onChange={handleChange}
        />
      </div>
      <div className="save-btn-container">
        <button className="save-btn" type="button" onClick={saveCalcQuantity}>
          Save
        </button>
      </div>
    </StyledFormDailyNorma>
  );
};

export default FormDailyNorma;
