import { View, Text, FlatList, Image } from 'react-native'
import { useEffect } from 'react'

import HotelCard from './HotelCard'

export default function HotelList({hotel}) {
   
   
  //  console.log("hotel",hotel)
  return (
    <View style={{marginTop:20}}>
      <Text style={{ fontFamily:'outfit-bold', fontSize:20}}>🏨 Hotel Recommendation</Text>
      <FlatList style={{ marginTop:8}} horizontal={true} showsHorizontalScrollIndicator={false} data={hotel} renderItem={({item,index})=>(
        <HotelCard item={item}/>
      )}/>
    </View>
  )
}