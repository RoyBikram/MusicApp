import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import Music from '../Interface/Music';

// Define a type for the slice state
interface MusicState {
  selectedMusic?: Music;
}

// Define the initial state using that type
const initialState: MusicState = {};

export const counterSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setSelectMusic: (state, actions: PayloadAction<Music>) => {
      state.selectedMusic = actions.payload;
    },
  },
});

export const {setSelectMusic} = counterSlice.actions;
export default counterSlice.reducer;
