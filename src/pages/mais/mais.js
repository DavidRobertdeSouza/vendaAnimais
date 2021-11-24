import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import {styles} from './styles' 

export default function Mais({navigation}) {
return (
  <View style={styles.background}>
    <Image
        style={{
          width: 250,
          height: 234,
        }}
        source={require('../../assets/image/construcao.jpg')}
    />
</View>
);
}