import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import Card from './Card';
import {BestPodcastContext} from '../context/index';

const EpisodeList = ({ navigation}) =>{
  const context = React.useContext(BestPodcastContext);
  const {bestPodcastData} = context

  const getCards = () =>{
    const cards =   bestPodcastData.podcasts.map(podcast =>{
      return <Card title={podcast.title} description={podcast.description} thumbnail={podcast.thumbnail} key={podcast.id} navigation={navigation}></Card>;
    })
    return cards; 
  }

  return(
    <View>
     {getCards()}
    </View>
  )
}

export default EpisodeList;