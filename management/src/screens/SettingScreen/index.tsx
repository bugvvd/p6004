import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
