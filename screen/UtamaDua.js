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
const UtamaDua = ({ navigation }) => {
  const login = () => {
    navigation.navigate("Login");
  };

  const home = () => {
    navigation.navigate("UtamaDua");
  };

  const identitas = () => {
    navigation.navigate("Identitas");
  };

  const administrasi = () => {
    navigation.navigate("Administrasi");
  };

  const pemerintah = () => {
    navigation.navigate("Pemerintah");
  };

  const sejarah = () => {
    navigation.navigate("Sejarah");
  };

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
        <View style={{ padding: 20 }}>
          <View
            style={{
              backgroundColor: "#0F56B3",
              padding: 20,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 18, color: "#fff" }}>
                Selamat Datang
              </Text>
              <Text style={{ fontSize: 18, color: "#fff" }}>
                di Aplikasi Digital Warga Desa
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ marginRight: 10 }}>
                <Image
                  source={require("../asset/Pringsewu.png")}
                  style={{ width: 25, height: 30, margin: 5 }}
                />
              </View>
              <View>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}
                >
                  Pekon Tulung Agung
                </Text>
                <Text style={{ fontSize: 10, marginBottom: 5, color: "#fff" }}>
                  Kec. Gadingrejo, Kab. Pringsewu, Provinsi Lampung
                </Text>
              </View>
            </View>
          </View>

          <View style={{ borderWidth: 1, marginBottom: 20, borderRadius: 5 }}>
            <TextInput placeholder="  Ketik disini untuk mencari" />
          </View>

          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                alignContent: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  padding: 15,
                  backgroundColor: "#fff",
                  paddingLeft: 40,
                  paddingRight: 40,
                }}
              >
                <Text style={{ fontSize: 10 }}>Lokasi Kantor Pekon</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  padding: 15,
                  backgroundColor: "#fff",
                  paddingLeft: 40,
                  paddingRight: 40,
                }}
              >
                <Text style={{ fontSize: 10 }}>Peta Wilayah Pekon</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <TouchableOpacity
                onPress={identitas}
                style={{
                  borderRadius: 10,
                  padding: 20,
                  backgroundColor: "#fff",
                  paddingBottom: 25,
                  paddingTop: 25,
                  marginRight: 2,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Identitas
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>Pekon</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={administrasi}
                style={{
                  borderRadius: 10,
                  padding: 10,
                  backgroundColor: "#fff",
                  paddingBottom: 25,
                  paddingTop: 25,
                  marginRight: 2,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Wilayah
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Administratif
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={pemerintah}
                style={{
                  borderRadius: 10,
                  padding: 15,
                  backgroundColor: "#fff",
                  paddingBottom: 25,
                  paddingTop: 25,
                  marginRight: 2,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Pemerintah
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>Pekon</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => {navigation.navigate("Statistik")}}
                style={{
                  borderColor: "#000",
                  borderRadius: 10,
                  padding: 20,
                  backgroundColor: "#fff",
                  paddingBottom: 25,
                  paddingTop: 25,
                  marginRight: 2,
                  shadowOffset: { width: -2, height: 10 },
                  shadowColor: "#000",
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  shadowColor: "#000",
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Statistik
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Produk
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                onPress={sejarah}
                style={{
                  borderRadius: 10,
                  padding: 35,
                  backgroundColor: "#fff",
                  paddingBottom: 25,
                  paddingTop: 25,
                  marginRight: 5,
                  shadowOffset: { width: -2, height: 10 },
                  shadowColor: "#000",
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  shadowColor: "#000",
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Sejarah
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>Pekon</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("VisiMisi");
                }}
                style={{
                  borderColor: "#000",
                  borderRadius: 10,
                  padding: 40,
                  backgroundColor: "#fff",
                  paddingBottom: 25,
                  paddingTop: 25,
                  marginRight: 5,
                  shadowOffset: { width: -2, height: 10 },
                  shadowColor: "#000",
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  shadowColor: "#000",
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "center" }}>Visi</Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>Misi</Text>
              </TouchableOpacity>

              <TouchableOpacity
              onPress={() => {navigation.navigate("LembagaMasyarakat")}}
                style={{
                  borderColor: "#000",
                  borderRadius: 10,
                  padding: 35,
                  backgroundColor: "#fff",
                  paddingBottom: 25,
                  paddingTop: 25,
                  marginRight: 5,
                  shadowOffset: { width: -2, height: 10 },
                  shadowColor: "#000",
                  shadowOpacity: 1,
                  shadowRadius: 10,
                  shadowColor: "#000",
                  elevation: 5,
                }}
              >
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Lembaga
                </Text>
                <Text style={{ fontSize: 10, textAlign: "center" }}>
                  Masyarakat
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              borderRadius: 10,
              padding: 10,
              marginBottom: 15,
            }}
          >
            <View style={{ marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#0F56B3",
                  marginBottom: 5,
                }}
              >
                Layanan Mandiri
              </Text>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    padding: 5,
                    borderRadius: 15,
                    paddingRight: 20,
                    paddingLeft: 20,
                    backgroundColor: "#FF8A00",
                  }}
                  onPress={login}
                >
                  <Text
                    style={{ fontSize: 8, textAlign: "center", color: "white" }}
                  >
                    Masuk
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#0F56B3",
                    borderRadius: 10,
                    padding: 15,

                    paddingLeft: 35,
                    paddingRight: 35,
                    marginRight: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Surat
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#0F56B3",
                    borderRadius: 10,
                    padding: 15,

                    paddingLeft: 35,
                    paddingRight: 35,
                    marginRight: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Pesan
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: "#0F56B3",
                    borderRadius: 10,
                    padding: 15,

                    paddingLeft: 35,
                    paddingRight: 35,
                    marginRight: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    Bantuan
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              borderRadius: 10,
              padding: 10,
              shadowOffset: { width: -2, height: 4 },
              shadowColor: "#171717",
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
            <View style={{ marginBottom: 3 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#0F56B3",
                  marginBottom: 5,
                }}
              >
                APBDes
              </Text>
              <Text style={{ fontSize: 10, marginBottom: 5 }}>
                Realisasi Pelaksanaan Anggaran Pendapatan dan Belanja Desa
                Pemerintah Pekon Tulung Agung Tahun Anggaran 2021
              </Text>
              <Text style={{ color: "#818181", fontSize: 10 }}>
                Lihat selengkapnya
              </Text>
            </View>
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
          onPress={home}
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

export default UtamaDua;
