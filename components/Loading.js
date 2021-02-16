import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import Spinner from 'react-native-spinkit';
const Loading = () => {
    return (
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            {/* <ActivityIndicator color="red" /> */}
            {/* <Text>Loading</Text> */}
            {/* Pulse ThreeBounce Circle WordPress*/}
            <Spinner type="Bounce" color='#ba9478' size={40}/>
        </View>
    )
}

export default Loading
