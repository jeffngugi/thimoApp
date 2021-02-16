import React, {useRef}  from 'react';
import {View,SafeAreaView,PermissionsAndroid,Alert,Platform,ScrollView,StatusBar, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from "react-native-vector-icons/Fontisto";
import Clipboard from '@react-native-community/clipboard';
import Toast from 'react-native-toast-message';
import {captureRef} from 'react-native-view-shot';
import CameraRoll from '@react-native-community/cameraroll';
import Share from 'react-native-share';

const screenWidth = Math.round(Dimensions.get('window').width);


const Card = ({thimo, translate}) => {
    const viewRef = useRef();
    const getPermissionAndroid = async () => {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Image Download Permission',
              message: 'Your permission is required to save images to your device',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            return true;
          }
          Alert.alert(
            '',
            'Your permission is required to save images to your device',
            [{text: 'OK', onPress: () => {}}],
            {cancelable: false},
          );
        } catch (err) {
          // handle error as you please
          console.log('err', err);
        }
      };
    

    const copyText = (text)=>{
        Clipboard.setString(text);
        
            Toast.show({
              text1: 'Thimo has been copied',
              type:'success',
              visibilityTime: 1000,
            });
    }

    const addToFav = ()=>{
        Toast.show({
            text1: 'Added to favourite',
            type:'success',
            visibilityTime: 1000,
          });
    }

    const downloadImage = async () => {
        // await getPermissionAndroid();
        try {
          // react-native-view-shot caputures component
          const uri = await captureRef(viewRef, {
            format: 'png',
            quality: 0.8,
          });
    
          if (Platform.OS === 'android') {
            const granted = await getPermissionAndroid();
            if (!granted) {
              return;
            }
          }
    
          // cameraroll saves image
          const image = CameraRoll.save(uri, 'photo');
          if (image) {
            Toast.show({
                text1: 'Image saved succesfully',
                type:'success',
                visibilityTime: 1000,
              });
          }
        } catch (error) {
          console.log('error', error);
        }
      };

    const shareImage = async (translate) => {
        const meaning = translate ? `Translation: ${translate}` : 'Made with <3 by Jeff'
        try {
          const uri = await captureRef(viewRef, {
            format: 'png',
            quality: 0.8,
          });
          console.log('uri', uri);
          const shareResponse = await Share.open({url: uri, message: meaning});
          console.log('shareResponse', shareResponse);
        } catch (error) {
          console.log('error', error);
        }
      };
    //   console.log(translate)
    return (
        
        <View style={styles.Card}>

            <View style={styles.cardContent} ref={viewRef}>
                <Text style={styles.cardText}>Favourite thimo</Text>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:5, width:"100%", padding:5}}>
            
                <TouchableOpacity  style={{width:"25%",padding:5}} onPress={downloadImage}>
               <Icon name="download" color="white"size={20} style={{alignSelf:"center"}}/>
               </TouchableOpacity>
                <TouchableOpacity  style={{width:"25%",padding:5}} onPress={()=>{
                    copyText(thimo);
               } }>
               <Icon name="copy" color="white"size={20} style={{alignSelf:"center"}}/>
               </TouchableOpacity>
               <TouchableOpacity style={{ width:"25%", padding:5,}} 
                onPress={
                    ()=>{
                        shareImage(translate)
                    }
                }
                >
                <Icon color="white" size={20} name="share" style={{alignSelf:"center"}} />
                </TouchableOpacity>
               <TouchableOpacity style={{ width:"25%", padding:5,}} 
                onPress={
                    ()=>{
                       addToFav()
                    }
                }
                >
                <Icon color="white" size={20} name="trash" style={{alignSelf:"center"}} />
                </TouchableOpacity>
                
            </View>
            
        </View>
    )
}

export default Card


const styles = StyleSheet.create({
    Card:{
        alignItems: 'center',
        // flex: 1,
        justifyContent: 'center',
        borderRadius:6,
        elevation:3,
        backgroundColor:'#ba9478',
       shadowOffset:{width:1, height:1},
       shadowColor:'#ba9478',
       shadowOpacity:0.3,
       shadowRadius:2,
       marginVertical:10,
       marginHorizontal:4,
       paddingBottom:5,
       paddingTop:5
    },
    cardContent:{
        marginHorizontal:18,
        // marginVertical:20,
        marginBottom:2,
        paddingHorizontal:10,
        backgroundColor:'#ba9478',
        paddingVertical:16
    },
    cardText:{
        textAlign: 'center', // <-- the magic
        fontWeight: '700',
        fontSize: 20,
        marginTop: 0,
        width: screenWidth/1.2,
    },
    savedComponent: {
        backgroundColor: 'white',
        marginBottom: 30,
      },
})