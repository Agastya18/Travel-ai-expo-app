import { View, Text,Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useEffect, useState } from 'react'
import { Link, useNavigation,useRouter } from 'expo-router'
import { useZusStore } from '../../store/zus'
import moment from 'moment';
export default function reviewTrip() {
    const navigation= useNavigation()
    const {setAiData,aiData} = useZusStore()
    const router = useRouter()
    useEffect(()=>{
        navigation.setOptions({
            title:'',
            headerShown: true,
            headerTransparent: true})
    })
  return (
    <View style={{padding:25,paddingTop:75,borderStartColor:'white', height:'100%'}}>
      <Text style={{ fontFamily:'outfit-bold', fontSize:35,marginTop:20}}>Review Your Trip</Text>
      <View style={{
        marginTop:20,
       
      }}>
        <Text style={{
            fontFamily:'outfit',
        }}>Before generating your trip, please review your selection</Text>
        <View style={{ marginTop:40, display:'flex',
        flexDirection:'row', gap:20}}>
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <View style={{fontSize:30}}>📍</View>
        <View>
            <Text style={{ fontFamily:'outfit', fontSize:15, color:'gray'}}>Destination</Text>
            <Text style={{ fontFamily:'outfit-medium', fontSize:20}}>{aiData?.Data}</Text>
        </View>
        </View>

        <View style={{ marginTop:25, display:'flex',
        flexDirection:'row', gap:20}}>
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <View style={{fontSize:30}}>🗓️</View>
        <View>
            <Text style={{ fontFamily:'outfit', fontSize:15, color:'gray'}}>Travel Date</Text>
            <Text style={{ fontFamily:'outfit-medium', fontSize:20}}>{moment(aiData?.startDate).format('DD MMM')+" to "+moment(aiData?.endDate).format('DD MMM')+" "} ({aiData?.totalDays} days)</Text>
        </View>
        </View>

        <View style={{ marginTop:25, display:'flex',
        flexDirection:'row', gap:20}}>
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <View style={{fontSize:30}}>🚎</View>
        <View>
            <Text style={{ fontFamily:'outfit', fontSize:15, color:'gray'}}>Who is Traveling</Text>
            <Text style={{ fontFamily:'outfit-medium', fontSize:20}}>
                {
                    aiData?.traveler?.title
                }
            </Text>
        </View>
        </View>

        <View style={{ marginTop:25, display:'flex',
        flexDirection:'row', gap:20}}>
        {/* <Ionicons name="location-sharp" size={34} color="black" /> */}
        <View style={{fontSize:30}}>💰</View>
        <View>
            <Text style={{ fontFamily:'outfit', fontSize:15, color:'gray'}}>Budget</Text>
            <Text style={{ fontFamily:'outfit-medium', fontSize:20}}>
                {
                    aiData?.budget
                }
            </Text>
        </View>
        </View>
        
      </View>
      <Pressable onPress={()=>router.replace('/create-trip/generateTrip')}  style={{ padding:15, backgroundColor:'black', borderRadius:15, marginTop:80}}>
        <Text style={{
            color:'white',
            textAlign:'center',
            fontFamily:'outfit-medium'
        }}>Build my trip</Text>
      </Pressable>
    </View>
  )
}