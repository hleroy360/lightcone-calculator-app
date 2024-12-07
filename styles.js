import { StyleSheet, Text, View, TextInput, Button, Image, Platform, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth:1,
    padding:5,
    margin:5,
  },
  
  //For Choose Lightcone
  lightcone: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  lightconeTitle: {
    marginBottom:10,
    height:20,
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

  //For images and text in same row
  row: {
    flexDirection: 'row',
    marginBottom:3,
  },

  //materials
  drops: {
    backgroundColor: '#D3D3D3',
    borderWidth:1,
    padding:5,
    margin:5,
  },
  calyx: {
    backgroundColor: '#D3D3D3',
    borderWidth:1,
    padding:5,
    margin:5,
  },


  ...Platform.select({
    ios: {
      mainImage:{
        flex:1,
        height:'100%',
        width:'100%'
      },
      mainImageContainer: {
        flex: 2,
        width:'100%',
      },

      textInputContainer: {
        flex:2,
        padding:10,
        marginTop:50,
        height:'100%',
      },
      lightTextContainer: {
        flexDirection:'row',
        flex:2
      },
      specificMaterials: {
        flex:2,
        width:'75%',
        flexDirection:'column',
        marginBottom:50
      },
      button:{
        flex:1
      },
    },
    android: {
      mainImage:{
        flex:1,
        height:'100%',
        width:'100%'
      },
      mainImageContainer: {
        flex: 2,
        width:'100%',
      },

      textInputContainer: {
        flex:2,
        padding:10,
        marginTop:50,
        height:'100%',
      },
      lightTextContainer: {
        flexDirection:'row',
        flex:2
      },
      specificMaterials: {
        flex:2,
        width:'75%',
        flexDirection:'column',
        marginBottom:50
      },
      button:{
        flex:1
      },
    },
    web: {
      specificMaterials: {
        marginBottom:0,
        flexDirection:'row'
      },
      lightTextContainer: {
        flexDirection:'row',
        width:'50%',
        height:'50%',
        paddingTop:20,
        paddingBottom:20,
      },

      textInputContainer: {
        flex:1,
        marginTop:50,
        flexBasis:1
      },
        //for the images on the individual lightcone pages
  mainImage:{
    width:'100%',
    height:'100%',
  },
  mainImageContainer: {
    flex: 1,
    width:200,
    height:250,
    margin:20,
  },

    }
  })
});