import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {styles} from './styles' 

export default function Home({navigation}) {
return (
  <View style={styles.background}>
    <Text style={styles.txtTitle}>Cadastro</Text>
    
    <Text style={styles.txtinput}>Nome</Text>
    <TextInput
      style={styles.input}
      placeholder="Jane Cooper"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />

    <Text style={styles.txtinput}>Email</Text>
        <TextInput
        style={styles.input}
        placeholder="janecooper@gmail.com"
        placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
        autoCorrect={false}
        onChangeText={() => {}}
    />
    
    <Text style={styles.txtinput}>Senha</Text>
    <TextInput
      style={styles.input}
      placeholder="************"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />

    <Text style={styles.txtinput}>Confirmar senha</Text>
    <TextInput
      style={styles.input}
      placeholder="************"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />

    <Text style={styles.txtinput}>Telefone</Text>
    <TextInput
      style={styles.input}
      placeholder="(xx) xxxxx-xxxx"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />
    
    <View style={styles.viewRegister}>
      <Text style={styles.textRegister}>Ao se cadastrar voce concorda com os </Text>
      <TouchableOpacity> 
        <Text style={styles.registerText}>termos de uso </Text> 
      </TouchableOpacity> 
    </View>

      <TouchableOpacity 
      style={styles.btnSubmit}
      onPress={() => navigation.navigate('EnviarCodigo')}>
      <Text style={styles.submitText}>CADASTRAR</Text>
    </TouchableOpacity>
    
</View>
);
}