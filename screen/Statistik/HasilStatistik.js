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

const HasilStatistik = ({navigation}) => {
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
      <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
            <TouchableOpacity style={{marginLeft: 90, borderWidth: 1, borderColor: '#E0E0E0', padding: 10, borderRadius: 10, backgroundColor: 'orange'}}>
                <Text style={styles.search2}>Grafik Batang</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginRight: 90, borderWidth: 1, borderColor: '#E0E0E0', padding: 10, borderRadius: 10, backgroundColor: 'orange', paddingLeft:15, paddingRight: 15}}>
                <Text style={styles.search2}>Grafik Pai</Text>
            </TouchableOpacity>
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <Image source={require("../../asset/gambarGrafik.png")}/>
      </View>
      <View>
        <TouchableOpacity style={{marginTop: 20,marginLeft: 30,marginRight: 250, borderWidth: 1, borderColor: '#E0E0E0', padding: 10, borderRadius: 10, backgroundColor: 'orange',}}>
            <Text style={styles.search2}>
                Tampilkan Tabel
            </Text>
        </TouchableOpacity>
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
    },search2: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center'
    },
})

export default HasilStatistik;