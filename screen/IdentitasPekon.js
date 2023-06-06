import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from "react-native";

import axios from "axios";

const IdentitasPekon = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "IDENTITAS PEKON",
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0F56B3",
      },
      headerTitleStyle: {
        fontSize: 12,
        fontWeight: "bold",
      },
    });
  }, [navigation]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const response = await fetch("http://localhost:8000/api/datatolak");
  //   const jsonData = await response.json();
  //   setData(jsonData);
  // };

  // const renderItem = ({ item }) => (
  //   <View>
  //     <Text>{item.nama_alm}</Text>
  //     <Text>{item.nik_alm}</Text>
  //   </View>
  // );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
      }}
    >
      <StatusBar hidden />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 25,
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
          <Text style={{ padding: 20, fontSize: 10 }}>Provinsi</Text>
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
          <Text style={{ padding: 20, fontSize: 10 }}>Lampung</Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderWidth: 1, paddingLeft: 18, paddingRight: 18 }}>
          <Text style={{ padding: 20, fontSize: 10, paddingRight: 14 }}>
            Kabupaten
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
          <Text style={{ padding: 20, fontSize: 10, paddingLeft: 22 }}>
            Pringsewu
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderWidth: 1, paddingLeft: 14, paddingRight: 14 }}>
          <Text style={{ padding: 20, fontSize: 10 }}>Kecamatan</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 55,
            paddingRight: 55,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Gadingrejo</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderWidth: 1, paddingLeft: 25, paddingRight: 25 }}>
          <Text style={{ padding: 20, fontSize: 10 }}>Pekon</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 49,
            paddingRight: 49,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Tulung Agung</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderWidth: 1, paddingLeft: 17, paddingRight: 17 }}>
          <Text style={{ padding: 20, fontSize: 10 }}>Kode Pos</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 65,
            paddingRight: 65,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>35375</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderWidth: 1, paddingLeft: 23, paddingRight: 23 }}>
          <Text style={{ padding: 20, fontSize: 10 }}>Telpon</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 73,
            paddingRight: 73,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}> - </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderWidth: 1, paddingLeft: 25, paddingRight: 25 }}>
          <Text style={{ padding: 20, fontSize: 10 }}>Email</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 5,
            paddingRight: 5,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>
            ytpekon.tulungagung@gmail.com
          </Text>
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
            borderBottomLeftRadius: 10,
            borderWidth: 1,
            paddingLeft: 19,
            paddingRight: 19,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Website</Text>
        </View>
        <View
          style={{
            borderBottomRightRadius: 10,
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 0,
            paddingRight: 0,
          }}
        >
          <Text
            style={{
              padding: 20,
              fontSize: 10,
              paddingRight: 15,
              paddingLeft: 15,
            }}
          >
            https://tulungagung-pringsewu.desa.id
          </Text>
        </View>
      </View>

      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      /> */}
    </SafeAreaView>
  );
};

export default IdentitasPekon;
