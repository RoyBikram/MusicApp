import SearchResultType from './SearchResultType';

export default interface SongSearchResult {
  id: string;
  name: string;
  type: SearchResultType.Song;
  year: string | null;
  releaseDate: string | null;
  duration: number;
  label: string;
  language: string;
  hasLyrics: true;
  artists: {
    primary: [
      {
        id: string;
        name: string;
        role: string;
        image: {
          quality: '50x50' | '150x150' | '500x500';
          url: string;
        }[];
        type: string;
        url: string;
      },
    ];
  };
  image: {
    quality: '50x50' | '150x150' | '500x500';
    url: string;
  }[];
  downloadUrl: {
    quality: '12kbps' | '48kbps' | '96kbps' | '160kbps' | '320kbps';
    url: string;
  }[];
}
