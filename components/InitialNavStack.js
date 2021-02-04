import React from 'react'
import {View, Text} from  "react-native"
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from "./DrawerContent";
import Home from '../screens/Home';
import About from '../screens/About';

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
                headerShown:true,
                
            }}
        >
            <Drawer.Screen name="Mucii" component={Home} options={{title:"Mucii"}}/>
            <Drawer.Screen name="Wigii" component={About} />
            <Drawer.Screen name="Jeff" component={About} />
            <Drawer.Screen name="Ngugi" component={About} />
        </Drawer.Navigator>
    )
}




export default InitialNavStack
