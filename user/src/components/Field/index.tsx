import React from 'react';

// components
import {TextInput} from 'react-native-paper';

// types
import type {FieldProps} from './types';

const Field = ({
  name,
  type,
  placeholder,
  description,
  onValueChange,
  validate,
  options,
}: FieldProps) => {
  return (
    <TextInput
      placeholder={placeholder ?? name}
      key={name}
      onChangeText={onValueChange}
      onBlur={validate}
    />
  );
};

export default Field;
