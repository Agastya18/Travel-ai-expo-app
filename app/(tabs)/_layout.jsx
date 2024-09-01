import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown:false
    }}>
      <Tabs.Screen name='Mytrip' options={{
        tabBarIcon:({color})=> <Ionicons name="location-sharp" size={24} color="black" />
      }}/>
      <Tabs.Screen name='discover'
        options={{
            tabBarIcon:()=> <Ionicons name="globe-sharp" size={24} color="black" />
        }}
      />
      <Tabs.Screen name='Profile'
         options={{
            tabBarIcon:()=> <Ionicons name="people-circle" size={24} color="black" />
        }}
      />
    </Tabs>
  )
}