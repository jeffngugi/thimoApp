import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import { Button, TouchableOpacity } from 'react-native-share';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";

const Header = ({navigation, heading}) => {
    return (
        <View style={styles.header}>
            <View style={styles.leftContent}>
                {/* <TouchableOpacity onPress={()=>{}}> */}
                <View >
                    <Icon name='bars' color='white' size={30} style={{marginLeft:10}} onPress={()=>{navigation.openDrawer()}}/>
                </View>
                {/* </TouchableOpacity> */}
            </View>
            <Text style={styles.text}>{heading? heading : 'Thimo Cia Ugikuyu' }</Text>

            <View style={styles.rightContent}>
                {/* <Text>jsdshdjh</Text> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        // width:'100%',
        flexDirection:'row',    
        height:'7%',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#661a00',
    },
    leftContent:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        // backgroundColor:'green',
        marginHorizontal:5,
        // marginVertical:10
    },
    rightContent:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginHorizontal:5
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})
export default Header
