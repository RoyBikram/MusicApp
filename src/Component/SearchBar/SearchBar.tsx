import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Search} from '../../Assist';

interface SearchBarProps {
  handleChange: (query?: string) => void;
}

export const SearchBar = ({handleChange}: SearchBarProps) => {
  const [query, setQuery] = useState<string>();
  useEffect(() => {
    handleChange(query);
  }, [query]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor={'#424242'}
        placeholder="Search song"
        onChangeText={newText => {
          setQuery(newText);
        }}
      />
      <TouchableOpacity style={styles.button}>
        <Search height={25} width={25} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#0c0a17',
    borderRadius: 30,
    alignItems: 'center',
    height: 50,
  },
  textInput: {
    flexGrow: 1,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#06050a',
    width: 65,
    height: 40,
    borderRadius: 20,
    marginRight: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
