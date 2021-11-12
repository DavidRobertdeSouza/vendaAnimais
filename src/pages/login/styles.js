import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
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