import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';
import Home from "./components/Home";
import BestPodcast from './components/BestPodcast';
import CuratedPodcast from './components/CuratedPodcast';
import VideoPlayer from './components/VideoPlayers'

export default function App() {
  <NavigationContainer>
    <Home />
    <BestPodcast />
    <CuratedPodcast />
    <VideoPlayer />
  </NavigationContainer>  
}