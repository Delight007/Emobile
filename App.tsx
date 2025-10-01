import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "./global.css";
import PosterGeneratorScreen from "./src/screens/PosterGeneratorScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-black">
        <StatusBar style="light" />
        <PosterGeneratorScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
