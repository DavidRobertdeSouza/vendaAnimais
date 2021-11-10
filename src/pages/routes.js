import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BemVindo from './bem-vindo';
import Login from './login';
import Aguarde from './aguarde';
import Inscreva from './inscreva'
import EnviarCodigo from './enviarcodigo';

export default function Routs() {
  const AuthRoute = createAppContainer(
    createStackNavigator({
      Login: {
        screen: Login,
      },
    })
  );

  const StackRoute = createAppContainer(
    createStackNavigator({
        BemVindo: {
        screen: BemVindo,
        navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
      },
        Login: {
        screen: Login,
        navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
      },
      Aguarde:{
        screen: Aguarde,
        navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
      },
      Inscreva:{
        screen: Inscreva,
        navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
      },
      EnviarCodigo:{
        screen: EnviarCodigo,
        navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
      },
    })
  );



  return (
    <>
      <StackRoute/>
    </>
  );
}