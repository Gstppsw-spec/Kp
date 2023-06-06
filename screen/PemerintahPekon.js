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

const PemerintahPekon = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "PEMERINTAH PEKON",
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
      <ScrollView>
      <StatusBar hidden />
      <View style={{marginTop: 15, marginLeft: 15 }}>
        <View>
          <Text style={{fontSize: 12, letterSpacing: 1, color: '#0F56B3', fontWeight: 'bold'}}>APARAT PEKON</Text>
        </View>
      </View>
      
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderTopLeftRadius: 10,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>             Kepala Pekon           </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderTopRightRadius: 10,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>     Darmawan      </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>             Sekretaris Pekon        </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>   Rusdian Ali     </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>   Kepala Urusan Keuangan   </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>Sigit Yuliansyah</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>  Kepala Urusan Perencanaan  </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>      Sanen       </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>Kepala Urusan TU dan Umum</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>Aulia Rohmani</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>      Kepala Seksi Kesra      </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>Fadia Anzun Utari</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>Kepala Seksi Pemerintahan </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>Ari Eko Saputro</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>    Kepala Seksi Pelayanan    </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>  Yani Safrudin  </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>          Kepala Dusun I         </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>          Kirnadi          </Text>
        </View>
      </View>


      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>       Kepala Dusun II       </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>      Deni Jayanto       </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>        Kepala Dusun III         </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>     Eko Priyadi       </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>        Kepala Dusun IV         </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>          Sabirin         </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>          Kepala Dusun V          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>    Nurohman       </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>          Kepala Dusun VI          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>      Muchtar        </Text>
        </View>
      </View>


      <View style={{marginTop: 15, marginLeft: 15 }}>
        <View>
          <Text style={{fontSize: 12, letterSpacing: 1, color: '#0F56B3', fontWeight: 'bold', marginLeft: 10,}}>ANGGOTA BADAN HIMPUNAN PEMEKONAN (BHP)</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderTopLeftRadius: 10,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>             Ketua           </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            borderTopRightRadius: 10,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>     Heri Purnomo      </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>        Wakil Ketua         </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>  Indra Wahyudi     </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>            Sekretaris         </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>       Maryanto        </Text>
        </View>
      </View>


      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomLeftRadius:10,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>       Kepala Dusun V      </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 60,
            paddingRight: 60,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 1,
            paddingRight: 1, }}>Lukman Santoso</Text>
        </View>
      </View>

      <View style={{marginTop: 30}}></View>

      </ScrollView>

    </SafeAreaView>
  );
};

export default PemerintahPekon;
