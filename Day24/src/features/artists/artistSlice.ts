import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Dua Lipa", recentAlbum: "Future Nostalgia", year: "2020" },
  {
    id: "2",
    name: "MARINA",
    recentAlbum: "Ancient Dreams In A Modern Land",
    year: "2021",
  },
  {
    id: "3",
    name: "Ellie Goulding",
    recentAlbum: "Higher Than Heaven",
    year: "2023",
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
      const foundArtist = state.find((artist) => artist.id === action.payload);
      if (foundArtist) {
        state.splice(state.indexOf(foundArtist), 1);
      }
    },
    updateArtist: (state, action) => {
      const { id, name, recentAlbum, year } = action.payload;
      const foundArtist = state.find((artist) => artist.id == id);
      if (foundArtist) {
        foundArtist.name = name;
        foundArtist.recentAlbum = recentAlbum;
        foundArtist.year = year;
      }
    },
  },
});

export const { addArtist, deleteArtist, updateArtist } = artistSlice.actions;
export default artistSlice.reducer;
