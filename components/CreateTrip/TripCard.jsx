import { View, Text } from 'react-native'
import React from 'react'

export default function TripCard({option,selectOption}) {
  return (
    <View style={[{
        padding:25,
        display:'flex',flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'#f2f2f2',
        borderRadius:15,
    },selectOption?.id==option?.id&&{borderWidth:2}]}>
      <View>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:20
      }}>{option?.title}</Text>
      <Text style={{ fontSize:17, fontFamily:'outfit', color:'gray'}}>{option?.description}</Text>
      </View>
      <Text style={{
        fontSize:35
      }}>{option?.icon}</Text>
    </View>
  )
}