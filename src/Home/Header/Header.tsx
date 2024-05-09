import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {getGreeting} from '../../Helper';

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.headerText]}>{getGreeting()}</Text>
        <Text style={[styles.name, styles.headerText]}>Bikram</Text>
      </View>
      <Image
        source={require('../../Assist/Avatar.jpg')}
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  name: {
    color: '#942626',
    fontSize: 30,
  },
  textContainer: {
    display: 'flex',
    alignSelf: 'flex-end',
  },
});
