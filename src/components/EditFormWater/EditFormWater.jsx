import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

import { ReactComponent as IconPlus } from 'assets/images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from 'assets/images/icons/minus-small.svg';

import { StyledFormWater } from './EditFormWater.styled';
import { editWaterIntakeThunk } from '../../redux/calendar/calendarSlice';

import {
  selectWaterEditingPortionId,
  selectWaterProgressData,
} from '../../redux/calendar/calendarSlice.selectors';

const addWaterSchema = Yup.object({
  amount: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .matches(/\d{2,}/g)
    .required('Required'),
  time: Yup.string()
    .matches(/^(\d{2}:\d{2})$/, {
      message: 'Entered date must match following format hh:mm (10:25)',
    })
    .required('Required'),
});

const WATER_AMOUNT_DIFFERENCE = 50;
const currentDate = new Date();

const initialValues = {
  time: `${format(currentDate, 'HH')}:${format(currentDate, 'mm')}`,
  amount: '250',
};

const EditFormWater = ({ onSave }) => {
  const dispatch = useDispatch();
  const waterData = useSelector(selectWaterProgressData);
  const selectedEditingPortionId = useSelector(selectWaterEditingPortionId);
  const [localWaterAmount, setLocalWaterAmount] = useState(250);
  const {
    handleChange,
    handleSubmit,
    values: { time, amount },
    errors,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema: addWaterSchema,
    onSubmit: values => {
      dispatch(
        editWaterIntakeThunk({
          portionId: selectedEditingPortionId,
          formData: values,
        })
      )
        .unwrap()
        .then(() => {
          toast.success('Your intake record was saved!');
          onSave();
        });
    },
  });

  const handleBlur = () => {
    setFieldValue(
      'amount',
      localWaterAmount ? localWaterAmount.toString() : '0'
    );
  };

  const handleAddWaterAmount = () => {
    const number = Number.parseInt(amount) + WATER_AMOUNT_DIFFERENCE;
    setFieldValue('amount', number.toString());
  };
  const handleReduceWaterAmount = () => {
    const number = Number.parseInt(amount) - WATER_AMOUNT_DIFFERENCE;
    setFieldValue('amount', number <= 0 ? '0' : number.toString());
  };

  const currentDate = `${format(new Date(), 'd')}/${format(
    new Date(),
    'L'
  )}/${new Date().getFullYear()}`;
  const currentDateData = waterData?.drunkedWater?.find(
    date => date.day === currentDate
  )?.waterIntake;
  const currentEditingPortion = currentDateData?.find(
    record => record._id === selectedEditingPortionId
  );
  const amPm = Number.parseInt(time.split(':')[0], 10) > 12 ? 'AM' : 'PM';
  return (
    <StyledFormWater onSubmit={handleSubmit}>
      <div className="edit">
        <div>
          <p>value: {currentEditingPortion.amount}ml</p>
          <p>
            time: {currentEditingPortion.time} {amPm}
          </p>
        </div>
        <h3 className="editTitle">Choose a value</h3>
        <p className="editText">Amount of water</p>
        <div className="editBtnDiv">
          <button
            onClick={handleReduceWaterAmount}
            className="editBtn"
            type="button"
          >
            <IconMinus stroke={'var(--blue)'} />
          </button>
          <div className="amountDiv">
            <span>{amount}ml</span>
          </div>
          <button
            onClick={handleAddWaterAmount}
            className="editBtn"
            type="button"
          >
            <IconPlus stroke={'var(--blue)'} />
          </button>
        </div>
      </div>

      <div className="timeDiv">
        <label htmlFor="time">Recording time:</label>
        <input
          type="text"
          id="time"
          name="time"
          value={time}
          onChange={handleChange}
          className="recordsField"
          placeholder="21:10"
        />
        {errors.time ? <div>{errors.time}</div> : null}
      </div>

      <div className="enterDiv">
        <label htmlFor="water">Enter the value of the water used:</label>
        <input
          type="number"
          id="water"
          name="amount"
          value={localWaterAmount}
          onBlur={handleBlur}
          onChange={({ target: { value } }) =>
            setLocalWaterAmount(Number.parseInt(value))
          }
          className="recordsField"
          placeholder="250"
        />
        {errors.amount ? <div>{errors.amount}</div> : null}
      </div>

      <div className="footerDiv">
        <div className="saveDiv">
          <span>{amount}ml</span>
        </div>
        <button className="saveBtn" type="submit">
          Save
        </button>
      </div>
    </StyledFormWater>
  );
};

export default EditFormWater;
