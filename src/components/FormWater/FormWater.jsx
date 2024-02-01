import { ReactComponent as IconPlus } from 'assets/images/icons/plus-small.svg';
import { ReactComponent as IconMinus } from 'assets/images/icons/minus-small.svg';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import { StyledFormWater } from './FormWater.styled';

const initialValues = {
  time: '',
  water: '',
};

const FormWater = () => {
  const handleChange = e => {};

  const saveAddedWater = async () => {};

  return (
    <StyledFormWater>
      <Formik initialValues={initialValues} onSubmit={(values, actions) => {}}>
        {() => (
          <Form>
            <div className="edit">
              <h3 className="editTitle">Choose a value</h3>
              <p className="editText">Amount of water</p>
              <div className="editBtnDiv">
                <button className="editBtn" type="button">
                  <IconMinus stroke={'var(--blue)'} />
                </button>
                <div className="amountDiv">
                  <span>ml</span>
                </div>
                <button className="editBtn" type="button">
                  <IconPlus stroke={'var(--blue)'} />
                </button>
              </div>
            </div>

            <div className="timeDiv">
              <label htmlFor="time">Recording time:</label>
              <Field
                type="number"
                id="time"
                name="time"
                className="recordsField"
                plaseholder="0"
              />
            </div>

            <div className="enterDiv">
              <label htmlFor="water">Enter the value of the water used:</label>
              <Field
                className="recordsField"
                type="number"
                id="water"
                name="water"
                onChange={handleChange}
                plaseholder="0"
              />
            </div>

            <div className="footerDiv">
              <div className="saveDiv">
                <span>ml</span>
              </div>
              <button
                className="saveBtn"
                type="button"
                onClick={saveAddedWater}
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </StyledFormWater>
  );
};

export default FormWater;
