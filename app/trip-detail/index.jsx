
import { View, Text, Image,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useGlobalSearchParams, useNavigation } from 'expo-router'
import moment from 'moment'
import FlightInfo from '../../components/TripDetails/FlightInfo'
import HotelList from '../../components/TripDetails/HotelList'
import PlannedTrip from '../../components/TripDetails/PlannedTrip'
const log= require('../../assets/images/log.jpeg')
export default function index() {
    
    const navigation = useNavigation()
    const {trip}= useGlobalSearchParams()
    const [tripDetail,setTripDetail]= useState([])
  //  const [d,setD]=useState()
    const Latestdata= JSON.parse(trip)
    console.log(Latestdata)
    console.log(JSON.parse(Latestdata?.tripData))
    const ofData= JSON.parse(Latestdata?.tripData)
   
    
     
    useEffect(()=>{
        navigation.setOptions({
            title:'',
            
            headerShown: true,
            headerTransparent: true})
            setTripDetail(Latestdata)
         // console.log(tripDetail)
        
           
    },[])
   
   
  return tripDetail&& (
    <ScrollView>
     <Image source={log} style={{width:'100%',height:330}}/>
     <View style={{ padding:15, height:"100%",  backgroundColor:'white',marginTop:-30, borderTopLeftRadius:30, borderTopRightRadius:30}}>
        <Text style={{ fontSize:25, fontFamily:'outfit-bold'}}>{ofData.Data}</Text>
        <View style={{display:'flex', flexDirection:'row',gap:5,marginTop:5}}>
        <Text style={{ fontSize:15, fontFamily:'outfit',color:'gray'}}>{moment(ofData.startDate).format('DD MMM yyyy')}</Text>
        <Text style={{ fontSize:15, fontFamily:'outfit',color:'gray'}}>- {moment(ofData.endDate).format('DD MMM yyyy')}</Text>
        </View>

        <Text style={{fontSize:15, fontFamily:'outfit',color:'gray'}}>🚌 {ofData.traveler.title}</Text>
        <FlightInfo flightData={Latestdata.tripPlan.flight_details
}/>

<HotelList hotel={Latestdata.tripPlan.hotel_options}/>
<PlannedTrip details={Latestdata.tripPlan.
places_to_visit
}/>
     </View>
    
    </ScrollView>
  )
}