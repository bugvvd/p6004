import React from 'react';

// components
import {View as NativeView} from 'react-native';
import {Button as RNPButton} from 'react-native-paper';
import Field from '../Field';

// types
import {FormProps} from './types';

const Form = ({field, action}: FormProps): JSX.Element => {
  // TODO: input authentication + inline error message

  return (
    <NativeView>
      {/* error messages */}
      {/* input fields */}
      {field?.map(props => (
        <Field key={props.name} {...props} />
      ))}
      {/* actions */}
      {action?.map(item => (
        <RNPButton key={item.name} onPress={item.callback}>
          {item.name}
        </RNPButton>
      ))}
    </NativeView>
  );
};

export default Form;
