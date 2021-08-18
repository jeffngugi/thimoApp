import React, {useEffect} from 'react'
import { View, Text } from "react-native";
import Header from '../../components/Header'
import Favourite from './Favourite'

const Favourites = ({navigation})=> {
    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          // error reading value
        }
      }
      useEffect(() => {
       let value=  getData()
        console.log(value)
      }, [])
      

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
