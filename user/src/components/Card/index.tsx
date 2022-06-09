import React from 'react';
import {StyleSheet} from 'react-native';
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
  return (
    <RNPCard style={styles.container} >
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 20
  },
});

export default Card;
