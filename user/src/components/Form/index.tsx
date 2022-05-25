import React from 'react';

// components
import {View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';

// types
import {FormProps} from './types';

const Form = ({field, action}: FormProps): JSX.Element => {
  // TODO: input authentication + inline error message

  return (
    <View>
      {/* error messages */}
      {/* input fields */}
      {field?.map(item => (
        <TextInput
          placeholder={item.placeholder ?? item.name}
          key={item.name}
          onChangeText={item.onValueChange}
          onBlur={item.validate}
        />
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
