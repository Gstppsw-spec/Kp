import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const Lapak = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "LAPAK",
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0F56B3",
        fontSize: 12,
      },
      headerTitleStyle: {
        fontSize: 12,
        fontWeight: "bold",
      },
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{flex: 1}}
    >
      <ScrollView>

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

export default Lapak;
