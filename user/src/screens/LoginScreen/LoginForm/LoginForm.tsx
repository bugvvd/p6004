import React from 'react';

// components
import Form from '../../../components/Form';

// types
import type LoginFormProps from './types';

const LoginForm = (props: LoginFormProps): JSX.Element => {
  return <Form {...props} />;
};

export default LoginForm;
