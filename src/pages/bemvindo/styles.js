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