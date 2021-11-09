import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Aguarde() {


  return (
    <View style={styles.background}>
      <View style={styles.containerLogo}>
        <Image 
        style={{
          width: 147,
          height: 234,
        }}
        source={require('../assets/image/123.png')} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>
        Aguarde...
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
  }
});