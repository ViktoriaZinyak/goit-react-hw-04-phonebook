import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px 15px;
  border: 1px solid grey;
  label {
    margin-bottom: 15px;
  }
  input {
    display: block;
    margin-top: 5px;
  }
  button {
    margin-top: 15px;
    width: 130px;
  }
`;
