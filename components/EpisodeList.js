import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import Card from './Card';
import {BestPodcastContext} from '../context/index';

const EpisodeList = ({ navigation}) =>{
  const context = React.useContext(BestPodcastContext);
  const {bestPodcastData} = context
  console.log("data", bestPodcastData)
  return(
    <View>
      <Card navigation={navigation}/>
      <Card navigation={navigation}/>
      <Card navigation={navigation}/>
      <Card navigation={navigation}/>
      <Card navigation={navigation}/>
      <Card navigation={navigation}/>
      <Card navigation={navigation}/>
     
    </View>
  )
}

export default EpisodeList;