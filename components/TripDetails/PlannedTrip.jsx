import { View, Text,Image, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
const log= require('../../assets/images/log.jpeg')
export default function PlannedTrip({details}) {
   console.log(details)
  return (
    <View style={{marginTop:20}}>
      <Text style={{fontFamily:'outfit-bold', fontSize:20}}>PlannedTrip</Text>
      {
        details.map((item,index)=>(
            <View key={index}  style={{backgroundColor:'#D4F1F4',padding:10,borderRadius:15,marginTop:20}}>
            <Image style={{width:'100%', height:120, borderRadius:15}} source={log}/>
                <Text style={{fontFamily:'outfit-bold', fontSize:16}}>Day{index+1}{" : "}{item.place_name}</Text>
               
              
               <Text style={{color:'gray' ,marginTop:5}}>{item.place_details}</Text>
               <View style={{display:'flex',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
               <View>
              <Text style={{fontFamily:'outfit' ,marginTop:5}}>
              🎫Ticket Price:
              <Text style={{fontFamily:'outfit-bold',fontSize:15,marginTop:5}}> {item.ticket_pricing}</Text>
              </Text>
              <Text style={{fontFamily:'outfit',marginTop:5}}>
              ⏱️Time to Travel:
              <Text style={{fontFamily:'outfit-bold',fontSize:15,marginTop:5}}> {item.time_to_travel}</Text>
              
              </Text>
              </View>
              <Pressable style={{backgroundColor:'black', padding:8,borderRadius:7}}>
              <Ionicons name="navigate" size={20} color="white" />
              </Pressable>
              </View>
             
            </View>

        ))
      }
    </View>
  )
}