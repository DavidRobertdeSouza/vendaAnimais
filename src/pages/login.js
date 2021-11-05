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

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:147, y:234}))

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
      }),
    ]).start();
  }, []);


  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 120,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 200,
        duration: 100,
      })
    ]).start()
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 147,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 234,
        duration: 100,
      })
    ]).start()
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Animated.Image 
        style={{
          width: logo.x,
          height: logo.y,
        }}
        source={require('./src/assets/123.png')} />
      </View>

      <Animated.View
        style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            { translateY: offset.y}
          ]
        }
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>
          <Text style={styles.registerText}>Criar conta gratuita</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#368846',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    paddingBottom: 50
  },

  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#000',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },

  btnSubmit: {
    backgroundColor: '#787878',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  
  submitText:{
    color: '#FFF',
    fontSize: 18
  },

  btnRegister:{
    marginTop: 10,
  },

  registerText:{
    color: '#FFF',
  }
});