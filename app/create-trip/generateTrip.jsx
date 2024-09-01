import { View, Text,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
const plane = require('../../assets/images/plane.gif')
import { useZusStore } from '../../store/zus'
import { AI_PROMPT } from '../../constants/Option'
import { chatSession } from '../../configs/AiModel'
import { doc, setDoc } from "firebase/firestore"; 
import {auth,db} from '../../configs/firebaseConfig'
import { useRouter } from 'expo-router'
export default function generateTrip() {
    
    const user=auth.currentUser
    const router=useRouter()
    const {setAiData,aiData} = useZusStore()
    const [loading,setLoading]= useState(false)
    useEffect(()=>{
     generateAiTrip()
    },[])
    const generateAiTrip= async()=>{
        setLoading(true)
        const FINAL_PROMPT=AI_PROMPT.replace('{location}', aiData?.Data)
                                    .replace('{totalDays}', aiData?.totalDays)
                                    .replace('{totalNight}', aiData?.totalDays-1)
                                    .replace('{traveler}', aiData?.traveler?.title)
                                    .replace('{budget}', aiData?.budget)
                                    .replace('{totalDays}', aiData?.totalDays)
                                    .replace('{totalNight}', aiData?.totalDays-1)

        
        console.log(FINAL_PROMPT)
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripRes= JSON.parse(result.response.text())

        setLoading(false)
        const docId= (Date.now()).toString()
       const res= await setDoc(doc(db,"UserTrips",docId),{
            userEmail:user.email,
            tripPlan:tripRes,
            tripData: JSON.stringify(aiData)

        })
        
            router.push('(tabs)/Mytrip')
   
        

        //router.push('(tabs)/Mytrip')

    }
  return (
    <View style={{
        padding:25,
        height: '100%',
         paddingTop:75,
        backgroundColor: 'white'
    }}>
      <Text style={{ fontFamily:'outfit-bold', fontSize:35, textAlign:'center'}}>Please Wait...</Text>

      <Text style={{ fontFamily:'outfit-medium', fontSize:20, textAlign:'center', color:'gray', marginTop:40}}>We are working to generate your dream trip</Text>
      <Image style={{ objectFit:'contain', marginLeft:45, marginTop:40}} source={plane} />
      <Text style={{ fontFamily:'outfit-bold', fontSize:20, textAlign:'center', color:'gray', marginTop:40}}>Do not go back</Text>
    </View>
  )
}