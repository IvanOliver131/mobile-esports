import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Home } from "./src/screens/Home";
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";

export default function App() {
  // Desta forma ele ira carregar essas fontes para a nossa aplicação
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="tranparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  );
}
