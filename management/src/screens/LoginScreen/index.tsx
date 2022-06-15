import React from 'react';

// components
import {
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  View,
  useWindowDimensions,
} from 'react-native';
import {Button, TextInput} from 'react-native-paper';


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

  const {width, height} = useWindowDimensions();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      testID="myFirstTest">
      <ScrollView contentContainerStyle={styles(width, height).container}>
        <TextInput
          placeholder="Username"
          onChangeText={setUsername}
          onBlur={isValidUsername}
          testID="login-username"
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          onBlur={isValidPassword}
          testID="login-password"
        />
        <View style={styles(width, height).actionContainer}>
          <Button onPress={onPressLogin} testID="login-button">
            Login
          </Button>
          <Button onPress={onPressRegister} testID="register-button">
            Register
          </Button>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    actionContainer: {flexDirection: 'row', justifyContent: 'center'},
  });

export default LoginScreen;
