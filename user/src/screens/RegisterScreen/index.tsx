import React from 'react';

// components
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import RegisterForm from './RegisterForm/RegisterForm';

// types
import {RegisterScreenProps} from '../types';

const RegisterScreen = ({
  navigation,
  route,
}: RegisterScreenProps): JSX.Element => {
  const [username, setUsername] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);

  const isValidUsername = (): boolean => {
    console.log('vaidate username');
    return false;
  };

  const isValidPassword = (): boolean => {
    console.log('vaidate password');
    return false;
  };

  const onPressRegister = (): void => {
    console.log('register');
    // wrap up username + passwod -> dispatch
  };

  const onPressContact = (): void => {
    console.log('contact');
    // navigate to register
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView contentContainerStyle={styles.container}>
        <RegisterForm
          field={[
            {
              type: 'plain',
              name: 'Username',
              onValueChange: setUsername,
              validate: isValidUsername,
            },
            {
              type: 'plain',
              name: 'Password',
              onValueChange: setPassword,
              validate: isValidPassword,
            },
            {
              type: 'plain',
              name: 'PasswordConfirmation',
              onValueChange: setPassword,
              validate: isValidPassword,
            },
          ]}
          action={[
            {name: 'Register', callback: onPressRegister},
            {name: 'Contact', callback: onPressContact},
          ]}
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default RegisterScreen;
