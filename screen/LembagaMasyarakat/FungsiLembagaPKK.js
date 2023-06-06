import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const FungsiLembagaPKK = ({ navigation }) => {
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
      <View style={{ backgroundColor: "#E0E0E0", padding: 20 }}>
        <Text
          style={{
            color: "#0f56b3",
            fontSize: 12,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          PEMBERDAYAAN KESEJAHTERAAN KELUARGA
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
        onPress={() => {navigation.navigate("TugasPKK")}}
          style={{
            flex: 1,
            alignItems: "center",
            borderColor: "#E0E0E0",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 10, color: "#0F56B3", padding: 10 }}>
            Tugas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            alignItems: "center",
            borderColor: "#E0E0E0",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontSize: 10, color: "#0F56B3", padding: 10 }}>
            Fungsi
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{padding: 20}}>
        <View style={{flexDirection: "row"}}>
          <Text style={{ fontSize: 12,  padding: 5 }}>1. </Text>
          <Text style={{ fontSize: 12,  padding: 5, textAlign: 'justify' }}>
            Penyuluh, motivator dan penggerak masyarakat agar mau dan mampu
            melaksanakan program PKK; dan
          </Text>
        </View>

        <View style={{flexDirection: "row"}}>
          <Text style={{ fontSize: 12,  padding: 5 }}>2. </Text>
          <Text style={{ fontSize: 12,  padding: 5, textAlign: 'justify' }}>
          Fasilitator, perencana, pelaksana, pengendali, pembina dan pembimbing Gerakan PKK.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FungsiLembagaPKK;