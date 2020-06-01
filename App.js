import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Platform, StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./components/Home";
import EpisodeList from './components/EpisodeList';
import VideoPlayer from './components/VideoPlayers';
import { BestPodCastProvider } from './context/index';

const Stack = createStackNavigator();
export default function App() {
   return(
      <BestPodCastProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Episode List" component={EpisodeList} />
            <Stack.Screen name="Video Player" component={VideoPlayer} />
          </Stack.Navigator>
        </NavigationContainer> 
        </BestPodCastProvider>
   )
}