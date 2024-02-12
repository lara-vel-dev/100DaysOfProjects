import { useState } from "react";
import { useDispatch } from "react-redux";
import { addArtist } from "../features/artists/artistSlice";
import { v4 as uuid } from "uuid";

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
    dispatch(
      addArtist({
        ...artist,
        id: uuid(),
      })
    );
  };

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
