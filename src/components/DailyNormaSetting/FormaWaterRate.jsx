import React from 'react';
import { FormaCalculation, TitlePart } from './DailyNorma.styled';

import { rateOutSchema } from 'js/validation/schemas';
import { useFormik } from 'formik';
import { Input } from 'components/Form/Input.styled';
import { InputError } from 'components/Form/InputError.styled';
import { updateWaterRateThunk } from 'redux/auth/thunk';
import { useDispatch, useSelector } from 'react-redux';
import { selectorWaterRate } from 'redux/auth/selectors';
import { fetchMonthThunk, fetchTodayThunk } from 'redux/userData/thunk';
import Button from 'CommonStyle/Button';

const FormaWaterRate = ({ onClose }) => {
  const dispatch = useDispatch();
  const waterRate = useSelector(selectorWaterRate);
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    // resetForm,
  } = useFormik({
    initialValues: {
      rate: (waterRate / 1000).toFixed(2),
    },
    validationSchema: rateOutSchema,
    onSubmit: async values => {
      await dispatch(updateWaterRateThunk(values.rate)).unwrap();
      await dispatch(fetchTodayThunk()).unwrap();
      await dispatch(fetchMonthThunk(new Date().getMonth())).unwrap();
      onClose();
    },
  });

  return (
    <>
      <TitlePart>Write down how much water you will drink in liters:</TitlePart>
      <FormaCalculation $gap={'24px'} onSubmit={handleSubmit}>
        <Input
          type="number"
          step="0.001"
          name="rate"
          value={values.rate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rate && errors.rate}
        />
        {touched.rate && errors.rate && <InputError>{errors.rate}</InputError>}

        <Button type="submit" $width="160px" $marginLeft="auto">
          Save
        </Button>
      </FormaCalculation>
    </>
  );
};

export default FormaWaterRate;
