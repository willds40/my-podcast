import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image} from 'react-native';
import style from '../styles/Card'

const Card = ({navigation}) =>{
  return (
    <View style={style.container}>
      <View style={style.mediaView}>
        <Image
          style={style.image}
        source={require('../assets/images/podcast-logo.jpeg')}>
        </Image>
        <TouchableOpacity onPress={() =>navigation.navigate('Video Player', {})}>
          <Image
              style={style.audioButton}
              source={require('../assets/images/audio-button.svg')}
          >
          </Image>
        </TouchableOpacity>
      </View>
      <View style={style.descriptionView}>
        <Text style={style.title}>Needed feebly dining oh talked wisdom</Text>
        <Text style={style.description}>Applauded use attempted strangers now are middleton concluded had. It is tried ﻿no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady </Text>
      </View>
    </View>
  )
}





export default Card;