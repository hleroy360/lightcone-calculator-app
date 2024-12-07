import { StyleSheet, Text, View, TextInput, Button, Image, Dimensions, Platform } from 'react-native';
import {styles} from './styles'
const windowWidth = Dimensions.get('window').width;

export function chooseMainImage(lightconeName) {
  if (lightconeName=='Woof! Walk Time'){
    return(
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          resizeMode={'contain'}
          source={require('./assets/4-star/Woof_Walk_Time/Light_Cone_Woof.png')}
        />
      </View>
    );
  }
  if (lightconeName=='Fermata'){
    return(
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          resizeMode={'contain'}
          source={require('./assets/4-star/Fermata/Light_Cone_Fermata.png')}
        />
      </View>
    );
  }
  if (lightconeName=='Past and Future'){
    return(
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          resizeMode={'contain'}
          source={require('./assets/4-star/Past_and_Future/Light_Cone_Past_and_Future.png')}
        />
      </View>
    );
  }
  if (lightconeName=='River Flows in Spring'){
    return(
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          resizeMode={'contain'}
          source={require('./assets/4-star/River_Flows_in_Spring/Light_Cone_River_Flows_in_Spring.png')}
        />
      </View>
    );
  }
  if (lightconeName=='The Seriousness of Breakfast'){
    return(
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          resizeMode={'contain'}
          source={require('./assets/4-star/The_Seriousness_of_Breakfast/Light_Cone_The_Seriousness_of_Breakfast.png')}
        />
      </View>
    );
  }
  if (lightconeName=='We Are Wildfire'){
    return(
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          resizeMode={'contain'}
          source={require('./assets/4-star/We_Are_Wildfire/Light_Cone_We_Are_Wildfire.png')}
        />
      </View>
    );
  }
  if (lightconeName=='Quid Pro Quo'){
    return(
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.mainImage}
          resizeMode={'contain'}
          source={require('./assets/4-star/Quid_Pro_Quo/Light_Cone_Quid_Pro_Quo.png')}
        />
      </View>
    );
  }
}

export function chooseDropImage(dropName){
  //Cores
  if (dropName=='Extinguished Core'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Core1.png')}
      />
    );
  }
  if (dropName=='Glimmering Core'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Core2.png')}
      />
    );
  }
  if (dropName=='Squirming Core'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Core3.png')}
      />
    );
  }

  //Silvermane
  if (dropName=='Silvermane Badge'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Silvermane_Badge1.png')}
      />
    );
  }
  if (dropName=='Silvermane Insignia'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Silvermane_Badge2.png')}
      />
    );
  }
  if (dropName=='Silvermane Medal'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Silvermane_Badge3.png')}
      />
    );
  }

  //Ancient Parts
  if (dropName=='Ancient Part'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Ancient_Part1.png')}
      />
    );
  }
  if (dropName=='Ancient Spindle'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Ancient_Part2.png')}
      />
    );
  }
  if (dropName=='Ancient Engine'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Drops/Item_Ancient_Part3.png')}
      />
    );
  }
}

export function chooseCalyxImage(calyxName) {
  //Destruction
  if (calyxName=='Shattered Blade'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Blade1.png')}
      />
    );
  }
  if (calyxName=='Lifeless Blade'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Blade2.png')}
      />
    );
  }
  if (calyxName=='Worldbreaker Blade'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Blade3.png')}
      />
    );
  }

  //Nihility
  if (calyxName=='Obsidian of Dread'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Obsidian1.png')}
      />
    );
  }
  if (calyxName=='Obsidian of Desolation'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Obsidian2.png')}
      />
    );
  }
  if (calyxName=='Obsidian of Obsession'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Obsidian3.png')}
      />
    );
  }

  //Harmony
  if (calyxName=='Harmonic Tune'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Music_Box1.png')}
      />
    );
  }
  if (calyxName=='Ancestral Hymn'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Music_Box2.png')}
      />
    );
  }
  if (calyxName=='Stellaris Symphony'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Music_Box3.png')}
      />
    );
  }

  //Abundance
  if (calyxName=='Seed of Abundance'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Abundance1.png')}
      />
    );
  }
  if (calyxName=='Sprout of Life'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Abundance2.png')}
      />
    );
  }
  if (calyxName=='Flower of Eternity'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Abundance3.png')}
      />
    );
  }

  //The Hunt
  if (calyxName=='Arrow of the Beast Hunter'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Arrow1.png')}
      />
    );
  }
  if (calyxName=='Arrow of the Demon Slayer'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Arrow2.png')}
      />
    );
  }
  if (calyxName=='Arrow of the Starchaser'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Arrow3.png')}
      />
    );
  }

  //Erudition
  if (calyxName=='Key of Inspiration'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Key1.png')}
      />
    );
  }
  if (calyxName=='Key of Knowledge'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Key2.png')}
      />
    );
  }
  if (calyxName=='Key of Wisdom'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Key3.png')}
      />
    );
  }

  //Preservation
  if (calyxName=='Endurance of Bronze'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Shield1.png')}
      />
    );
  }
  if (calyxName=='Oath of Steel'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Shield2.png')}
      />
    );
  }
  if (calyxName=='Safeguard of Amber'){
    return(
      <Image
        style={{height:25, width:25}}
        source={require('./assets/Ascension/Calyx/Item_Shield3.png')}
      />
    );
  }
}