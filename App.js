import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LightconeView from './LightConeView';
import { Component } from 'react';


export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
      <LightconeView/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
