import { View, Text,Image } from 'react-native'
import React from 'react'
import moment from 'moment'
const log = require('../../assets/images/log.jpeg')
export default function UserTripCard({trip}) {
  console.log("this is trip data-:",trip)
  const LatestTrip= JSON.parse(trip?.tripData)
  console.log(LatestTrip)
  return (
    <View style={{ marginTop:20,display:'flex',flexDirection:'row',gap:10}}>
     <Image style={{width:100, height:100, borderRadius:15}} source={log}/>
     <View>
      <Text style={{
        fontFamily:'outfit-medium',
        fontSize:18
      }}>{LatestTrip.Data}</Text>
      <Text style={{fontFamily:'outfit',
        fontSize:14, color:'gray'}}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}</Text>
      <Text style={{fontFamily:'outfit',
        fontSize:14, color:'gray'}}>Traveling: {LatestTrip?.traveler?.title}</Text>
     </View>
    </View>
  )
}