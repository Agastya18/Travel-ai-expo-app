import { View, Text, Pressable } from "react-native";
import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function FlightInfo({ flightData }) {
  console.log("this if ff", flightData);
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: "#f2f2f2",
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>
          ✈️ Flights
        </Text>
        <Pressable
          style={{
            backgroundColor: "black",
            padding: 5,
            width: 100,
            borderRadius: 7,
            marginTop: 7,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              color: "white",
            }}
          >
            Book here
          </Text>
        </Pressable>
      </View>

      <Text style={{ fontFamily: "outfit", fontSize: 17, marginTop: 7 }}>
        Airline: {flightData.flight_name}
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "outfit", fontSize: 17 }}>
          Price: {flightData.flight_price}
        </Text>
        <Text style={{ fontFamily: "outfit", fontSize: 17 }}>
          {flightData.departure_city}
          <AntDesign name="arrowright" size={21} color="black" style={{marginLeft:5, marginRight:5}} />
          {flightData.arrival_city}
        </Text>
      </View>
    </View>
  );
}
