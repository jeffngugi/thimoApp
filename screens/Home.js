import React from 'react'
import {Text, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Thimos from '../jsons/thimos.json';

const Tab = createBottomTabNavigator();


const Home = ()=> {
    return(
        <Tab.Navigator
        initialRouteName={HomeScreen}
        tabBarOptions={{
            activeTintColor:'#992600',
            inactiveTintColor:'grey',
            style:{
              backgroundColor:'white',
              borderTopWidth:0,
              shadowColor:'black',
              shadowOpacity:0.5,
              elevation:5,
              shadowOffset:{width:5, height:3},
              style:{position:'absolute'}
            }
          }}
        
        >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Alphabetical" component={Alphabetical} />
      <Tab.Screen name="Favourites" component={SettingsScreen} />
    </Tab.Navigator>
    )
}


const HomeScreen = ()=> {
    return(
        <View>
            <Text>Home Screen goes herer</Text>
        </View>
    )
}


const SettingsScreen = ()=> {
    return(
        <View>
            <Text>Setting Screen</Text>
        </View>
    )
}

const Alphabetical = ()=> {
    return(
        <View>
            <Text>Order in alpabets</Text>
        </View>
    )
}
export default Home
