import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {
  Card as RNPCard,
  Paragraph as RNPParagraph,
  Button as RNPButton,
  Text,
} from 'react-native-paper';

// types
import {CardProps} from './type';

const Card = ({
  title,
  subTitle,
  content,
  actions,
  style,
}: CardProps): JSX.Element => {
  const {height, width} = useWindowDimensions();
  return (
    <RNPCard style={styles(height, width).container}>
      <RNPCard.Title title={title} subtitle={subTitle} />
      <RNPCard.Content>
        <RNPParagraph>{content}</RNPParagraph>
      </RNPCard.Content>
      <RNPCard.Actions>
        {actions?.map(item => (
          <RNPButton key={item.name} onPress={item.callback}>
            {item.name}
          </RNPButton>
        ))}
      </RNPCard.Actions>
    </RNPCard>
  );
};

const styles = (height: number, width: number) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      marginTop: height / 40,
      marginHorizontal: width / 20,
    },
  });

export default Card;
