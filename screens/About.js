import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';

const Stack = createStackNavigator();


const About = ({navigation})=> {
    return(
        <>
         <Header navigation={navigation} heading='About the developer'/>
        <View>
           
            <Text>About the d goes heresdr</Text>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    
})
export default About
