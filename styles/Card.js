import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'black',
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    margin:20
  },

  mediaView:{
    flex: .3,
    flexDirection: 'column',
    margin:20
  },

  descriptionView:{
    flex: 1,
    flexDirection: 'column',
    padding:10,
  },

  title: {
   paddingTop:10,
   paddingBottom:10,
   fontWeight: "bold"

  },
  audioButton:{
    width: 50,
    height: 50,
    marginLeft:10,
    marginTop:30
   
  },
  description:{
    paddingTop:10
  },

  image:{
    width: 80,
    height: 80,

  }
});

export default styles;