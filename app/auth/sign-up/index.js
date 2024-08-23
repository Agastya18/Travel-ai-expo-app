import { View, Text, TextInput,StyleSheet,Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'

export default function index() {
    const navigation= useNavigation()
    const router= useRouter()
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])
  return (
    <View style={{
        padding:25,
     //   marginTop:60,
        backgroundColor:'white',
        height:'100%',
        paddingTop:40
    }}>
    
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:20
      }}>Create New Account!</Text>
      <View style={{marginTop:50}}>
        <Text style={{fontFamily:'outfit'}}>Name:</Text>
        <TextInput style={styles.input} placeholder='enter name'/>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily:'outfit'}}>Email:</Text>
        <TextInput style={styles.input} placeholder='enter email'/>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily:'outfit'}}>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='enter password'/>
      </View>
      <View style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{ textAlign:'center', color:'white'}}> SignUp</Text>
      </View>
      <Pressable onPress={()=>router.replace('auth/sign-in')} style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        marginTop:20
      }}>
        <Text style={{ textAlign:'center', color:'white'}}> Back to signin</Text>
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