import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Component
import Login from "./component/Login";
import Profile from "./component/Profile";

//Screen
import Splash from "./screen/Splash";
import Utama from "./screen/Utama";
import UtamaDua from "./screen/UtamaDua";
import Lapak from "./screen/Lapak";
import IdentitasPekon from "./screen/IdentitasPekon";
import AdministrasiPekon from "./screen/AdministrasiPekon";
import PemerintahPekon from "./screen/PemerintahPekon";
import SejarahPekon from "./screen/SejarahPekon";
import VisiMisi from "./screen/VisiMisi";
import LembagaMasyarakat from "./screen/LembagaMasyarakat";
import FungsiKT from "./screen/LembagaMasyarakat/FungsiKT";
import FungsiLembagaPKK from "./screen/LembagaMasyarakat/FungsiLembagaPKK";
import TugasKT from "./screen/LembagaMasyarakat/TugasKT";
import TugasLembagaPKK from "./screen/LembagaMasyarakat/TugasLembagaPKK";
import StatistikPenduduk from "./screen/Statistik/StatistikPenduduk";
import HasilStatistik from "./screen/Statistik/HasilStatistik";

//Pencarian
import PencarianBerita from "./pencarian/PencarianBerita";
import PencarianKosong from "./pencarian/PencarianKosong";

// Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Splash"}
      >
        <Stack.Screen name="Pemerintah" component={PemerintahPekon}/>
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="UtamaDua" component={UtamaDua} />
        <Stack.Screen name="Utama" component={Utama} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="News" component={PencarianBerita}/>
        <Stack.Screen name="Galery" component={PencarianBerita}/>
        <Stack.Screen name="Lapak" component={Lapak} />
        <Stack.Screen name="Identitas" component={IdentitasPekon}/>
        <Stack.Screen name="Administrasi" component={AdministrasiPekon}/>
        <Stack.Screen name="Sejarah" component={SejarahPekon} />
        <Stack.Screen name="VisiMisi" component={VisiMisi} />
        <Stack.Screen name="LembagaMasyarakat" component={LembagaMasyarakat} />
        <Stack.Screen name="TugasKT" component={TugasKT} />
        <Stack.Screen name="TugasPKK" component={TugasLembagaPKK} />
        <Stack.Screen name="FungsiKT" component={FungsiKT} />
        <Stack.Screen name="FungsiPKK" component={FungsiLembagaPKK} />
        <Stack.Screen name="Statistik" component={StatistikPenduduk}/>
        <Stack.Screen name="HasilStatistik" component={HasilStatistik}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
