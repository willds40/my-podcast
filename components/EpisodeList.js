import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';

const EpisodeList = ({ navigation}) =>{
  
return(
  <View>
    <Text>Episode List</Text>
    <Button
    title="Listen To Audio"
    onPress={() =>
      navigation.navigate('Video Player', {})
    }
    />
  </View>
)
}

export default EpisodeList;