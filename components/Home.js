import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import style from '../styles/Home';
//  import {getBestPodcasts} from '../helpers/requests';
import {BestPodcastContext} from '../context/index';

const Home = ({ navigation }) =>{
  const context = React.useContext(BestPodcastContext);
  const {getBestPodcasts } = context;

  return (
    <View style={style.container}>
    <Text style={style.title}>My Podcasts</Text>
    <TouchableOpacity
      style={style.button}
      onPress={() => {
        navigation.navigate('Episode List', {}),
        getBestPodcasts()
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