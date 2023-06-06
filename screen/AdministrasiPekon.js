import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const AdministrasiPekon = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "WILAYAH ADMINISTRATIF",
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
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}> Dusun  I</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}> Tulung Agung I</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderTopRightRadius: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  padding: 20,
                  fontSize: 10,
                  paddingLeft: 1,
                  paddingRight: 5,
                }}
              >
                3 RT
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, marginTop: 17, backgroundColor: "#FF8A00" }}>
                <Text style={{ textAlign: "center" , fontSize: 8, padding:5}}>Buka Peta</Text>
              </TouchableOpacity>
            </View>
          </View>
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
           
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Dusun  II</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Tulung Agung II</Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  padding: 20,
                  fontSize: 10,
                  paddingLeft: 1,
                  paddingRight: 5,
                }}
              >
                4 RT
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, marginTop: 17, backgroundColor: "#FF8A00" }}>
                <Text style={{ textAlign: "center" , fontSize: 8, padding:5}}>Buka Peta</Text>
              </TouchableOpacity>
            </View>
          </View>
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
           
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Dusun III</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}> Tulung  Rejo   I </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  padding: 20,
                  fontSize: 10,
                  paddingLeft: 1,
                  paddingRight: 5,
                }}
              >
                5 RT
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, marginTop: 17, backgroundColor: "#FF8A00" }}>
                <Text style={{ textAlign: "center" , fontSize: 8, padding:5}}>Buka Peta</Text>
              </TouchableOpacity>
            </View>
          </View>
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
           
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Dusun IV</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}> Tulung  Rejo  II </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  padding: 20,
                  fontSize: 10,
                  paddingLeft: 1,
                  paddingRight: 5,
                }}
              >
                2 RT
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, marginTop: 17, backgroundColor: "#FF8A00" }}>
                <Text style={{ textAlign: "center" , fontSize: 8, padding:5}}>Buka Peta</Text>
              </TouchableOpacity>
            </View>
          </View>
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
            paddingRight: 10,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Dusun V </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}> Tulung  Rejo III </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  padding: 20,
                  fontSize: 10,
                  paddingLeft: 1,
                  paddingRight: 5,
                }}
              >
                2 RT
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, marginTop: 17, backgroundColor: "#FF8A00" }}>
                <Text style={{ textAlign: "center" , fontSize: 8, padding:5}}>Buka Peta</Text>
              </TouchableOpacity>
            </View>
          </View>
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
           borderBottomLeftRadius: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}> Dusun  I </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            borderWidth: 1,
            paddingLeft: 25,
            paddingRight: 25,
          }}
        >
          <Text style={{ padding: 20, fontSize: 10 }}>Solo Karto </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderBottomRightRadius: 10,
            paddingLeft: 15,
            paddingRight: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text
                style={{
                  padding: 20,
                  fontSize: 10,
                  paddingLeft: 1,
                  paddingRight: 5,
                }}
              >
                4 RT
              </Text>
            </View>
            <View>
              <TouchableOpacity style={{ borderWidth: 1, borderRadius: 20, marginTop: 17, backgroundColor: "#FF8A00" }}>
                <Text style={{ textAlign: "center" , fontSize: 8, padding:5}}>Buka Peta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};

export default AdministrasiPekon;
