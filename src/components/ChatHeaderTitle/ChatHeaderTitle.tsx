import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {Text} from 'react-native-paper';

import {styles} from './styles';
import {modelStore} from '../../store';
import {EVE_IDENTITY} from '../../config/eve';

export const ChatHeaderTitle: React.FC = observer(() => {
  const activeModel = modelStore.activeModel;

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} variant="titleSmall">
        {EVE_IDENTITY.name}
      </Text>
      <Text numberOfLines={1} variant="bodySmall">
        {activeModel?.name
          ? `ONLINE · ${activeModel.name}`
          : 'LOCAL AI · MODEL STANDBY'}
      </Text>
    </View>
  );
});
