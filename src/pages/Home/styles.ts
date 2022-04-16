import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 20%;
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 24px;

  border: 0;
  border-radius: 4px;
  background-color: red;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
export const Input = styled.input`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  height: 48px;
  padding: 0 20px;
  font-size: 16px;
  color: #666;

  ::placeholder {
    color: #999;
  }
`;

export const EnterButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 15px;

  border: 0;
  border-radius: 4px;
  background: #2e51a2;

  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
