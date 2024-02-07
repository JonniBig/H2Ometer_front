import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { StyledFormDailyNorma } from './FormDailyNorma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserSettingsThunk } from '../../redux/auth/authSlice';
import { useTranslation } from 'react-i18next';

const initialValues = {
  gender: 'female',
  weight: '',
  activityTime: '',
  personalAmount: '',
  calculatedQuantity: '',
};

const FormDailyNorma = ({ onClose }) => {
  const [formData, setFormData] = useState(initialValues);
  const [calculatedQuantity, setCalculatedQuantity] = useState('');
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.theme.isDarkMode);
  const { t } = useTranslation();

  useEffect(() => {
    const { gender, weight, activityTime } = formData;

    if (gender && weight && activityTime) {
      const M = parseFloat(weight);
      const T = parseFloat(activityTime);

      const calculatedValue =
        gender === 'female' ? M * 0.03 + T * 0.4 : M * 0.04 + T * 0.6;

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

  const saveCalcQuantity = async e => {
    e.preventDefault();
    try {
      const bodyData = formData.personalAmount
        ? { waterRate: Number.parseFloat(formData.personalAmount) }
        : { waterRate: Number.parseFloat(calculatedQuantity) };

      await dispatch(updateUserSettingsThunk(bodyData)).unwrap();

      toast.success('Data saved successfully');
    } catch (error) {
      console.error('Error saving data to backend:', error.message);
      toast.error('Failed to save data to backend');
    } finally {
      onClose();
    }
  };

  return (
    <StyledFormDailyNorma
      className={`secondary-blue ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
      onSubmit={saveCalcQuantity}
    >
      <div className="formulas-container">
        <div className="formulas-string">
          <div className="formula-box">
            <span className="formula-gender">{t('formulas.forGirl')}</span>
            <span className="formula">{t('formulas.girlFormula')}</span>
          </div>
          <div className="formula-box">
            <span className="formula-gender">{t('formulas.forMan')}</span>
            <span className="formula">{t('formulas.manFormula')}</span>
          </div>
        </div>
        <div className="coment-container">
          <span className="coment">{t('formulas.comment')}</span>
        </div>
      </div>
      <div className="values-container">
        <div className="to-calc">{t('values.calculateRate')}</div>
        <div className="gender-container">
          <div className="genderBtn">
            <label className="genderLabel">
              <input
                className="genderInput"
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleChange}
              />
              {t('values.forWoman')}
            </label>
          </div>
          <div className="genderBtn">
            <label className="genderLabel">
              <input
                className="genderInput"
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleChange}
              />
              {t('values.forMan')}
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="weight">{t('values.weightLabel')}</label>
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
          <label htmlFor="activityTime">{t('values.activityTimeLabel')}</label>
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
          <p className="req-amount-text">{t('values.requiredAmountLabel')}</p>
          <span className="volume">{calculatedQuantity + 'L'}</span>
        </div>
      </div>
      <div className="personal-amount-container">
        <label htmlFor="personalAmount">
          {t('values.personalAmountLabel')}
        </label>
        <input
          type="number"
          id="personalAmount"
          name="personalAmount"
          placeholder="0"
          max="15"
          value={formData.personalAmount}
          onChange={handleChange}
        />
      </div>
      <div className="save-btn-container">
        <button className="save-btn" type="submit">
          {t('values.saveButton')}
        </button>
      </div>
    </StyledFormDailyNorma>
  );
};

export default FormDailyNorma;
