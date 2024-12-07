import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Platform } from 'react-native';
import {LightConeCalculator, LightConeAscensionCalculator} from './LightConeCalculator';
import { styles } from './styles';
const GeneralMaterials =({Aether, Credit})=>{
  return (
  <View style={styles.generalMaterials}>
    <Text>Refined Aether:  {Aether}</Text>
    <View style={styles.row}>
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Item_Credit.png')}
        />
      <Text > Credit: {Credit}</Text>
    </View>
  </View>
);
}

export default GeneralMaterials



