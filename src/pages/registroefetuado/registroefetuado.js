import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

import {styles} from './styles' 

export default function RegistroEfetuado({navigation}) {
return (
  <View style={styles.background}>
    <Text style={styles.txtTitle}>Parabéns!</Text>
    
    <Text style={styles.txtTexto}>Você foi registrado com sucesso!</Text>

    <Image 
        style={{
          width: 50,
          height: 50,
        }}
        source={require('../../assets/image/certo.png')} />
    
</View>
);
}