import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SingleThimo = ({route})=>{
    const {proverb} = route.params
    // console.log(proverb);
    return (
        <View style={styles.container}>
            <View style={styles.proverbView}>
                 <Text style={styles.proverbText}>{proverb.proverb}</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.translationView}>
                  <Text style={styles.translationText}>Translation : {proverb.translation}</Text>
            </View>
            <View style={styles.line} />
            {proverb.equivalent ? <>
                <View style={styles.equivalentView}>
                <Text style={styles.equivalentText}><Text style={{fontWeight:'bold'}}>Equivalent  : </Text>{proverb.equivalent}</Text> 
                </View> 
                <View style={styles.line} />
            </>
                :null }
            {proverb.note ? 
                <>
                <View style={styles.noteView}>
                <Text style={styles.noteText}><Text style={{fontWeight:'bold'}}>Note: </Text>{proverb.note}</Text> 
                </View> 
                <View style={styles.line} />
                </>
                :null }
        </View>
    )
}

const styles = StyleSheet.create({
    line:{
      borderBottomColor: '#808080',
      borderBottomWidth: 0.5,
      marginTop:10,
      marginBottom:15,
      alignSelf:'stretch'
    },
    container:{
        backgroundColor:'#ba9478',
        flex:1,
        flexDirection:'column',
        padding:5

    },
    proverbView:{
        alignItems:'center',
        // backgroundColor:'yellow',
        marginVertical:10,
        paddingVertical:10,
        // elevation:1
        
    },
    proverbText:{
        fontWeight:'bold',
        fontSize:24,
        marginHorizontal:5
    },
    translationView:{
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:2,
        paddingVertical:10,
        marginVertical:15,
        paddingHorizontal:4,
        elevation:1,
        alignItems:'center'

    },
    translationText:{
        marginHorizontal:2,
        textAlign:'justify',
    },
    equivalentView:{
        marginVertical:10,
        padding:10,
        alignItems:'center',
        // backgroundColor:'yellow',
        alignSelf:'stretch',
        backgroundColor:'rgba(238, 228, 221, 0.4)',
        borderBottomEndRadius:15,
        borderTopStartRadius:15


    },
    equivalentText:{
    fontWeight:'300',
    fontSize:16,
    textAlign:'justify',
    lineHeight:22,
    marginLeft:2
    },
    noteView:{
        backgroundColor:'rgba(238, 228, 221, 0.5)',
        marginVertical:10,
        padding:10,
        alignItems:'center',
        borderBottomStartRadius:15,
        borderTopEndRadius:15,
        elevation:1
    },
    noteText:{
        fontWeight:'700',
        textAlign:'justify',
        lineHeight:20,
        fontSize:15

    }

})



export default SingleThimo
