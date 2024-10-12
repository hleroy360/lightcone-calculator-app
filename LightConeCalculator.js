import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


//Note: Tier1(1->20), Tier2(21->30), Tier3(31->40), Tier4(41->50), 
//      Tier5(51->60), Tier6(61->70), Tier7(71->80)

//Note: Asc1(1->20), Asc2(21->40), Asc3(41->50),
//      Asc4(51->60), Asc5(61->70), Asc6(71->80)

const EXP_Guide = {
  //The number of Refined Aether required to level
  Tier1: 21070,
  Tier2: 34330,
  Tier3: 47580,
  Tier4: 73710,
  Tier5: 114680,
  Tier6: 174810,
  Tier7: 330410,
}
const Credit_Guide = {
  Asc1: 10750,
  Asc2: 54000,
  Asc3: 55000,
  Asc4: 100000,
  Asc5: 170000,
  Asc6: 328000,
}
const Drop_Guide = {
  //Asc1: {
    //low: 0,
    //med: 0,
    //high: 0,
  //},
  Asc1: {
    low: 15,
    med: 0,
    high: 0,
  },
  Asc2: {
    low: 0,
    med: 6,
    high: 0,
  },
  Asc3: {
    low: 0,
    med: 9,
    high: 0,
  },
  Asc4: {
    low: 0,
    med: 0,
    high: 4,
  },
  Asc5: {
    low: 0,
    med: 0,
    high: 7,
  },
}
const Calyx_Guide = {
  //Asc1: {
    //low: 0,
    //med: 0,
    //high: 0,
  //},
  Asc1: {
    low: 3,
    med: 0,
    high: 0,
  },
  Asc2: {
    low: 0,
    med: 3,
    high: 0,
  },
  Asc3: {
    low: 0,
    med: 6,
    high: 0,
  },
  Asc4: {
    low: 0,
    med: 0,
    high: 5,
  },
  Asc5: {
    low: 0,
    med: 0,
    high: 8,
  },
}


export function LightConeCalculator(current, desired) {
  const startPointer = Number(current)
  const endPointer = Number(desired)

  const [totalEXP, totalCredit] = calculateEXP(startPointer, endPointer)
  return [totalEXP, totalCredit]

  

}

export function LightConeAscensionCalculator(current, desired) {
  const startPointer = Number(current)
  const endPointer = Number(desired)

  const ascension = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  }
  var drops = {
    low: 0,
    med: 0,
    high:0,
  }
  var calyx = {
    low: 0,
    med: 0,
    high: 0,
  }

  if ( endPointer >= 20 ) {
    ascension.one = true
    drops.low += Drop_Guide.Asc1.low
    calyx.low += Calyx_Guide.Asc1.low
    }
  if ( endPointer >- 40 ) {
    ascension.two = true
    drops.med += Drop_Guide.Asc2.med
    calyx.low += Calyx_Guide.Asc2.med
  }
  if ( endPointer >= 50 ) {
    ascension.three = true
    drops.med += Drop_Guide.Asc3.med
    calyx.med = Calyx_Guide.Asc3.med
  }
  if ( endPointer >= 60 ) {
    ascension.four = true
    drops.high += Drop_Guide.Asc4.high
    calyx.high += Calyx_Guide.Asc4.high
  }
  if ( endPointer >= 70 ) {
    ascension.five = true
    drops.high += Drop_Guide.Asc5.high
    calyx.high += Calyx_Guide.Asc5.high
  }

  return [drops.low, drops.med, drops.high, calyx.low, calyx.med, calyx.high]

}

function calculateEXP(startPointer, endPointer) {
  var totalEXP = 0
  var currentRate = 0



  for (let pointer = startPointer; pointer <= endPointer; pointer++) {
    if (pointer > 1 && pointer <= 20) {
      currentRate = EXP_Guide.Tier1/20
    }
    else if (pointer > 21 && pointer <= 30) {
      currentRate = EXP_Guide.Tier2/10
    }
    else if (pointer > 31 && pointer <= 40) {
      currentRate = EXP_Guide.Tier3/20
    }
    else if (pointer > 41 && pointer <= 50) {
      currentRate = EXP_Guide.Tier4/10
    }
    else if (pointer > 50 && pointer <= 60) {
      currentRate = EXP_Guide.Tier5/10
    }
    else if (pointer > 61 && pointer <= 70) {
      currentRate = EXP_Guide.Tier6/10
    }
    else if (pointer > 71 && pointer <= 80) {
      currentRate = EXP_Guide.Tier7/10
    }
    else if (pointer >80){
      currentRate = 0
    }
    totalEXP += currentRate
  }
  const [aether, credit] = calculateAether(totalEXP)
  return [aether, credit]
}

function calculateAether(totalEXP){
  var totalCredit = 0
  //Credit price is half of the EXP
  var aether_guide = {
    high: 6000,
    med: 2000,
    low: 500
  }
  var aether = 0 //The amount of refined aethers needed
  let x=totalEXP

  for (x; x>=aether_guide.high; x-=aether_guide.high){
    aether += 1
    totalCredit += (aether_guide.high/2)
  }
  if (x > 0) {
    totalCredit += Math.round(x/2)
    aether += 1
  }

  return [aether, totalCredit]

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  currentLevel: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  desiredLevel: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth:1,
    padding:5,
    margin:5,
  }
});
