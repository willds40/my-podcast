import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import Card from './Card'

const EpisodeList = ({ navigation}) =>{

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