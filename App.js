import React, {useState, useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  Keyboard
} from 'react-native';

export default function App() {


  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        style={{
          width: 147,
          height: 234,
        }}
        source={require('./src/assets/123.png')} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>
        Bem vindo!
        </Text>
        <Text style={styles.footer}>
          Desenvolvido por Empresa {'\n'}
          2021
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120
  },

  containerText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text:{
    color: '#6E4518',
    fontSize: 28,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    textAlign: 'center',
    justifyContent: 'center',
  },
  footer:{
    position: 'absolute',
    textAlign: 'center',
    letterSpacing: -0.41,
    color: '#2B58FA',
    fontSize: 14,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    left: '7.73%',
    right: '7.73%',
    top: '82.03%',
    bottom: 14.4,
  }
});