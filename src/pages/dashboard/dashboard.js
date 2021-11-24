import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import {styles} from './styles' 

export default function Dashboard({navigation}) {
return (
  <View style={styles.background}>
    <View style={styles.viewOla}>
      <Text style={styles.textOla}>Hey, </Text>
         <Text style={styles.textUser}>David </Text>
    </View>
    <Text style={styles.textFique}> Fique por dentro de sua fazenda </Text>

    
    <Text style={styles.textTitle}> Carteira </Text>
    <View style={styles.viewOla}>
      <TouchableOpacity style={styles.Card}>

      </TouchableOpacity>

      <TouchableOpacity style={styles.Card}>

      </TouchableOpacity>
    </View>

    <Text style={styles.textTitle}> Catálogo </Text>
    <View style={styles.viewOla}>
      <TouchableOpacity style={styles.Card}>

      </TouchableOpacity>

      <TouchableOpacity style={styles.Card}>

      </TouchableOpacity>
    </View>
</View>
);
}