import React, { useLayoutEffect } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from "react-native";

import SelectDropdown from "react-native-select-dropdown";

const StatistikPenduduk = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "STATISTIK PENDUDUK",
      headerTitleAlign: "center",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#0F56B3",
        fontSize: 12,
      },
      headerTitleStyle: {
        fontSize: 12,
        fontWeight: "bold",
      }
    });
  }, [navigation]);

  const kategori = ["Agama", "Jenis Kelamin", "Pekerjaan", "Pendidikan dalam KK", "Umur"]

  return (
    <SafeAreaView>
      <View style={{alignItems:'center', borderWidth: 4, margin: 80, borderRadius: 20, borderColor: '#E0E0E0', marginTop: 40, marginBottom: 30 }}>
        <SelectDropdown
            data = {kategori}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                if(selectedItem === "Agama" || "Jenis Kelamin" || "Pekerjaan" || "Pendidikan dalam KK" || "Umur"){
                    navigation.navigate('HasilStatistik')
                }
            }}

            buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
            }}

            rowTextForSelection={(item, index) => {
                return item
            }}
            defaultButtonText="Pilih kategori"
            
            rowStyle = {styles.row}
            dropdownStyle={styles.row}
            dropdownIconPosition="right"
            rowTextStyle={styles.rowText}
            buttonTextStyle={styles.button}
            search={true}
            renderDropdownIcon={false}
            statusBarTranslucent
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.search}>Silahkan pilih kategori untuk</Text>
        <Text style={styles.search}>menampilkan grafik statistik</Text>
        <Text style={styles.search}>penduduk</Text>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    row: {
        borderRadius: 20,
    },
    search: {
        color: '#818181',
        fontSize: 13,
    },
    rowText: {
        fontSize: 10,
        fontWeight: 'bold'
    },

    button: {
        color: '#818181',
        fontWeight: 'bold',
        fontSize: 12,
    }
})

export default StatistikPenduduk;
