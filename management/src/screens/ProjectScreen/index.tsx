import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {ProjectScreenProps} from '../types';

const ProjectScreen = ({
  navigation,
  route,
}: ProjectScreenProps): JSX.Element => {
  return (
    <View>
      <Text>ProjectScreen</Text>
    </View>
  );
};

export default ProjectScreen;
