import React, {useEffect, useState, useRef, useCallback} from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions} from 'react-native'
import Thimos from '../jsons/playground.json';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Header from '../components/Header';
import Card from '../components/Card';

const { width } = Dimensions.get("window");


const HomeScreen = ({navigation})=> {
    const [proverbs, setProverbs] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    // const [carouselItems, setCarouselItems] = useState(exampleItems);
    const ref = useRef(null);

    useEffect(()=>{
        setProverbs(Thimos.thimos)
    },[])
    
    const tiles = ["A", "B", "C", "E","G", "H", "I", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y"]


    const renderItem = useCallback(({ item, index }) => (
        <>
        <TouchableOpacity 
           onPress={()=>{
            navigation.navigate('Thimo', {
                itemId: item.id,
                proverb:item
              });
              
        }} 
        >
          <Card  thimo={item.proverb} translate={item.translation} proverbId={item.id}/>
          </TouchableOpacity>
        </>
      ), []);



    const calcTileDimensions = (deviceWidth, tpr) => {
        const margin = deviceWidth / (tpr * 10);
        const size = (deviceWidth - margin * (tpr * 2)) / tpr;
        return { size, margin };
      };

      const tileDimensions = calcTileDimensions(width, 4)
    //   const navigation = navigation;
     

      const Item = ({size, margin, text, navigation}) => (
        <TouchableOpacity key={text} onPress={()=>{
            navigation.navigate('Alphabet', {
                itemId: text,
              });
        }}>
        <View style={[styles.item, {width: size, height: size, marginHorizontal: margin}]}>
          <Text style={styles.itemText}>{text}</Text>
        </View>
        </TouchableOpacity>
      )

      
    
    return(
        <>
        <Header navigation={navigation}/>
        <ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems:'stretch' }}>
      
      <Carousel
          layout='default'
          ref={ref}
          data={proverbs}
          sliderWidth={300}
          itemWidth={width-5}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          hasParallaxImages={true}
        />
     </View> 
     <Pagination
            dotsLength={proverbs.length} // also based on number of sildes you want
            activeDotIndex={activeIndex}
            containerStyle={{padding:0, marginTop:-25 }}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: "black"
            }}
            inactiveDotStyle={{
                backgroundColor: "pink"
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
        />

        <View style={styles.container}>
        {tiles.map(i => {
                return(
                    
                    Item({ navigation,text: i, ...tileDimensions})
                )
                 } )}    



        {/* {tiles.map(i =>  Item({...tileDimensions, text: i, name:'jeff'}))}      */}
      </View>
      </ScrollView>
      </>
    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
       justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap", marginTop: 30
    },
    item: {
      backgroundColor: '#ba9478',  
       alignSelf: "flex-start",
       alignItems: 'center',
       justifyContent: 'center',
       marginBottom: 20
    },
    itemText: {
      fontSize: 20
    }
  });