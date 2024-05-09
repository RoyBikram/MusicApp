import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Music from '../Interface/Music';
import {useAppDispatch} from '../redux/hook';
import {setSelectMusic} from '../redux/musicSlice';
interface MusicCardProps {
  data: Music;
}

const MusicCard = ({data}: MusicCardProps) => {
  const dispatch = useAppDispatch();
  const handlePress = () => {
    dispatch(setSelectMusic(data));
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.root}>
      <Image
        source={{uri: data.image[1].url}}
        height={70}
        width={70}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.songName}>{data.name}</Text>
        <Text style={styles.singerName}>{data.artists.primary[0].name}</Text>
      </View>
      <Icon name="favorite-border" size={25} color="#fff" />
    </TouchableOpacity>
  );
};

export default MusicCard;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
  },
  image: {
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    gap: 10,
  },
  songName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  singerName: {
    fontSize: 14,
  },
});
