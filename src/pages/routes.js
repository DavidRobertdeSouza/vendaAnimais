import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderTitle} from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BemVindo from './bemvindo/bem-vindo';
import Login from './login/login';
import Aguarde from './aguarde/aguarde';
import Inscreva from './inscreva/inscreva';
import EnviarCodigo from './enviarcodigo/enviarcodigo';
import ConfirmacaoCodigo from './confirmacaocodigo/confirmacaocodigo';
import RegistroEfetuado from './registroefetuado/registroefetuado';
import Home from './home/home';
import Carteira from './carteira/carteira';
import Catalogo from './catalogo/catalogo';
import Perfil from './perfil/perfil';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Material from 'react-native-vector-icons/MaterialIcons'
import { NavigationContainer } from '@react-navigation/native';
import Dashboard from './dashboard/dashboard';

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <NavigationContainer>
  <Tab.Navigator
  screenOptions={{
    tabBarStyle:{
        paddingBottom: 5,
        paddingTop: 5,
        backgroundColor: '#346639',
    },
    }}  
  >
    <Tab.Screen 
      name='Dashboard'
      component={Dashboard} 
      options={{
        tabBarInactiveTintColor: '#FFF',
        tabBarActiveTintColor: '#d2fbc9',
        headerStyle:{
          backgroundColor: '#346639',
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
          marginLeft: 40
        },
        tabBarIcon:({focused}) => (
          <Material name="dashboard" size={24} color={focused ? '#aced9f' : '#FFF'} />
        )
      }}
    />
    <Tab.Screen 
      name='Carteira' 
      component={Carteira} 
      options={{
        tabBarInactiveTintColor: '#FFF',
        tabBarActiveTintColor: '#d2fbc9',
        headerStyle:{
          backgroundColor: '#346639'
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
          marginLeft: 40
        },
        tabBarIcon:({focused}) => (
          <FontAwesome5 name="wallet" size={23} color={focused ? '#aced9f' : '#FFF'} />
        )
      }}
    />
    <Tab.Screen 
      name='Catálogo' 
      component={Catalogo} 
      options={{
        tabBarInactiveTintColor: '#FFF',
        tabBarActiveTintColor: '#d2fbc9',
        headerStyle:{
          backgroundColor: '#346639'
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
          marginLeft: 40
        },
        tabBarIcon:({focused}) => (
          <FontAwesome5 name="clipboard" size={24} color={focused ? '#aced9f' : '#FFF'} />
        )
      }}
    />
    <Tab.Screen 
      name='Perfil' 
      component={Perfil} 
      options={{
        tabBarInactiveTintColor: '#FFF',
        tabBarActiveTintColor: '#d2fbc9',
        headerStyle:{
          backgroundColor: '#346639'
        },
        headerTintColor: '#FFF',
        headerTitleStyle:{
          marginLeft: 40
        },
        tabBarIcon:({focused}) => (
          <FontAwesome5 name="user" size={20} color={focused ? '#aced9f' : '#FFF'} />
        )
      }}
    />
  </Tab.Navigator>
  </NavigationContainer>
  )
}



export default function Routes() {

  const StackRoute = createAppContainer(
    createStackNavigator({
        /* BemVindo: {
        screen: BemVindo,
        navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
      }, */
        Home:{
          screen: MyTabs,
          navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
        },
        Login: {
        screen: MyTabs,
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
      ConfirmacaoCodigo:{
        screen: ConfirmacaoCodigo,
        navigationOptions:{
            headerTransparent: true,
            headerTitle: ''
        }
      },
      RegistroEfetuado:{
        screen: RegistroEfetuado,
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