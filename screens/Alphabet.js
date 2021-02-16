import React, {useEffect, useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import Card from '../components/Card';
import Loading from '../components/Loading';
import Thimos from '../jsons/thimos.json';

const Alphabet = ({route, navigation})=> {
  const {itemId} = route.params;
  const l = JSON.stringify(itemId);
    const [proverbs, setProverbs] = useState([]);
  // console.log(itemId);
    useEffect(()=>{
        setProverbs(Thimos.thimos[itemId])
    },[])

    if(!proverbs.length) return <Loading />
    
    return(
        <ScrollView>
      {proverbs && proverbs.map((proverb, index)=>(
        
        <TouchableOpacity key={index} activeOpacity={1}
            onPress={()=>{
                navigation.navigate('Thimo', {
                    itemId: itemId,
                    proverb
                  });
                  
            }} 
        >
          <Card  thimo={proverb.proverb} translate={proverb.translation} proverbId={proverb.id}/>
        </TouchableOpacity>
     
       
      ))}
   </ScrollView>
    )
}

export default Alphabet
