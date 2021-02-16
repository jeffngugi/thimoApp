import React from 'react'
import { View, Text } from "react-native";
import Header from '../../components/Header'
import Favourite from './Favourite'

const Favourites = ({navigation})=> {
    return(
        <>
        <Header navigation={navigation} heading='Favourite' />
        <View>
            <Favourite />
        </View>
        </>
    )
}

export default Favourites
