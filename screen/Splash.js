import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Splash = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);


    const rumah = () => {
        navigation.navigate('UtamaDua')
    }
  return (
    <SafeAreaView
        onTouchStart={rumah}
      style={{ backgroundColor: "#0F56B3", width: "100%", height: "100%" }}
    >
      <StatusBar hidden />
      <View style={{ alignItems: "center", marginTop: "90%" }}>
        <Text style={{ letterSpacing: 1.5, fontSize: 15, color: 'white' }}>
          Aplikasi Digital Warga Desa
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 24, color: 'white' }}>
          Pekon Tulung Agung
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
