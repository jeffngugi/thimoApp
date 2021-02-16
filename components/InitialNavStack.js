import React from 'react'
import {View, Text} from  "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "./DrawerContent";
import Home from '../screens/Home';
import About from '../screens/About';
import AboutDev from '../screens/AboutDev';

const Drawer = createDrawerNavigator();

const InitialNavStack = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Mucii"
            
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: '#fff5e6'
            }}
            
            screenOptions={{
                headerShown:false,
                headerTintColor:'#663300'
                
            }}
        >
            <Drawer.Screen name="Mucii" component={Home}/>
            <Drawer.Screen name="Wigii" component={About} />
            <Drawer.Screen name="Developer" component={AboutDev} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    )
}




export default InitialNavStack
