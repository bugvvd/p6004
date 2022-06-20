import React from 'react';
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconButton, Menu} from 'react-native-paper';

import {Colors} from '../../constants/Colors';
import {CardProps} from './types.d';

const Card = ({
  priority,
  title,
  description,
  operable = false,
  enableMessage = false,
  enableCall = false,
  goto,
  testID,
}: CardProps) => {
  const {height, width} = useWindowDimensions();
  const [settingMenuVisible, setSettingMenuVisible] =
    React.useState<boolean>(false);
  const showSettingMenu = (): void => setSettingMenuVisible(true);
  const hideSettingMenu = (): void => setSettingMenuVisible(false);
  const ribbonColor = (priority: string): string | undefined => {
    return Colors.ribbon[priority as keyof typeof Colors.ribbon];
  };
  return (
    <TouchableOpacity onPress={goto} testID={testID}>
      <View style={styles(height, width).container}>
        <View
          style={[
            styles(height, width).ribbon,
            {backgroundColor: `${ribbonColor(priority)}`},
          ]}></View>
        <View style={[styles(height, width).contentContainer]}>
          <Text style={styles(height, width).contentTitle}>{title}</Text>
          {description && (
            <Text style={styles(height, width).contentSubTitle}>
              {description}
            </Text>
          )}
        </View>
        {operable && (
          <View style={styles(height, width).actionContainer}>
            {enableCall && (
              <IconButton
                icon="phone"
                onPress={() => console.log('Pressed Phone')}
                size={Math.floor(height / 40)}
                testID="card-phone"
              />
            )}
            {enableMessage && (
              <IconButton
                icon="message"
                onPress={() => console.log('Pressed Message')}
                size={Math.floor(height / 40)}
                testID="card-message"
              />
            )}
            <Menu
              visible={settingMenuVisible}
              onDismiss={hideSettingMenu}
              anchor={
                <IconButton
                  icon="dots-horizontal"
                  onPress={showSettingMenu}
                  size={Math.floor(height / 40)}
                  testID="card-dots"
                />
              }>
              <Menu.Item title="删除" testID="card-delete" />
              <Menu.Item title="重命名" testID="card-rename" />
            </Menu>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = (height: number, width: number) =>
  StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      //   height: height / 5,
      marginTop: height / 40,
      marginHorizontal: width / 20,
      borderRadius: 5,
      backgroundColor: 'white',
    },
    ribbon: {
      height: height / 60,
      borderTopStartRadius: 5,
      borderTopEndRadius: 5,
      backgroundColor: 'red',
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      marginVertical: height / 60,
      marginHorizontal: width / 20,
    },
    contentTitle: {fontSize: height / 60},
    contentSubTitle: {
      fontSize: height / 80,
      color: 'grey',
      paddingTop: 10,
    },
    actionContainer: {
      height: height / 20,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  });

export default Card;
