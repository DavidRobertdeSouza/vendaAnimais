import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
      },
    
      input: {
        borderBottomColor: '#849A87',
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
        marginTop: 60
      },
      
      submitText:{
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Roboto-Black',
        position: 'absolute'
      },
    
      txtTitle:{
      fontFamily: 'Roboto-Bold',
      fontStyle: 'normal',
      lineHeight: 40,
      fontSize: 28,
      color: '#535353',
      marginBottom: 25,
      marginTop: '50%'
      },
    
      txtinput:{
        fontFamily: 'Roboto-Black',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 16,
        letterSpacing: -0.41,
        color: '#535353',
        marginTop: 15,
        marginBottom: 5,
      },
    });