import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox'

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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },

  input: {
    borderBottomColor: '#A9A9A9',
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
    marginTop: 30,
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
    fontSize: 16
  },

  textRegister:{
    fontFamily: 'Roboto-Black',
    color: '#A9A9A9',
    fontSize: 16,
  },

  txtlogin:{
  fontFamily: 'Roboto-Black',
  fontStyle: 'normal',
  lineHeight: 40,
  fontSize: 28,
  color: '#535353',
  marginBottom: 50
  },

  txtinput:{
    fontFamily: 'Roboto-Black',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: -0.41,
    color: '#535353',
    right: '36%',
    marginTop: 15,
    marginBottom: 2
  },
  
  viewRegister:{
    flexDirection: 'row',
    marginTop: 60,
  },

  viewSenha:{
    flexDirection: 'row',
    marginTop: 5,
  },
  
});
