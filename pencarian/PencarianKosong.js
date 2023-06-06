import React, { useLayoutEffect } from 'react'
import {
  View,
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
const PencarianKosong = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="dark-content" hidden backgroundColor="#00BCD4" />
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#818181",
          height: "100%",
          width: "100%",
          
        }}
      >
        <View style={{marginBottom: 10,}}>

        </View >
        <View style={{marginBottom: 50, padding: 5}}>
          <TextInput
            style={{borderWidth: 1,}}
            placeholder='  Cari Berita'
          />
        </View>

        <View>
            {/* <Text style={{textAlign: 'center', color:'#0F56B3', fontSize:15}}>Kami tidak dapat menemukan hasil untuk </Text>
            <Text style={{textAlign: 'center', color:'#0F56B3', fontSize:15}}> kata kunci yang ada masukkan !. </Text> */}
            <View style={{borderWidth: 1, alignItems:'center', padding: 15, margin: 100, marginTop: 250, backgroundColor: 'red'}}>
                <Text>Kosong</Text>
            </View>
        </View>
        
     </ScrollView>

      <View style={{ height: 60, flexDirection: "row", position: "relative" }}>
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", marginTop: 5 }}
        >
          <View style={{ width: 26, height: 26 }}>
            <Image
              source={require("../asset/house.png")}
              style={{ width: 23, height: 23 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 10, marginTop: 2 }}>
            Menu Utama
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", marginTop: 5 }}
        >
          <View style={{ width: 26, height: 26 }}>
            <Image
              source={require("../asset/gambar.png")}
              style={{ width: 23, height: 23 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 10, marginTop: 2 }}>
            Galeri
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", marginTop: 5 }}
        >
          <View style={{ width: 26, height: 26 }}>
            <Image
              source={require("../asset/shop.png")}
              style={{ width: 23, height: 23 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 10, marginTop: 2 }}>
            Lapak Desa
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", marginTop: 5 }}
        >
          <View style={{ width: 26, height: 26 }}>
            <Image
              source={require("../asset/news.png")}
              style={{ width: 23, height: 23 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 10, marginTop: 2 }}>
            Berita
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", marginTop: 5 }}
        >
          <View style={{ width: 26, height: 26 }}>
            <Image
              source={require("../asset/user.png")}
              style={{ width: 23, height: 23 }}
            />
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 10, marginTop: 2 }}>
            Akun
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default PencarianKosong;