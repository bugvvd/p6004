import React from 'react';

// components
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import Field from '../Field';

// types
import {FormProps} from './types';

const Form = ({field, action}: FormProps): JSX.Element => {
  // TODO: input authentication + inline error message

  return (
    <View>
      {/* error messages */}
      {/* input fields */}
      {field?.map(props => (
        <Field key={props.name} {...props} />
      ))}
      {/* actions */}
      {action?.map(item => (
        <Button key={item.name} onPress={item.callback}>
          {item.name}
        </Button>
      ))}
    </View>
  );
};

export default Form;
