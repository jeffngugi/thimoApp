import React from 'react'
import {View, Text, Dimensions, StyleSheet, ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Alphabet from './Alphabet';
import Alphabets from './Alphabets';
import SingleThimo from './SingleThimo';
const Stack = createStackNavigator();
import HomeScreen from './HomeScreen';
const { width } = Dimensions.get("window");


const HomeStack = ()=>{
    return(
        <Stack.Navigator
        initialRouteName={HomeScreen}
        mode='card'
        headerMode='screen'
        >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="Alphabet" component={Alphabet}
           options={{
             title:'Ndemwa',
             headerStyle:{
               backgroundColor:'#661a00'
             },
             headerTintColor:'white'
            }}
      
      />
      <Stack.Screen name="Thimo" component={SingleThimo} 
          options={{
              title:'Thimo',
              headerStyle:{
                backgroundColor:'#661a00'
              },
              headerTintColor:'white'
             }
            }
          
          />
    </Stack.Navigator>
    )
}









export default HomeStack


