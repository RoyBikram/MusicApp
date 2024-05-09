import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import {SliderProps} from '@rneui/base';
import Animated, {
  ReduceMotion,
  measure,
  useAnimatedProps,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useAppSelector} from '../redux/hook';
import Slider from './Slider';

const MusicPlayer = () => {
  const music = useAppSelector(state => state.music.selectedMusic);
  const textContainerRef = useAnimatedRef<Animated.View>();
  const songNameRef = useAnimatedRef<Animated.Text>();
  const singerNameRef = useAnimatedRef<Animated.Text>();
  const iconContainerRef = useAnimatedRef<Animated.View>();
  const {width, height} = useWindowDimensions();
  const isOpened = useSharedValue<boolean>(false);
  const textContainerWidth = useSharedValue<number>(0);
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);

  const ForwardedSlider = React.forwardRef((props: SliderProps, ref: any) => (
    <Slider {...props} />
  ));
  const AnimatedSlider = Animated.createAnimatedComponent(ForwardedSlider);

  const pan = Gesture.Pan().onEnd(event => {
    isOpened.value = event.velocityY < 0;
  });

  const springConfig = {
    reduceMotion: ReduceMotion.System,
    duration: 1000,
    dampingRatio: 0.9,
    stiffness: 300,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 2,
  };

  const animatedStyles = useAnimatedStyle(() => ({
    bottom: withSpring(isOpened.value ? 0 : 20, springConfig),
    left: withSpring(isOpened.value ? 0 : 20, springConfig),
    right: withSpring(isOpened.value ? 0 : 20, springConfig),
    height: withSpring(isOpened.value ? height : 100, springConfig),
  }));

  const imageAnimationStyles = useAnimatedStyle(() => ({
    top: withSpring(isOpened.value ? 70 : 0, springConfig),
    left: withSpring(isOpened.value ? (width - 300 - 20) / 2 : 0, springConfig),
    maxHeight: withSpring(isOpened.value ? 300 : 80, springConfig),
  }));

  const minimizeAnimationStyles = useAnimatedStyle(() => ({
    position: 'absolute',
    top: withSpring(isOpened.value ? 7 : -100, springConfig),
    left: (width - 30) / 2,
  }));

  const songNameAnimationStyles = useAnimatedStyle(() => ({
    top: withSpring(isOpened.value ? 300 + 70 + 10 + 70 : 15, springConfig),
    left: withSpring(
      isOpened.value ? (width - (measure(songNameRef)?.width ?? 0)) / 2 : 100,
      springConfig,
    ),
  }));
  const singerNameAnimationStyles = useAnimatedStyle(() => ({
    top: withSpring(
      isOpened.value ? 300 + 70 + 10 + 70 + 35 : 15 + 25,
      springConfig,
    ),
    left: withSpring(
      isOpened.value ? (width - (measure(singerNameRef)?.width ?? 0)) / 2 : 100,
      springConfig,
    ),
  }));

  const iconContainerAnimationStyles = useAnimatedStyle(() => {
    // console.log(measure(iconContainerRef)?.width ?? 0);

    return {
      top: withSpring(
        isOpened.value ? 300 + 70 + 10 + 70 + 35 + 70 : 30,
        springConfig,
      ),
      gap: withSpring(isOpened.value ? 40 : 25, springConfig),
      right: withSpring(isOpened.value ? (width - 170) / 2 : 20, springConfig),
    };
  });
  const backwardContainerAnimationStyles = useAnimatedStyle(() => ({
    display: withDelay(500, withTiming(isOpened.value ? 'flex' : 'none')),
    opacity: withTiming(isOpened.value ? 1 : 0),
  }));

  const playAnimationStyles = useAnimatedStyle(() => ({
    fontSize: withSpring(isOpened.value ? 40 : 20, springConfig),
  }));
  const forWordAndBackwardAnimationStyles = useAnimatedStyle(() => ({
    fontSize: withSpring(isOpened.value ? 30 : 20, springConfig),
  }));
  const sliderAnimationStyle = useAnimatedStyle(() => {
    return {
      position: 'absolute',
      top: withSpring(
        isOpened.value ? 300 + 70 + 10 + 70 + 35 + 70 + 80 : 57,
        springConfig,
      ),
      width: withSpring(
        isOpened.value ? 300 : width - 20 - 80 - 40 - 10,
        springConfig,
      ),
      right: withSpring(isOpened.value ? (width - 300) / 2 : 10, springConfig),
    };
  });

  const sliderAnimationProps = useAnimatedProps<SliderProps>(() => ({}));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.bottomDrawerContainer, animatedStyles]}>
        <Animated.View style={[styles.root]}>
          <BlurView
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            }}
          />
          <Animated.View style={minimizeAnimationStyles}>
            <Icon name="minus" size={30} />
          </Animated.View>
          <Animated.Image
            // source={{uri: music.image[2].url}}
            source={{
              uri: 'https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg',
            }}
            style={[styles.image, imageAnimationStyles]}
          />
          <Animated.View ref={textContainerRef} style={[styles.textContainer]}>
            <Animated.Text
              style={[styles.songName, songNameAnimationStyles]}
              ref={songNameRef}>
              Some Song And Some
            </Animated.Text>
            <Animated.Text
              style={[styles.singerName, singerNameAnimationStyles]}
              ref={singerNameRef}>
              Some Song
            </Animated.Text>
          </Animated.View>
          <Animated.View
            ref={iconContainerRef}
            style={[styles.iconContainer, iconContainerAnimationStyles]}>
            <Animated.View style={[backwardContainerAnimationStyles]}>
              <TouchableOpacity>
                <AnimatedIcon
                  name="backward"
                  style={[styles.icon, forWordAndBackwardAnimationStyles]}
                />
              </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity>
              <AnimatedIcon
                name="play"
                style={[styles.icon, playAnimationStyles]}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AnimatedIcon
                name="forward"
                style={[styles.icon, forWordAndBackwardAnimationStyles]}
              />
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={[sliderAnimationStyle]}>
            <AnimatedSlider animatedProps={sliderAnimationProps} />
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </GestureDetector>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  bottomDrawerContainer: {
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 10,
  },
  root: {
    overflow: 'hidden',
    position: 'relative',
    height: '100%',
    width: '100%',
    padding: 10,
    display: 'flex',
    // flexDirection: 'row',
  },
  image: {
    borderRadius: 10,
    height: '100%',
    aspectRatio: '1/1',
    maxHeight: 300,
    zIndex: 5,
  },
  textContainer: {
    gap: 5,
    position: 'absolute',
  },
  songName: {
    position: 'absolute',
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    // backgroundColor: '#fff',
    // width:''
  },
  singerName: {
    position: 'absolute',
    fontSize: 14,
  },
  icon: {
    // fontSize: 25,
    color: '#fff',
  },
  iconContainer: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: '#fff',
    // right: '50%',
    // transform:[{translateX:55}]
  },
  slider: {
    position: 'absolute',
    height: 20,
  },
});
