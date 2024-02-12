import { useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { addArtist } from "../features/artists/artistSlice";

const ArtistForm = () => {
  const [artist, setArtist] = useState({ name: "", recentAlbum: "", year: 0 });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setArtist({
      ...artist,
      [e.target.name]:
        e.target.name == "year" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addArtist(artist));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Artist"
        onChange={handleChange}
      />
      <input
        name="recentAlbum"
        type="text"
        placeholder="Album"
        onChange={handleChange}
      />
      <input
        name="year"
        type="text"
        placeholder="Year"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
};

export default ArtistForm;
