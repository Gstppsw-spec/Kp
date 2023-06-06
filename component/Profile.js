import React, { useLayoutEffect } from "react";
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

const Profile = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" hidden backgroundColor="#00BCD4" />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <View style={{ marginBottom: 80 }}>
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
        </View>

        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("../asset/user.png")}
            style={{ width: 100, height: 100, marginBottom: 30 }}
          />

          <Text
            style={{ color: "#000000", fontWeight: "bold", marginBottom: 10 }}
          >
            {" "}
            Vina Lystia Utami{" "}
          </Text>
          <Text style={{ color: "#818181" }}> 1234567890000000</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              textAlign: "center",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              paddingRight: 70,
              paddingLeft: 70,
              marginBottom: 6,
            }}
          >
            <Text style={{ color: "#000", fontSize: 12, textAlign: "center" }}>
              Profile
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              paddingRight: 50,
              paddingLeft: 50,
              marginBottom: 6,
            }}
          >
            <Text style={{ color: "#000", fontSize: 12, textAlign: "center" }}>
              Cetak Biodata
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFf",
              textAlign: "center",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              paddingRight: 63,
              paddingLeft: 63,
              marginBottom: 6,
            }}
          >
            <Text style={{ color: "#000", fontSize: 12, textAlign: "center" }}>
              Ganti PIN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFf",
              textAlign: "center",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              paddingRight: 63,
              paddingLeft: 63,
              marginBottom: 6,
            }}
          >
            <Text style={{ color: "#000", fontSize: 12, textAlign: "center" }}>
              Verivikasi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#DE0000",
              textAlign: "center",
              padding: 10,
              margin: 5,
              borderRadius: 10,
              paddingRight: 72,
              paddingLeft: 72,
              marginBottom: 100,
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: 12, textAlign: "center" }}
            >
              Keluar
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

export default Profile;
