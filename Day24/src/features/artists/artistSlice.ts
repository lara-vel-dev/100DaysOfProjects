import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Dua Lipa", recentAlbum: "Future Nostalgia", year: 2020 },
  {
    id: 2,
    name: "MARINA",
    recentAlbum: "Ancient Dreams In A Modern Land",
    year: 2021,
  },
  {
    id: 3,
    name: "Ellie Goulding",
    recentAlbum: "Higher Than Heaven",
    year: 2023,
  },
];

export const artistSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    addArtist: (state, action) => {
      state.push(action.payload);
    },
    deleteArtist: (state, action) => {
      const taskFound = state.find((artist) => artist.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },
  },
});

export const { addArtist, deleteArtist } = artistSlice.actions;
export default artistSlice.reducer;
