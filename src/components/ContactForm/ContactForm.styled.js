import styled from 'styled-components';

import { Form, Field } from 'formik';

export const ContactFormList = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ContactFormLable = styled.label`
  font-size: 24px;
  font-weight: 600;
`;

export const ContactFormInput = styled(Field)`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 48px;
  padding: 8px;

  background-color: #ffffff;

  border: 3px solid #111827;
  border-radius: 4px;
  outline: 0px;

  font-size: 18px;
  color: #111827;

  :hover,
  :focus {
    border: 3px solid #6366f1;
  }
`;

export const ContactFormButton = styled.button`
  box-sizing: border-box;
  display: block;

  width: 100%;
  height: 48px;
  padding: 8px;

  background-color: #111827;

  border: 3px solid #111827;
  border-radius: 4px;
  outline: 0px;

  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  text-transform: uppercase;

  :hover,
  :focus {
    background-color: #6366f1;
  }
`;
