import { View, Text, TextInput,StyleSheet,Pressable, ToastAndroid } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../../configs/firebaseConfig';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function index() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation= useNavigation()
    const router= useRouter()
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    const onSignIn = ()=>{
      if(!email && !password){
        ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT)
        return 
      }

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/Mytrip')
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode=== 'auth/invalid-credential'){
      ToastAndroid.show('Invalid credentials', ToastAndroid.SHORT)
    }
  });
    }
  return (
    <View style={{
        padding:25,
        
        marginTop:20,
        backgroundColor:'white',
        height:'100%',
        paddingTop:40
    }}>
      
      <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        marginTop:20
      }}>Welcome !</Text>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:30,
        marginTop:10
      }}>You have been missed</Text>

      <View style={{marginTop:50}}>
        <Text style={{fontFamily:'outfit'}}>Email:</Text>
        <TextInput onChangeText={(v)=>setEmail(v)} style={styles.input} placeholder='enter email'/>
      </View>

      <View style={{marginTop:20}}>
        <Text style={{fontFamily:'outfit'}}>Password:</Text>
        <TextInput onChangeText={(v)=>setPassword(v)} secureTextEntry={true} style={styles.input} placeholder='enter password'/>
      </View>
      <Pressable onPress={onSignIn} style={{
        padding:15,
        backgroundColor:'black',
        borderRadius:15,
        marginTop:50
      }}>
        <Text style={{ textAlign:'center', color:'white'}}> SignIn</Text>
      </Pressable>
      <Pressable onPress={()=>router.replace('auth/sign-up')} style={{
        padding:15,
       // backgroundColor:'black',
        borderRadius:15,
       borderWidth:1,
       backgroundColor:'white',
        marginTop:20
      }}>
        <Text style={{ textAlign:'center', }}> Create account</Text>
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