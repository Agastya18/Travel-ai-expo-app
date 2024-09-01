import { View, Text, FlatList,Pressable } from 'react-native'
import React from 'react'
import { useEffect,useState } from 'react'
import { TravelList } from '../../constants/Option'
import { Link, useNavigation } from 'expo-router'
import TripCard from '../../components/CreateTrip/TripCard'
import { useZusStore } from '../../store/zus'
import { useRouter } from 'expo-router'
export default function selectTravel() {
    const router = useRouter()
    const {setUserTrip,setAiData,aiData} = useZusStore()
    const [selectTravel,setSelectedTravel]= useState()
    const navigation= useNavigation()
    
    useEffect(()=>{

        navigation.setOptions({
            title:'',
            headerShown: true,
            headerTransparent: true})
    },[])
    useEffect(()=>{
        setAiData({...aiData, traveler:selectTravel})
       // setUserTrip({selectTravel})
    },[selectTravel])
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        height: '100%',
        backgroundColor:'white'
    }}>
      <Text style={{
        fontSize:35,
        fontFamily:'outfit-bold',
        marginTop:20
      }}>Who's Traveling</Text>
      <View>
        <Text style={{
            fontFamily:'outfit',
            fontSize:20,
            marginTop:20
        }}>Choose your travels</Text>
        <FlatList data={TravelList} renderItem={({item,index})=>(
           <Pressable onPress={()=>setSelectedTravel(item)} style={{marginVertical:10}}>
           <TripCard option={item} selectOption={selectTravel}/>
           </Pressable>
        )}/>
      </View>
     
      <Pressable onPress={()=>router.push('/create-trip/selectDates')} style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        marginTop:20,
      }}>
      <Text style={{
        textAlign:'center',
        color:'white',
        fontFamily:'outfit-medium',
      }}>Continue</Text>

      </Pressable>
     
    </View>
  )
}