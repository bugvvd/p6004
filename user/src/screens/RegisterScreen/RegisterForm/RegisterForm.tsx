import React from 'react';

// components
import Form from '../../../components/Form';

// types
import type RegisterFormProps from './types';

const RegisterForm = (props: RegisterFormProps): JSX.Element => {
  return <Form {...props} />;
};

export default RegisterForm;
