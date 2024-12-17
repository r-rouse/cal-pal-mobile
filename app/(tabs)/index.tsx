import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

export default function HomeScreen() {
      return (
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <WebView
              source={{ uri: 'https://wholefoodcalories.com/' }}  // Replace with your web URL
              style={{ flex: 1 }}  // Ensure the WebView fills the screen
            />
          </SafeAreaView>
        </SafeAreaProvider>
      );
    
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
