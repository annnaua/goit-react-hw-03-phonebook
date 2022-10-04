import styled from 'styled-components';

export const FilterFormLable = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;

  font-size: 24px;
  font-weight: 600;
`;

export const FilterFormInput = styled.input`
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
