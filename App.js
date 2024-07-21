import './unistyles'
import { UnistylesRuntime } from 'react-native-unistyles'
import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

UnistylesRuntime.setRootViewBackgroundColor('#fcfcfc')
UnistylesRuntime.navigationBar.setColor('transparent')

export default function App() {
  const sheet = useRef(null)
  const scrollViewRef = useRef(null)

  const present = () => {
    sheet.current?.present()
  }

  const dismiss = () => {
    sheet.current?.dismiss()
  }

  return (
    <>
      <View style={styles.container}>
        <Button onPress={present} title="Present" />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <TrueSheet
        ref={sheet}
        sizes={['auto', "large"]}
        cornerRadius={24}
        scrollRef={scrollViewRef}
        onDismiss={dismiss}
      >
        <View
          style={styles.sheet}
        >
          <Button onPress={dismiss} title="Dismiss" />
        </View>
      </TrueSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-end"
  },
  sheet: {
    marginTop: 20,
    height: 400,
    backgroundColor: 'green',
  },
});
