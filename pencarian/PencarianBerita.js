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
const PencarianBerita = ({ navigation }) => {
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
          height: "100%",
          width: "100%",
        }}
      >
        <View style={{ marginBottom: 10 }}></View>
        <View style={{ marginBottom: 10, padding: 5 }}>
          <TextInput style={{ borderWidth: 1 }} placeholder="  Cari Berita" />
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", padding: 10 }}>
          <View>
            <Image
              source={require("../asset/cari.png")}
              style={{ width: 125, height: 70 }}
            />
          </View>

          <View style={{ marginLeft: 15, marginRight: 20 }}>
            <Text style={{ fontSize: 8, marginBottom: 5, marginTop: 5 }}>
              01 Januari 2022
            </Text>
            <Text
              style={{
                fontSize: 8,
                textAlign: "left",
                marginBottom: 5,
                marginRight: 100,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontSize: 8 }}>Baca selengkapnya</Text>
          </View>
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

export default PencarianBerita;
