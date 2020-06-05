import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image} from 'react-native';
import style from '../styles/Card'
import HTML from 'react-native-render-html';

const Card = ({navigation, thumbnail, description, title}) =>{
  return (
    <View style={style.container}>
      <View style={style.mediaView}>
        <Image
          style={style.image}
        source={thumbnail}>
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
  <Text style={style.title}>{title}</Text>
        <HTML html={description} style={style.description}></HTML>
      </View>
    </View>
  )
}





export default Card;