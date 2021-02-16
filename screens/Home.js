import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favourite from './favourite/Favourites';
import HomeStack from './HomeStack';
import HomeScreen from './HomeScreen';
import Fontisto from "react-native-vector-icons/Fontisto";

const Tab = createBottomTabNavigator();


const Home = ()=> {
    
    return(
      <>
      {/* <Header /> */}
        <Tab.Navigator
        initialRouteName={HomeStack}
        tabBarOptions={{
            activeTintColor:'#992600',
            inactiveTintColor:'grey',
            style:{
              backgroundColor:'#fff5e6',
              borderTopWidth:0,
              shadowColor:'black',
              shadowOpacity:0.5,
              elevation:5,
              shadowOffset:{width:5, height:3},
              style:{position:'absolute'}
            }
          }}
        
        >
      
      <Tab.Screen name="HomeScreen" component={HomeStack} 
        options={{
          tabBarLabel:'HOME',
          tabBarIcon:({color, size})=>(
            <Icon name="home" color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen name="Favourites" component={Favourite} 
        options={{
          tabBarLabel:'FAVOUTIRE',
          tabBarIcon:({color, size})=>(
            <Fontisto color={color} size={size} name="heart" style={{alignSelf:"center"}} />
          )
        }}
      />
    </Tab.Navigator>
    </>
    )
}









export default Home
