import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const About = ()=> {
    return(
        <View>
            <Text>About Screen goes here</Text>
        </View>
    )
}
export default About
