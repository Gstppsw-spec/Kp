import React, { useLayoutEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native';

const VisiMisi = ({navigation}) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "VISI MISI",
            headerTitleAlign: 'center',
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: '#0F56B3',
            },
            headerTitleStyle: {
                fontSize: 12,
                fontWeight: "bold",
              }
        })
    }, [navigation])

  return (
    <SafeAreaView>
        <View
            style={{marginBottom: 20,padding: 10, borderWidth: 1, marginTop: 20, borderRadius: 15, margin: 15, backgroundColor: '#E0E0E0'}}
        >
            <Text style={{textAlign: 'left', color: "#0F56B3", padding: 5, fontSize: 12, letterSpacing: 1}}>
                VISI
            </Text>
        </View>

        <View style={{alignItems: 'center',}}>
            <Text style={{fontSize: 11,}}>Bersama masyakat membangun Pekon Tulung Agung yang</Text>
            <Text style={{fontSize: 11, marginBottom: 20}}>Mandiri, Aman, Nyaman, Tertib, Agamis, Berprestasi</Text>
            <Text style={{fontSize: 12, letterSpacing: 1}}>"MANTAP"</Text>
        </View>
        
        <View
            style={{padding: 10, borderWidth: 1, marginTop: 30, borderRadius: 15, margin: 15, backgroundColor: '#E0E0E0'}}
        >
            <Text style={{textAlign: 'left', color: "#0F56B3", padding: 5, fontSize: 12, letterSpacing: 1}}>
                MISI
            </Text>
        </View>

        <View style={{padding: 20, marginLeft: 10, paddingTop: 0, marginRight: 10, }}>
            <Text style={{fontSize: 11,textAlign: 'justify', marginBottom: 5}}>1.  Terwujudnya pelayanan yang prima dan optimal kepada masyarakat secara baik, benar dan transparan.</Text>
            <Text style={{fontSize: 11,textAlign: 'justify', marginBottom: 5}}>2.  Menumbuhkembangkan dan menggerakkan prakarsa, partisipasi dan swadaya masyarakat dalam pembangunan.</Text>
            <Text style={{fontSize: 11,textAlign: 'justify', marginBottom: 5}}>3.  Menumbuhkembangkan dan meningkatkan kesejahteraan masyarakat.</Text>
            <Text style={{fontSize: 11,textAlign: 'justify', marginBottom: 5}}>4.  Terwujudnya peningkatan ketentraman dan ketertiban wilayah.</Text>
            <Text style={{fontSize: 11,textAlign: 'justify', marginBottom: 5}}>5.  Menampung dan menyalurkan aspirasi masyarakat dalam pembangunan.</Text>
            <Text style={{fontSize: 11,textAlign: 'justify', marginBottom: 5}}>6.  Tanggap dan siaga terhadap permasalahan yang ada di masyarakat.</Text>
        </View>
    </SafeAreaView>
  )
}

export default VisiMisi;
