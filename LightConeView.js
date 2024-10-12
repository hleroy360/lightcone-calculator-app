import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import {LightConeCalculator, LightConeAscensionCalculator} from './LightConeCalculator';
import { Picker } from 'react-native-web';


//const 

const lightcone= {
    image:'./assets/4-star/Woof_Walk_Time/Light_Cone_Woof.png',
    lightconeName: 'Woof! Walk Time',
    drops: {
      low: 'low drop',
      med: 'med drop',
      high: 'high drop',
    },
    calyx: {
      low: 'low calyx',
      med: 'med calyx',
      high: 'high calyx',
    },
  }

export default class LightconeView extends Component{
  constructor(){
    super()
      this.state = {
        currentLevel:1,
        desiredLevel:80,

        EXP: 0,
        Credit: 0,
        Aether: 0,

        lightconeName: 'Woof! Walk Time',
        drops: {
          low: {name:'Extinguished Core', number:0, img: './assets/Ascension/Item_Credit.png'},
          med: {name:'Glimmering Core', number:0, img: './assets/Ascension/Item_Credit.png'},
          high: {name:'Squirming Core', number:0, img: './assets/Ascension/Item_Credit.png'},
        },

        dropsNum: {
          low: 0,
          med: 0,
          high: 0,
        },
        calyx: {
          low: {name:'Shattered Blade', number:0},
          med: {name: 'Lifeless Blade', number:0},
          high: {name:'Worldbreaker Blade', number:0}
        },
        image :'./assets/Ascension/Drops/Item_Core1.png'

    }
  }
image ='./assets/Ascension/Drops/Item_Core1.png'

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
    //to do: get information in by 
    this.setState({Aether: aether});
    this.setState({Credit:totalCredit}) 

    const [lowDrop, medDrop, highDrop, lowCalyx, medCalyx, highCalyx] = LightConeAscensionCalculator(current, desired)

    this.setState({
      drops: {
        ...this.state.drops,
        low: {
          ...this.state.drops.low,
          number: {
            number: lowDrop
          }
        }
      }
    });
  }



  render(){
    return (
      <View style={styles.container}>
      <Text style={styles.lightconeTitle}>{this.state.lightconeName}</Text>

        <View style={{flexDirection: 'row'}}>

          <View style={{flex: 1}}>
            <Image
              style={{width:300, height:'100%'}}
              resizeMode={'contain'}
              source={require('./assets/4-star/Woof_Walk_Time/Light_Cone_Woof.png')}
            />
          </View>

          <View style={[styles.textInputContainer, {flex:1}]}>
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

        <Button
          onPress={() => this.calculate(this.state.currentLevel, this.state.desiredLevel)}
          title="Calculate"
        />

    <View> // Output of materials

      <Text>Refined Aether:  {this.state.Aether}</Text>

      <View style={{flexDirection: 'row'}}>
        <Image
          style={{height:25, width:25}}
          source={require('./assets/Ascension/Item_Credit.png')}
        />
        <Text style={{flex:1, fontWeight:'500'}}> Credit: {this.state.Credit}</Text>
      </View>

      <View style={styles.specificMaterials}>
        <View style={styles.drops}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height:25, width:25}}
              source={require(this.state.drops.low.img)}
            />
            <Text>{this.state.drops.low.name} {this.state.drops.low.number}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height:25, width:25}}
              source={require(this.state.drops.med.img)}
            />
            <Text>{this.state.drops.med.name} {this.state.dropsNum.med}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height:25, width:25}}
              source={require(this.state.drops.high.img)}
            />
            <Text>{this.state.drops.high.name} {this.state.dropsNum.high}</Text>
          </View>
        </View>

        <View style={styles.calyx}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height:25, width:25}}
              source={require(this.state.drops.low.img)}
            />
            <Text>{this.state.calyx.low.name}: {this.state.calyx.low.number}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height:25, width:25}}
              source={require(this.state.drops.med.img)}
            />
            <Text>{this.state.calyx.med.name}: {this.state.calyx.med.number}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height:25, width:25}}
              source={require(this.state.drops.high.img)}
            />
            <Text>{this.state.calyx.high.name}: {this.state.calyx.high.number}</Text>
          </View>
        </View>
      </View>
    </View>

  </View>

    );}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'left',
  },

  lightconeTitle :{
    fontSize:20,
    marginBottom:20,
    fontWeight: '500',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  textInputContainer: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth:1,
    padding:5,
    margin:5,
  },

  drops: {
    flex:1,
    borderWidth:1,
    padding:5,
    margin:5,
  },
  
  calyx: {
    flex:1,
    borderWidth:1,
    padding:5,
    margin:5,
  },

  specificMaterials: {
    flex:1,
    borderWidth:1,
    padding:5,
    margin:5,
    flexDirection:'row',
  },
});
