import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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