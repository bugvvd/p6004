import React from 'react';

// components
import {View, Text} from 'react-native';

// types
import {ProjectDetailScreenProps} from '../types';

const ProjectDetailScreen = ({
  navigation,
  route,
}: ProjectDetailScreenProps): JSX.Element => {
  return (
    <View>
      <Text>ProjectDetailScreen</Text>
    </View>
  );
};

export default ProjectDetailScreen;
