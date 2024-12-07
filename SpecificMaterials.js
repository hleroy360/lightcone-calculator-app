import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, Platform } from 'react-native';
import {LightConeCalculator, LightConeAscensionCalculator} from './LightConeCalculator';
import { chooseDropImage, chooseCalyxImage } from './ChooseImage';
import { styles } from './styles';

const SpecificMaterials =({dropsNames, calyxNames, dropsArray, calyxArray})=>{
  return (
    <View style={styles.specificMaterials}>

      <View style={styles.drops}>
        <View style={styles.row}>
          {chooseDropImage(dropsNames[0])}
          <Text>{dropsNames[0]}: {dropsArray[0]}</Text>
        </View>
        <View style={styles.row}>
          {chooseDropImage(dropsNames[1])}
          <Text>{dropsNames[1]}: {dropsArray[1]}</Text>
        </View>
        <View style={styles.row}>
          {chooseDropImage(dropsNames[2])}
          <Text>{dropsNames[2]}: {dropsArray[2]}</Text>
        </View>
      </View>

      <View style={styles.calyx}>
        <View style={styles.row}>
          {chooseCalyxImage(calyxNames[0])}
          <Text>{calyxNames[0]}: {calyxArray[0]}</Text>
        </View>
        <View style={styles.row}>
          {chooseCalyxImage(calyxNames[1])}
          <Text>{calyxNames[1]}: {calyxArray[1]}</Text>
        </View>
        <View style={styles.row}>
          {chooseCalyxImage(calyxNames[2])}
          <Text>{calyxNames[2]}: {calyxArray[2]}</Text>
        </View>
      </View>

    </View>
  ); 
}

  export default SpecificMaterials

