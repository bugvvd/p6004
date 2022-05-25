import React from 'react';

// components
import {
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import LoginForm from './LoginForm';

// types
import {LoginScreenProps} from '../../../lib/types/screens';

export default function LoginScreen({
  navigation,
  route,
}: LoginScreenProps): JSX.Element {
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

  const onSubmit = (): void => {
    console.log('submit');
    // wrap up username + passwod -> dispatch
  };

  const onPressRegister = (): void => {
    console.log('register');
    // navigate to register
  };

  console.log(username, password);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView contentContainerStyle={styles.container}>
        <LoginForm
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
          ]}
          action={[
            {name: 'Login', callback: onSubmit},
            {name: 'Register', callback: onPressRegister},
          ]}
        />
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
