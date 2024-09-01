import { View, Text,Image } from 'react-native'
import { useEffect,useState } from 'react'
import { getPhotoRef } from '../../service/PlaceSearch'
const log= require('../../assets/images/log.jpeg')
export default function HotelCard({item}) {
  //  console.log(item)
    const[photo,setPhoto]= useState([])
    useEffect(()=>{
        GetPhotos()
        //console.log(photo)
    },[])
    const GetPhotos=async()=>{
        const res= await getPhotoRef(item.hotel_name)
       // console.log(res)
       setPhoto(res.results)
 
     }
  return (
    <View style={{ marginRight:20, width:180}}>
           <Image style={{width:180, height:120 ,borderRadius:15}} source={log}/>
           <View>
            <Text style={{ fontFamily:'outfit-medium', fontSize:15}}>{item.hotel_name}</Text>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontFamily:'outfit'}}>⭐️{item.rating}</Text>
                <Text style={{fontFamily:'outfit'}}>💰{item.price}</Text>
            </View>
           </View>
        </View>
  )
}