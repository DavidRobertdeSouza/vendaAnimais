import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function BemVindo() {


  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        style={{
          width: 147,
          height: 234,
        }}
        source={require('../assets/image/123.png')} />
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
  },

  containerText: {
    flex: 1,
    justifyContent: 'center'
  },

  text:{
    color: '#6E4518',
    fontSize: 28,
    fontFamily: 'Roboto-Black',
    fontStyle: 'normal',
    textAlign: 'center',
    position: 'absolute', 
    width: '100%',
    top: 90
  },
  footer:{
    textAlign: 'center',
    letterSpacing: -0.41,
    color: '#2B58FA',
    fontSize: 14,
    fontFamily: 'Roboto-Black',
    fontStyle: 'normal',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});