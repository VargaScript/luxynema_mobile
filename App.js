import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Webview from "react-native-webview";

export default function App() {
  return <Webview source={{ uri: "https://luxynema.businesscodecreators.com/" }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
