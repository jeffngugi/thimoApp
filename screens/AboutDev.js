import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/Header';

const AboutDev = ({navigation}) => {
    return (
        <>
        <Header navigation={navigation} heading='Developed by' />
    
        <View>
            <Text>This app was developed by jeff ngugi</Text>
        </View>
        </>
    )
}


const styles = StyleSheet.create({

})


export default AboutDev
