import React from 'react';

// components
import {
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import LoginForm from './LoginForm/LoginForm';

// redux
import {useAppDispatch} from '../../redux/typedReduxHooks';
import {login} from '../../redux/slices/loginStateSlice';

// types
import {LoginScreenProps} from '../types';

export const demoFormValue = {
  username: 'admin',
  password: '12345',
};

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

  const dispatch = useAppDispatch();
  const onPressLogin = (): void => {
    dispatch(login(demoFormValue));
  };

  const onPressRegister = (): void => {
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
