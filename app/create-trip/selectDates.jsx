import { View, Text, Pressable, ToastAndroid } from 'react-native'
import React from 'react'
import CalendarPicker from "react-native-calendar-picker";
import { useEffect,useState } from 'react'
import moment, { months } from "moment";
import { useZusStore } from '../../store/zus'
import { Link, useNavigation,useRouter } from 'expo-router'
export default function selectDates() {
    const [startDate, setStartDate] = useState()
    const {setAiData,aiData} = useZusStore()
    const [endDate, setEndDate] = useState()
    const navigation= useNavigation()
    const router = useRouter()
    useEffect(()=>{

        navigation.setOptions({
            title:'',
            headerShown: true,
            headerTransparent: true})
    },[])
   
    const onDateChange=(date,type)=>{
        console.log(date,type)
        if(type === 'START_DATE'){
            setStartDate(moment(date))
        }else{
            setEndDate(moment(date))
        }

    }
    const onDateSelectionContinue=()=>{
        if(!startDate && !endDate){
            ToastAndroid.show('Please select a start and end date', ToastAndroid.SHORT)
            return
        }
        const totalDays = endDate.diff(startDate, 'days')
        console.log(totalDays+1)
        setAiData({...aiData, startDate:startDate, endDate:endDate, totalDays:totalDays+1})
        router.push('/create-trip/selectBudget')
        
    }
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:20
      }}>Travel Dates</Text>
      <View style={{
        marginTop:20
      }}>
      <CalendarPicker onDateChange={onDateChange} allowRangeSelection={true} minDate={new Date()} maxRangeDuration={5} selectedRangeStyle={{ backgroundColor:'black'}} selectedDayTextStyle={{
        color:'white'
      }} />
      </View>
      <Pressable onPress={onDateSelectionContinue} style={{ padding:15, backgroundColor:'black', borderRadius:15, marginTop:35}}>
        <Text style={{
            color:'white',
            textAlign:'center',
            fontFamily:'outfit-medium'
        }}>Continue</Text>
      </Pressable>
    </View>
  )
}