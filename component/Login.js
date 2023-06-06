import React, { Component, useLayoutEffect } from "react";
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

const Login = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const masuk = () => {
    navigation.navigate("Utama");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        height: "100%",
        width: "100%",
      }}
    >
      <StatusBar barStyle="dark-content" hidden backgroundColor="#00BCD4" />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <View style={{ marginBottom: 120 }}>
            <Text
              style={{
                color: "#0F56B3",
                fontSize: 10,
                textAlign: "center",
                letterSpacing: 1.5,
              }}
            >
              Aplikasi Digital Warga Desa
            </Text>
            <Text
              style={{
                color: "#0F56B3",
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
              }}
            >
              Pekon Tulung Agung
            </Text>
          </View>
          <View style={{ marginBottom: 50 }}>
            <Text
              style={{ color: "#0F56B3", fontSize: 10, textAlign: "center" }}
            >
              Anda harus masuk terlebih dahulu untuk mengakses fitur ini
            </Text>
          </View>

          <View style={{ marginBottom: 40 }}>
            <Text
              style={{ color: "#818181", fontSize: 10, textAlign: "center" }}
            >
              Silahkan hubungi operator desa
            </Text>
            <Text
              style={{ color: "#818181", fontSize: 10, textAlign: "center" }}
            >
              untuk mendapatkan kode PIN Anda
            </Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <TextInput
              style={{
                textAlign: "center",
                borderColor: "#FF8A00",
                borderWidth: 1,
                padding: 10,
                margin: 5,
                borderRadius: 5,
                paddingRight: 80,
                paddingLeft: 80,
              }}
              placeholder="NIK"
            />
            <TextInput
              style={{
                textAlign: "center",
                borderColor: "#FF8A00",
                borderWidth: 1,
                padding: 10,
                margin: 5,
                borderRadius: 5,
                paddingRight: 80,
                paddingLeft: 80,
                marginBottom: 15,
              }}
              placeholder="PIN"
            />
          </View>
        </View>

        <View>
          {/* <CheckBox
                disabled={false}
            /> */}
          <Text
            style={{
              color: "#818181",
              fontSize: 10,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            ☑ Tampilkan PIN
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF8A00",
              textAlign: "center",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              paddingRight: 70,
              paddingLeft: 70,
            }}
            onPress={masuk}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 12, textAlign: "center" }}
            >
              Masuk
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#DE0000",
              textAlign: "center",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              paddingRight: 65,
              paddingLeft: 65,
              marginBottom: 100,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 12, textAlign: "center" }}
            >
              Lupa PIN
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{ color: "#818181", fontSize: 10, textAlign: "center" }}>
            {" "}
            Ⓒ Pekon Tulung Agung 2022
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          height: 60,
          flexDirection: "row",
          position: "relative",
          borderTopWidth: 1,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("UtamaDua")}
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
          onPress={() => navigation.navigate("Galery")}
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
          onPress={() => navigation.navigate("Lapak")}
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
          onPress={() => navigation.navigate("News")}
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
          onPress={() => navigation.navigate("Profile")}
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
};

export default Login;
