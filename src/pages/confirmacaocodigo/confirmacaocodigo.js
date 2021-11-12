import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {styles} from './styles' 

export default function ConfirmacaoCodigo({navigation}) {
return (
  <View style={styles.background}>
    <Text style={styles.txtTitle}>Confirmação</Text>
    
    <Text style={styles.txtinput}>Digite o código do SMS</Text>
    <TextInput
      style={styles.input}
      placeholder="123-148"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />

    <View style={styles.viewReenviar}>
      <Text style={styles.textReenviar}> Reenviar código? (0:45) </Text> 
    </View>


    <TouchableOpacity 
    style={styles.btnSubmit}
    onPress={() => navigation.navigate('RegistroEfetuado')}>
      <Text style={styles.submitText}>CONFIRMAR</Text>
    </TouchableOpacity>
    
</View>
);
}