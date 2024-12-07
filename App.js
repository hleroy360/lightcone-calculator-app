import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const ConeStack = createNativeStackNavigator();

//Lightcone screens
import ChooseLightCone_Screen from './Screens/ChooseLightCone_Screen';
import Fermata_Screen from './Screens/Fermata_Screen';
import PastAndFuture_Screen from './Screens/PastAndFuture_Screen';
import QuidProQuo_Screen from './Screens/QuidProQuo_Screen';
import RiverFlowsInSpring_Screen from './Screens/RiverFlowsInSpring_Screen';
import TheSeriousnessOfBreakfast_Screen from './Screens/TheSeriousnessOfBreakfast_Screen';
import WeAreWildfire_Screen from './Screens/WeAreWildfire_Screen';
import WoofWalkTime_Screen from './Screens/WoofWalkTime_Screen';
import LightconeView from './LightConeView';





export default class App extends Component {
  render(){
  return (
    <NavigationContainer>
      <ConeStack.Navigator>
        <ConeStack.Screen
          name="Choose LightCone"
          component={ChooseLightCone_Screen}
        />
        <ConeStack.Screen
          name="Fermata"
          component={Fermata_Screen}
        />
        <ConeStack.Screen
          name="Past and Future"
          component={PastAndFuture_Screen}
        />
        <ConeStack.Screen
          name="Quid Pro Quo"
          component={QuidProQuo_Screen}
        />
        <ConeStack.Screen
          name="River Flows in Spring"
          component={RiverFlowsInSpring_Screen}
        />
        <ConeStack.Screen
          name="The Seriousness of Breakfast"
          component={TheSeriousnessOfBreakfast_Screen}
        />
        <ConeStack.Screen
          name="We Are Wildfire"
          component={WeAreWildfire_Screen}
        />
        <ConeStack.Screen
          name="Woof! Walk Time"
          component={WoofWalkTime_Screen}
        />
      </ConeStack.Navigator>
    </NavigationContainer>
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
