import { View, Text, FlatList, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useNavigation,useRouter } from 'expo-router'
import { BudgetList } from '../../constants/Option'
import TripCard from '../../components/CreateTrip/TripCard'
import { useZusStore } from '../../store/zus'

export default function selectBudget() {
    const navigation= useNavigation()
    const router = useRouter()
    const {setAiData,aiData} = useZusStore()
    const [selectedOption, setSelectedOption]= useState()
    useEffect(()=>{
        navigation.setOptions({
            title:'',
            headerShown: true,
            headerTransparent: true})
    })
    useEffect(()=>{
        setAiData({...aiData, budget:selectedOption?.title})

    },[selectedOption])
    const onClickhandle=()=>{
        if(!selectedOption){
            ToastAndroid.show('Please select a budget option', ToastAndroid.SHORT)
            return
        }
        router.push('/create-trip/reviewTrip')
    }
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        height: '100%',
        backgroundColor:'white'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Budget</Text>
      <View style={{ marginTop:20}}>
        <Text style={{
            fontFamily:'outfit',
            fontSize:20,
        }}>Choose spending habit for your trip</Text>
        <FlatList data={BudgetList} renderItem={({item,index})=>(
            <Pressable onPress={()=>setSelectedOption(item)} style={{marginVertical:10}}> 
                <TripCard option={item} selectOption={selectedOption} />
            </Pressable>
        )}/>
      </View>
      <Pressable onPress={()=>onClickhandle()} style={{
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