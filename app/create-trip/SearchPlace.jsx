import { View, Text,StyleSheet,TextInput ,Pressable} from 'react-native'
import React, { useEffect,useState } from 'react'
import { useNavigation,useRouter } from 'expo-router'
import { useZusStore } from '../../store/zus';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
export default function searchplace() {

    const {setAiData} = useZusStore()
    const [Data,setData]= useState()
    
    const navigation = useNavigation()
    const router = useRouter()
    useEffect(()=>{
        navigation.setOptions({
            
            title:'Search Place',
            headerShown: true,
            headerTransparent: true
        })
    },[])

    const handleSubmit = ()=>{
        setAiData({Data});
        router.push('/create-trip/selectTravel')
        
    }
  return (
    <View style={{
        padding:25,
        paddingTop:75,
        backgroundColor:'white',
        height:'100%'
    }}>
         <View style={{marginTop:50}}>
        <Text style={{fontFamily:'outfit',marginLeft:5}}>Place:</Text>
        <TextInput onChangeText={(v)=>setData(v)} style={styles.input} placeholder='enter place'/>
      </View>
      <Pressable onPress={handleSubmit}  style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{ textAlign:'center', color:'white'}}> Add place</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:'grey',
        fontFamily:'outfit',

    }
})