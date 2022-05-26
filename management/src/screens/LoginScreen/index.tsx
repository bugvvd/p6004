import React from 'react';

// components
import {
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import LoginForm from './LoginForm/LoginForm';

// types
import {LoginScreenProps} from '../types';

const LoginScreen = ({navigation, route}: LoginScreenProps): JSX.Element => {
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

  const onPressLogin = (): void => {
    console.log('login');
    // wrap up username + passwod -> dispatch
  };

  const onPressRegister = (): void => {
    console.log('register');
    navigation.navigate('Register');
  };

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
            {name: 'Login', callback: onPressLogin},
            {name: 'Register', callback: onPressRegister},
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

export default LoginScreen;
