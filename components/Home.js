import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import style from '../styles/Home'
const unirest = require('unirest');
// import {getBestPodcasts, getCuratedPodcasts} from '../helpers/requests';

async function getBestPodcasts (){
  console.log("here")
  const response = await unirest.get('https://listen-api.listennotes.com/api/v2/best_podcasts?region=us&safe_mode=0')
  .header('X-ListenAPI-Key', '6fe8ac4573584c2f874c2603e57fdef3')
response.toJSON();
console.log(response.body.podcasts);
};

const Home = ({ navigation }) =>{
  return (
    <View style={style.container}>
    <Text style={style.title}>My Podcasts</Text>
    <TouchableOpacity
      style={style.button}
      onPress={() => {
        
        getBestPodcasts()
        navigation.navigate('Episode List', {})
      }}
    >
     <Text style={style.buttonText}>Best Podcasts</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={style.button}
      onPress={() =>
       navigation.navigate('Episode List', {})
      }
    >
       <Text style={style.buttonText}>Curated Podcasts</Text>
    </TouchableOpacity>
    </View>
  );
}




export default Home;