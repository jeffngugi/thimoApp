import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get("window");

class Alphabetical extends Component {
  render() {
    const tileDimensions = calcTileDimensions(width, 4)  // -> change this number and see!
    const tiles = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y","Z"]
    return (
      <View style={styles.container}>
        {tiles.map(i => Item({...tileDimensions, text: i}))}     
      </View>
    );
  }
}

const Item = ({size, margin, text}) => (
  <View style={[styles.item, {width: size, height: size, marginHorizontal: margin}]}>
    <Text style={styles.itemText}>{text}</Text>
  </View>
)

const calcTileDimensions = (deviceWidth, tpr) => {
  const margin = deviceWidth / (tpr * 10);
  const size = (deviceWidth - margin * (tpr * 2)) / tpr;
  return { size, margin };
};


export default Alphabetical;

const styles = StyleSheet.create({
  container: {
     justifyContent: "flex-start", flexDirection: "row", flexWrap: "wrap", marginTop: 30
  },
  item: {
    backgroundColor: 'yellow',  
     alignSelf: "flex-start",
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom: 20
  },
  itemText: {
    fontSize: 20
  }
});