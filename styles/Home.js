import React from 'react';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    margin: 30,
  },
  button:{
    textAlign: 'center',
    margin:10,
    backgroundColor: 'white',
    borderRadius: 50
    
  },
  buttonText:{
    color: 'teal',
    borerRadius:6,
    fontSize:20,
    backgroundColor: 'white'  
  }
});

export default styles;