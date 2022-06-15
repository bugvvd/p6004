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

// types
import {RegisterScreenProps} from '../types';

const RegisterScreen = ({
  navigation,
  route,
}: RegisterScreenProps): JSX.Element => {
  const [username, setUsername] = React.useState<string | null>(null);
  const [password, setPassword] = React.useState<string | null>(null);
  const [comfirmPassword, setComfirmPassword] = React.useState<string | null>(null);

  const isValidUsername = (): boolean => {
    console.log('vaidate username');
    return false;
  };

  const isValidPassword = (): boolean => {
    console.log('vaidate password');
    return false;
  };

  const isPasswordConfirmed = (): boolean => {
    console.log('comfirm password');
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
  const {width, height} = useWindowDimensions();
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView contentContainerStyle={styles(width, height).container}>
        <TextInput
          placeholder="Username"
          onChangeText={setUsername}
          onBlur={isValidUsername}
          testID="register-username"
        />
        <TextInput
          placeholder="Password"
          onChangeText={setPassword}
          onBlur={isValidPassword}
          testID="register-password"
        />
        <TextInput
          placeholder="Confirm Password"
          onChangeText={setComfirmPassword}
          onBlur={isPasswordConfirmed}
          testID="register-confirm-password"
        />
        <View style={styles(width, height).actionContainer}>
          <Button onPress={onPressRegister} testID="register-button">
            Register
          </Button>
          <Button onPress={onPressContact} testID="contact-button">
            Contact
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

export default RegisterScreen;
