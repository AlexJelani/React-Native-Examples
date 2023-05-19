import React from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Flatcards from "./src/components/Flatcards";
import ElevatedCards from "./src/components/ElevatedCards";
import FancyCard from "./src/components/FancyCard";

export default function App() {
  return (
    <SafeAreaView>
      <SafeAreaProvider>
        <ScrollView>
          <View>
            <Flatcards />
            <ElevatedCards />
            <FancyCard />
          </View>
        </ScrollView>
      </SafeAreaProvider>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
// });
