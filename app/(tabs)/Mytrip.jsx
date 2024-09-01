import { View, Text, ActivityIndicator,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTrip from '../../components/Mytrip/StartNewTrip';
import { db,auth } from '../../configs/firebaseConfig';
import UserTripLists from '../../components/Mytrip/UserTripLists';
export default function Mytrip() {
  const [loading,setLoading] = useState(false)
  const user= auth.currentUser
  const [userTrip, setUserTrip] = React.useState([])
  useEffect(()=>{
   user && getMyTrip()
  },[user])
  const getMyTrip= async()=>{
    setLoading(true)
    setUserTrip([])
    const q= query(collection(db,'UserTrips'),where('userEmail','==',user?.email));
    const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  setUserTrip(prev=>[...prev,doc.data()])
});
setLoading(false)
  }
  return (
    <ScrollView style={{
      padding:25,
      paddingTop:55,
      height:'100%',
      backgroundColor:'white'
    }}>
      <View style={{ display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <Text style={{ fontFamily:'outfit-bold',
      fontSize:35}}>Mytrip</Text>
     <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {loading&& <ActivityIndicator size="large" color="black" />}
      {
        userTrip?.length==0? <StartNewTrip/>:<UserTripLists userTrip={userTrip}/>
      }
    </ScrollView>
  )
}