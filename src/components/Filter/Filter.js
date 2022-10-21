import React from 'react';
import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <Input type="text" value={value} onChange={onChange}></Input>
    </label>
  );
};

export default Filter;
