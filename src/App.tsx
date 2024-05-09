import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, useWindowDimensions} from 'react-native';
import {Provider} from 'react-redux';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import MusicPlayer from './Component/MusicPlayer';
import {Home} from './Home';
import {store} from './redux/store';

const App = () => {

  
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <SafeAreaView
            style={{
              backgroundColor: '#09050D',
              height: '100%',
              padding: 20,
            }}>
            <Home />
            <MusicPlayer/>
          </SafeAreaView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  containerModal: {
    // flex: 1,
    // height: '100%',
    alignItems: 'center',
  },
 
});

export default App;
