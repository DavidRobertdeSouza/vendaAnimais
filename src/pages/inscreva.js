import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function Cadastro() {

return (
  <View style={styles.background}>
    <Text style={styles.txtlogin}>Cadastro</Text>
    
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

      <TouchableOpacity style={styles.btnSubmit}>
      <Text style={styles.submitText}>CADASTRAR</Text>
    </TouchableOpacity>
    
</View>
);
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },

  input: {
    borderBottomColor: '#849A87',
    borderBottomWidth: 1,
    width: '85%',
    marginBottom: 5,
    color: '#A9A9A9',
    fontSize: 17,
    paddingBottom: -10
  },

  btnSubmit: {
    backgroundColor: '#346639',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 5
  },
  
  submitText:{
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Roboto-Black',
    position: 'absolute'
  },

  registerText:{
    fontFamily: 'Roboto-Black',
    color: '#4169e1',
    flexDirection: "row",
    fontSize: 14
  },

  textRegister:{
    fontFamily: 'Roboto-Black',
    color: '#A9A9A9',
    fontSize: 14,
  },

  txtlogin:{
  fontFamily: 'Roboto-Black',
  fontStyle: 'normal',
  lineHeight: 40,
  fontSize: 28,
  color: '#535353',
  marginBottom: 25,
  marginTop: 40
  },

  txtinput:{
    fontFamily: 'Roboto-Black',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.41,
    color: '#535353',
    marginTop: 15,
    marginBottom: 5,
    width: '83%',
    paddingBottom: -10
  },
  
  viewRegister:{
    flexDirection: 'row',
    marginTop: 75,
  },

  viewSenha:{
    flexDirection: 'row',
    marginTop: 5,
  },
  
});
