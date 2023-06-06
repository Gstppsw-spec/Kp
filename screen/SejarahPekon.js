import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

const SejarahPekon = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "SEJARAH PEKON",
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
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
      }}
    >
      <StatusBar hidden />
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View>
            <Text
              style={{ color: "#0F56B3", fontSize: 13, fontWeight: "bold" }}
            >
              Desa Tulung Agung
            </Text>
            <Text style={{ fontSize: 10, marginTop: 4, textAlign: "justify" }}>
              Terbentuk pada tahun 1918 yang merupakan program marga dari
              Pemerintah Hindia Belanda pada saat berkuasa dibelahan Bumi
              Nusantara ini. Pembukaan Pekon Tulung Agung waktu itu dipimpin
              oleh seorang pendatang dari Pulau Jawa yang bernama Bapak
              Sopawiro. Bapak Sopawiro dibantu teman-temannya yang berasal dari
              Pulau Jawa, yang tepatnya dari Purworejo, Kabupaten Purworejo Jawa
              Tengah saat ini. Karena dengan kondisi/keadaan saat itu masih
              banyak pohon besar yang dipandang angker dan binatang buas yang
              membahayakan, maka Bapak Sopawiro dengan izin Pemerintah Hindia
              Belanda, berangkat ke Jawa Timur dan mengambil orang-orang dari
              Desa Tulung Agung di Karesidenan Kediri sebanyak 100 orang. Untuk
              mengenang orang-orang yang membantu Bapak Sopawiro yang datang
              dari Desa Tulung Agung, maka desa ini pun dinamai sesuai dengan
              asal teman-teman Bapak Sopawiro yaitu Tulung Agung. Desa/Pekon
              Tulung Agung ini pun sebagian besar penduduk awal mulanya berasal
              dari Jawa Timur dan Jawa Tengah.
            </Text>

            <Text
              style={{
                color: "#0F56B3",
                fontSize: 13,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Desa/Pekon Tulung Agung
            </Text>
            <Text style={{ fontSize: 10, marginTop: 4, textAlign: "justify" }}>
              Dibagi dalam 6 (enam) dusun, yang masing-masing dusun dipimpin
              oleh Kepala Dusun (KaDus) yang oleh warga dikenal dengan sebutan
              Bayan. Kebayan atau Rukun Warga (RW) memiliki rekan kerja yaitu
              Rukun Tetangga (RT).
            </Text>

            <Text style={{ fontSize: 10, marginTop: 4, textAlign: "justify" }}>
              Pada sekitar tahun 1955, warga Desa Tulung Agung juga membuka dan
              menebang hutan di Utara Desa Mataram, warga mengenal dengan
              sebutan Lor Kali, di lahan ini diberi nama Tri Tunggal. Tri
              Tunggal pun dijadikan dusun ke-7 pada waktu itu. Seiring waktu
              sekitar tahun 1989 saat Desa Tulung Agung dipimpin oleh Bapak M.
              Thowiluddin, dusun Tri Tunggal memisahkan diri dari Desa Tulung
              Agung dan menjadi desa mandiri.
            </Text>

            <Text
              style={{
                color: "#0F56B3",
                fontSize: 13,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              Desa/Pekon Tulung Agung
            </Text>
            <Text style={{ fontSize: 10, marginTop: 4, textAlign: "justify" }}>
              Berada diantara desa-desa yang lain, yang antara lain disebelah
              Utara berbatasan dengan Desa/Pekon Mataram, sebelah Timur
              berbatasan dengan Desa/Pekon Tegalsari, sebelah Selatan berbatasan
              dengan Desa/Pekon Wonodadi, sedangkan sebelah Barat berbatasan
              dengan Desa/Pekon Bulurejo.
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 15, padding: 20, paddingBottom: 0, }}>
          <View>
            <Text style={{ fontSize: 9, color: "#0F56B3", fontWeight: 'bold' }}>
              Kepala Pekon yang pernah memimpin Pekon Tulun Agung sampa sekarang
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderTopLeftRadius: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, fontWeight: 'bold' }}>Tahun Memerintah</Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              borderTopRightRadius: 10,
              paddingLeft: 40,
              paddingRight: 40,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, fontWeight:'bold' }}>Nama Kepala Pekon</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 62,
              paddingLeft: 62,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Sopawiro </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1920-1926
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 59,
              paddingLeft: 59,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}>Kromowiryo</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1926-1940
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 62,
              paddingLeft: 62,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Sopawiro </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 56,
              paddingLeft: 56,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Marsono AS </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 56,
              paddingLeft: 56,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Marsono AS </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 62,
              paddingLeft: 62,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Soekarno </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 38,
              paddingLeft: 38,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Karso Parto Atmojo </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 53,
              paddingLeft: 53,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Soegiarto AS </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 50,
              paddingLeft: 50,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> M. Thowilludin </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 63,
              paddingLeft: 63,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Wahyudi </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 48,
              paddingLeft: 48,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Agus Prastiono </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 29, paddingRight: 29 }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            1918-1920
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 51,
              paddingLeft: 51,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Amin Mutakin </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ borderWidth: 1, paddingLeft: 22, paddingRight: 20, borderBottomLeftRadius: 10, }}>
            <Text style={{ padding: 20, fontSize: 10, }}>
            2018-Sekarang
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              borderWidth: 1,
              paddingRight: 58,
              paddingLeft: 58,
              borderBottomRightRadius: 10,
            }}
          >
            <Text style={{ padding: 20, fontSize: 10, }}> Darmawan </Text>
          </View>
        </View>

        <View style={{marginTop: 40}}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SejarahPekon;
