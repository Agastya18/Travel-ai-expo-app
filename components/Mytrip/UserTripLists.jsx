import { View, Text,Image, Pressable } from 'react-native'
import React from 'react'
import moment from 'moment'
const log= require('../../assets/images/log.jpeg')
import UserTripCard from '../Mytrip/UserTripCard'
import { useRouter } from 'expo-router'
export default function UserTripLists({userTrip}) {
    const router =useRouter()
    const LatestTrip= JSON.parse(userTrip[0].tripData)
    console.log(userTrip)
    console.log(LatestTrip)
  return userTrip&& (
    <View>
      <View style={{marginTop:20}}>
        <Image source={userTrip?.tripData?.working_location_image_url} style={{
            width: '100%',height:240, objectFit:'cover', borderRadius:15
        }}/>
        <View style={{marginTop:10}}>
            <Text style={{ fontFamily:'outfit-medium', fontSize:20}}>
                {LatestTrip.Data}
            </Text>
            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between',marginTop:5}}>
            <Text style={{fontSize:16,fontFamily:'outfit',color:'gray'}}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}</Text>
            <Text style={{fontFamily:'outfit', fontSize:16}}>🚌{LatestTrip.traveler.title}</Text>
            </View>
            <Pressable onPress={()=>router.push({pathname:'/trip-detail',params:{
                trip:JSON.stringify(userTrip[0])
            }})} style={{
                backgroundColor:'black',
                padding:15,
                borderRadius:15,
                marginTop:10
            }}>
                <Text style={{ color:'white', textAlign:'center', fontFamily:'outfit-medium', fontSize:15}}>See your plan</Text>
            </Pressable>
        </View>
            {userTrip.map((trip,index)=>(
                <UserTripCard trip={trip} key={index}/>
            ))}
      </View>
    </View>
  )
}