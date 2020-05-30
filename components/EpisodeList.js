import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import Card from './Card'

const EpisodeList = ({ navigation}) =>{
  
  return(
    <View>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </View>
  )
}


   {/* <Text>Episode List</Text>
    <Button
    title="Listen To Audio"
    onPress={() =>
      navigation.navigate('Video Player', {})
    }
    /> */}

export default EpisodeList;