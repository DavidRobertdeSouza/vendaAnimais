import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

import {styles} from './styles' 

export default function Aguarde({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        style={{
          width: 147,
          height: 234,
        }}
        source={require('../../assets/image/123.png')} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>
        Aguarde...
        </Text>
      </View>
    </View>
  );
}

