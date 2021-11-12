import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'

import {styles} from './styles' 

export default function Login({navigation}) {
const [toggleCheckBox, setToggleCheckBox] = useState(false)
return (
  <View style={styles.background}>
    <Text style={styles.txtlogin}>Login</Text>
    
    <Text style={styles.txtinput}>E-mail</Text>
    <TextInput
      style={styles.input}
      placeholder="meuemail@hotmail.com"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />
    
    <Text style={styles.txtinput}>Senha</Text>
    <TextInput
      style={styles.input}
      placeholder="**************"
      placeholderTextColor= 'rgba(83, 83, 83, 0.4)'
      autoCorrect={false}
      onChangeText={() => {}}
    />
    <View style={styles.viewSenha}>
      <CheckBox
      disabled={false}
      value={toggleCheckBox}
      onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
      <Text style={{fontSize: 12, top: 8, marginRight: 135}}>Lembrar senha</Text>

      <TouchableOpacity> 
        <Text style={{fontSize: 12, top: 8, color:'#4169e1'}}> Esqueceu senha? </Text> 
      </TouchableOpacity> 

    </View>

    <TouchableOpacity 
    style={styles.btnSubmit} 
    onPress={() => navigation.navigate('Aguarde')}     
    >
      <Text style={styles.submitText}>ENTRAR</Text>
    </TouchableOpacity>

    <View style={styles.viewRegister}>
      <Text style={styles.textRegister}>Se ainda não é membro, </Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Inscreva')}     
      >
        <Text style={styles.registerText}>cadastre-se </Text> 
      </TouchableOpacity> 
    </View>
</View>
);
}