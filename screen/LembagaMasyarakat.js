import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const LembagaMasyarakat = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "LEMBAGA MASYARAKAT",
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0F56B3",
      },
      headerTitleStyle: {
        fontSize: 12,
        fontWeight: "bold",
      }
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {navigation.navigate("TugasPKK")}}
      >
        <View style={{ alignItems: "center", padding: 20, paddingBottom: 0, }}>
          <Image source={require("../asset/gambarLembaga.png")} />
        </View>
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            padding: 15,
            margin: 29,
            marginTop: 0,
            marginBottom: 15,
            borderColor: '#E0E0E0'
          }}
        >
          <Text style={{ fontSize: 8 }}>
            Pemberdayaan Kesejahteraan Keluarga (PKK)
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {navigation.navigate("TugasKT")}}
        >
        <View style={{ alignItems: "center", padding: 20, paddingBottom: 0, paddingTop: 0 }}>
          <Image source={require("../asset/gambarLembaga.png")} />
        </View>
        <View
          style={{
            alignItems: "center",
            borderWidth: 1,
            padding: 15,
            margin: 29,
            marginTop: 0,
            borderColor: '#E0E0E0'
          }}
        >
          <Text style={{ fontSize: 8 }}>
            KARANG TARANA
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LembagaMasyarakat;
