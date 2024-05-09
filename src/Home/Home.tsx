import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import MusicCard from '../Component/MusicCard';
import {SearchBar} from '../Component/SearchBar';
import SongSearchResult from '../Interface/Music';
import {Header} from './Header';

export function Home() {
  const [data, setData] = useState<SongSearchResult[]>();
  const [searchQuery, setSearchQuery] = useState<string>();

  const fetchSong = async (query: string) => {
    const responseData = await fetch(
      `https://saavn.dev/api/search/songs?query=${query}`,
    );
    const jsonData = await responseData.json();

    setData(jsonData.data.results);
  };

  useEffect(() => {
    typeof searchQuery === 'string' && fetchSong(searchQuery);
  }, [searchQuery]);

  return (
    <View style={styles.root}>
      <Header />
      <SearchBar handleChange={query => setSearchQuery(query)} />
      <View style={styles.flashListContainer}>
        <FlashList
          estimatedItemSize={20}
          data={data}
          renderItem={({item, index}) => <MusicCard key={index} data={item} />}
          ItemSeparatorComponent={() => (
            <View style={styles.itemSeparatorComponent} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    gap: 20,
    height: '100%',
  },
  flashListContainer: {
    flex: 1,
  },
  itemSeparatorComponent: {
    height: 20,
  },
});
