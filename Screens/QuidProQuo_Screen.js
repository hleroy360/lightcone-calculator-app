
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import {LightConeCalculator, LightConeAscensionCalculator} from '../LightConeCalculator';
import GeneralMaterials from '../GeneralMaterials';
import SpecificMaterials from '../SpecificMaterials';
import { chooseMainImage } from '../ChooseImage';

import { styles } from '../styles';

export default class QuidProQuo_Screen extends Component{
  constructor(){
    super()
      this.state = {
        currentLevel:1,
        desiredLevel:80,

        EXP: 0,
        Credit: 0,
        Aether: 0,

        lightconeName: 'Quid Pro Quo',

        dropArray: [0,0,0],
        dropsNames : ['Silvermane Badge', 'Silvermane Insignia', 'Silvermane Medal'],

        calyxArray: [0,0,0],
        calyxNames : ['Seed of Abundance', 'Sprout of Life', 'Flower of Eternity']

    }
  }

  //Updates on text input change
  updateCurrentLevel = (value) => {
      this.setState({currentLevel: value})
  }
  //Updates on text input change
  updateDesiredLevel = (value) => {
    this.setState({desiredLevel: value})
  }

  calculate(current, desired) {
    const [aether, totalCredit] = LightConeCalculator(current, desired)
    this.setState({Aether: aether});
    this.setState({Credit:totalCredit});

    const [dropArray, calyxArray] = LightConeAscensionCalculator(current, desired)
    this.setState({ dropArray: dropArray});
    this.setState({ calyxArray: calyxArray});
   }

  render(){
  return (
    <View style={styles.container}>
      <View style={styles.lightTextContainer}>
        {chooseMainImage(this.state.lightconeName)}

        <View style={[styles.textInputContainer]}>
          <Text>Current Level (Integer 1-80)</Text>
          <TextInput
            style ={styles.input}
            placeholder='Current Level'
            keyboardType='numeric'
            value={this.state.currentLevel}
            onChangeText={value1 => this.updateCurrentLevel(value1)}
          />
          <Text>Desired Level (Integer 1-80)</Text>
          <TextInput
            style ={styles.input}
            placeholder='Desired Level'
            value={this.state.desiredLevel}
            onChangeText={value2 => this.updateDesiredLevel(value2)}
          />
        </View>

      </View>
  
      <View style={styles.button}>
        <Button
          onPress={() => this.calculate(this.state.currentLevel, this.state.desiredLevel)}
          title="Calculate"
        />
      </View>
      <GeneralMaterials Aether={this.state.Aether} Credit={this.state.Credit}/>
      <SpecificMaterials
        dropsArray={this.state.dropArray}
        dropsNames={this.state.dropsNames}
        calyxArray={this.state.calyxArray}
        calyxNames={this.state.calyxNames}
      />
    </View>
      
  );}
}

