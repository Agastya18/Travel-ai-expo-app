import { View, Text,Image,StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'
const logo = require('@/assets/images/log.jpeg')
export default function Login() {
    const router = useRouter()
  return (
    <View>
     <Image source={logo} style={{ width:'100%', height:500}} />

     <View style={styles.container}>
        <Text style={{fontFamily:'outfit-bold', fontSize:28, textAlign:'center'}}>
            AI Travel Service
        </Text>

        <Text style={{fontFamily:'outfit', marginTop:20, fontSize:17, textAlign:'center', color:'grey'}}>
        Discover your next adventure effortlessly. Personalized
        itineraries at your fingertips. Travel smarter with Al-driven insights.
        </Text>
        <Pressable onPress={()=>router.push('/auth/sign-in')} style={styles.button}>
            <Text style={{ color:"white", textAlign:"center", fontFamily:'outfit', fontSize:17}}>Sign In with google</Text>
        </Pressable>
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        marginTop:-20,
        backgroundColor:Colors.WHITE,
        height:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:20
    },
    button:{
        padding:15,
        backgroundColor:'black',
        borderRadius:99,
        marginTop:'20%'
    }
})