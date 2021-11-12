import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {styles} from './styles' 

export default function EnviarCodigo({navigation}) {
return (
  <View style={styles.background}>
    <Text style={styles.txtTitle}>Confirmação</Text>
    
    <Text style={styles.txtinput}>Insira o número de telefone para receber o código</Text>
    <TextInput
      style={styles.input}
      placeholder="(xx) xxxxx-xxxx"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />

    <TouchableOpacity 
      style={styles.btnSubmit}
      onPress={() => navigation.navigate('ConfirmacaoCodigo')}>
      <Text style={styles.submitText}>ENVIAR CÓDIGO</Text>
    </TouchableOpacity>
    
</View>
);
}
