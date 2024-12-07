import { Component } from 'react';
import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native';

const Fermata_Lightcone = {
  name: 'Fermata',
  drops:['Silvermane Badge', 'Silvermane Insignia', 'Silvermane Medal'],
  calyx:['Obsidian of Dread', 'Obsidian of Desolation', 'Obsidian of Obsession'],
}


const ChooseLightCone_Screen=({navigation})=> {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.lightconeRow} >
        <Pressable 
          style={styles.lightcone} 
          onPress={()=>navigation.navigate('Fermata')}>
          <Image
            style={{width:128, height:128}}
            resizeMode={'contain'}
            source={require('../assets/4-star/Fermata/Light_Cone_Fermata_Icon.png')}
          />
          <Text style={styles.lightconeTitle}>Fermata</Text>
        </Pressable>
        <Pressable style={styles.lightcone}  onPress={()=>navigation.navigate('Past and Future') }>
          <Image
            style={{width:128, height:128}}
            resizeMode={'contain'}
            source={require('../assets/4-star/Past_and_Future/Light_Cone_Past_and_Future_Icon.png')}
          />
          <Text style={styles.lightconeTitle}>Past and Future</Text>
        </Pressable>
      </View>
      <View style={styles.lightconeRow} >
        <Pressable style={styles.lightcone}  onPress={()=>navigation.navigate('Quid Pro Quo')}> 
          <Image
            style={{width:128, height:128}}
            resizeMode={'contain'}
            source={require('../assets/4-star/Quid_Pro_Quo/Light_Cone_Quid_Pro_Quo_Icon.png')}
          />
          <Text style={styles.lightconeTitle}>Quid Pro Quo</Text>
        </Pressable>
        <Pressable style={styles.lightcone}  onPress={()=>navigation.navigate('River Flows in Spring')}> 
          <Image
            style={{width:128, height:128}}
            resizeMode={'contain'}
            source={require('../assets/4-star/River_Flows_in_Spring/Light_Cone_River_Flows_in_Spring_Icon.png')}
          />
          <Text style={styles.lightconeTitle}>River Flows in Spring</Text>
        </Pressable>
      </View>
      <View style={styles.lightconeRow} >
        <Pressable style={styles.lightcone}  onPress={()=>navigation.navigate('The Seriousness of Breakfast')}>
          <Image
            style={{width:128, height:128}}
            resizeMode={'contain'}
            source={require('../assets/4-star/The_Seriousness_of_Breakfast/Light_Cone_The_Seriousness_of_Breakfast_Icon.png')}
          />
          <Text style={styles.lightconeTitle}>The Seriousness of Breakfast</Text>
        </Pressable>
        <Pressable style={styles.lightcone}  onPress={()=>navigation.navigate('We Are Wildfire')}>
          <Image
            style={{width:128, height:128}}
            resizeMode={'contain'}
            source={require('../assets/4-star/We_Are_Wildfire/Light_Cone_We_Are_Wildfire_Icon.png')}
          />
          <Text style={styles.lightconeTitle}>We Are Wildfire</Text>
        </Pressable>
      </View>
      <View style={styles.lightconeRow} >
        <Pressable style={styles.lightcone} onPress={()=>navigation.navigate('Woof! Walk Time')}>
          <Image
            style={{width:128, height:128}}
            resizeMode={'contain'}
            source={require('../assets/4-star/Woof_Walk_Time/Light_Cone_Woof_Icon.png')}
          />
          <Text style={styles.lightconeTitle}>Woof! Walk Time</Text>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}

export default ChooseLightCone_Screen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightcone: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  lightconeTitle: {
    marginBottom:10,
    //height:20,
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightconeRow: {
    flexDirection:'row',
    maxWidth: '100%',
    height:200,
    marginBottom: 20,
  },
});
