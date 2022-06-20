import React from 'react';

// components
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconButton} from 'react-native-paper';

// types
import {ProjectDetailScreenProps} from '../types';

const ProjectDetailScreen = ({
  navigation,
  route,
}: ProjectDetailScreenProps): JSX.Element => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles(width, height).container}>
      <TouchableOpacity
        style={styles(width, height).backIconContainer}
        onPress={navigation.goBack}>
        <IconButton
          icon="chevron-left"
          size={height / 40}
          accessibilityLabel="project-stack-back"
        />
      </TouchableOpacity>
      <ScrollView>
        <Text>{route.params.projectID}</Text>
      </ScrollView>
    </View>
  );
};

const styles = (width: number, height: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    backIconContainer: {
      height: '100%',
      backgroundColor: 'white',
      justifyContent: 'center',
    },
  });

export default ProjectDetailScreen;
