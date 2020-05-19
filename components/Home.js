import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';

const Home = () =>{
  const URL ="https://listen-api.listennotes.com/api/v2/episodes/02f0123246c944e289ee2bb90804e41b"
  const [audioLink, updateAudioLink] = useState("") 
  
  const handleAudioLink = () =>{
    console.log(audioLink)
  }

  useEffect (()=>{
    axios.get(URL, { headers: {'X-ListenAPI-Key': '6fe8ac4573584c2f874c2603e57fdef3'}})
    .then(response => {
        // If request is good...
        updateAudioLink(response.data.audio)
     })
    .catch((error) => {
        console.log('error ' + error);
     });
  })
  return (
    <View style={styles.container}>
    <Text>My Podcasts</Text>
    <Button title="Audio Link" onPress={handleAudioLink}></Button>
    <Button title="Audio Link" onPress={handleAudioLink}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default Home;