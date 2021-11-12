import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import {styles} from './styles' 

export default function BemVindo({navigation}) {
  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        style={{
          width: 147,
          height: 234,
        }}
        source={require('../../assets/image/123.png')} />
        <TouchableOpacity 
        style={styles.footer}
        onPress={() => navigation.navigate('Login')}   
        > 
        <Text style={styles.footer}>
          Desenvolvido por Empresa {'\n'}
          2021
        </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}