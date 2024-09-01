import { View, Text,Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'
export default function StartNewTrip() {
    const router = useRouter()
   
  return (
    <View style={{
        padding:25,
        marginTop:50,
        display: 'flex',
        alignItems: 'center',
        gap:25
    }}>
    <Ionicons name="location-sharp" size={24} color="black" />
      <Text style={{fontFamily:'outfit-medium', fontSize:25, marginTop:10}}>No trip planned yet</Text>
      <Text style={{ textAlign:'center', fontSize:20, fontFamily:'outfit', color:'gray'}}>Looks like its time to plan a new travel experinece! Get
      Started below</Text>
      <Pressable onPress={()=>router.push('create-trip/SearchPlace')} style={{
        padding:10,
        backgroundColor:'black',
        borderRadius:15,
        paddingHorizontal:30
      }}>
        <Text style={{
            color:'white', fontFamily:'outfit-medium', fontSize:15
        }}>
            Start a new trip
        </Text>
      </Pressable>
      
    </View>
  )
}