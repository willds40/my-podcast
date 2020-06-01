import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import style from '../styles/Home';
 import {getBestPodcasts, getCuratedPodcasts} from '../helpers/requests';

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