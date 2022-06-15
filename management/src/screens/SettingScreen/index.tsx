import React from 'react';

// components
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card, List, Modal, Portal} from 'react-native-paper';
import {logout} from '../../redux/slices/loginStateSlice';
import {useAppDispatch} from '../../redux/typedReduxHooks';

// types
import {SettingScreenProps} from '../types';

const SettingScreen = ({
  navigation,
  route,
}: SettingScreenProps): JSX.Element => {
  const [logoutModalVisible, setLogoutModalVisible] =
    React.useState<boolean>(false);
  const showLogoutModal = () => setLogoutModalVisible(true);
  const hideLogoutModal = () => setLogoutModalVisible(false);

  const dispatch = useAppDispatch();
  const onPressLogout = (): void => {
    dispatch(logout());
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <List.Section style={styles.listItem}>
        <List.Item
          title="Notification"
          onPress={() => {}}
          right={() => <List.Icon icon="chevron-right" />}
          style={styles.listItem}
        />
        <List.Item
          title="About"
          onPress={() => {}}
          right={() => <List.Icon icon="chevron-right" />}
        />
      </List.Section>
      <View>
        <List.Section style={styles.listItem}>
          <List.Item
            title="Logout"
            onPress={showLogoutModal}
            right={() => <List.Icon icon="chevron-right" />}
            style={styles.listItem}
          />
        </List.Section>
        <Portal>
          <Modal
            visible={logoutModalVisible}
            onDismiss={hideLogoutModal}
            contentContainerStyle={styles.logoutModal}>
            <Card testID="logout-dial">
              <Card.Title title="Are you sure?" />
              <Card.Actions style={{justifyContent: 'flex-end'}}>
                <Button onPress={onPressLogout} testID="confirm-logout">
                  Yes
                </Button>
                <Button onPress={hideLogoutModal} testID="cancel-logout">
                  Cancel
                </Button>
              </Card.Actions>
            </Card>
          </Modal>
        </Portal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    // justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: 'red',
  },
  listItem: {
    backgroundColor: '#fff',
  },
  logoutModal: {
    flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
    marginVertical: 300,
    marginHorizontal: 40,
  },
});

export default SettingScreen;
