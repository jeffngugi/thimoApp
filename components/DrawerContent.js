import React from 'react'
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native'
const {width} = Dimensions.get('window');
import {DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

const DrawerContent = (props) => {
    // const translateX = Animated.interpolate({
    //     inputRange: [0,1],
    //     outputRange: [-100,0]
    // })
    return (
       <View style={{flex:1, marginVertical:5}}>
         <DrawerContentScrollView {...props}>
             <Animated.View >
            <View style={styles.drawerHeader}>
                <Text style={{fontSize:20, fontWeight:'800'}}>Thimo Cia Ugikuyu</Text>
                <View style={styles.imageView}>
                     <Image source={require('../assets/mugikuyu.jpg')} style={styles.userIcon}/>
                </View>
               
                <Text>Gikuyu Kirume nyambo</Text>
            </View>
      <DrawerItemList {...props} labelStyle={{color:"#331a00", fontSize:15, fontWeight:'800', fontFamily:'Roboto'}} activeTintColor="#ffaa80" />
      </Animated.View>
    </DrawerContentScrollView>
       </View>
    )
}

export default DrawerContent


const styles = StyleSheet.create({
    drawerHeader:{
        marginVertical:4,
        marginHorizontal:0,
        alignItems:'center',
        paddingLeft:10,
        paddingVertical:5
    },
    imageView:{
        width:width/4-1,
        height:width/4-1,
        marginRight:5,
        marginVertical:10
    },
    userIcon:{
        borderRadius:50,
        width:null,
        height:null,
        flex:1,
        resizeMode:'cover'
    },
})