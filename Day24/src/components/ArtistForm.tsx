import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addArtist, updateArtist } from "../features/artists/artistSlice";
import { v4 as uuid } from "uuid";

const ArtistForm = () => {
  const [artist, setArtist] = useState({ name: "", recentAlbum: "", year: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const ar = useSelector((state) => state.artists);

  const handleChange = (e) => {
    setArtist({
      ...artist,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(updateArtist({ ...artist, id: params.id }));
    } else {
      dispatch(
        addArtist({
          ...artist,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      for (let i = 0; i < ar.length; i++) {
        if (ar[i].id == params.id) {
          setArtist({ ...ar[i] });
        }
      }
    }
  }, [params, ar]);

  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-8">
      <label className="block text-sm font-bold">Artist:</label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="name"
        type="text"
        value={artist.name}
        placeholder="Name"
        autoComplete="off"
        onChange={handleChange}
      />
      <label className="block text-sm font-bold">Recent Album:</label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="recentAlbum"
        type="text"
        value={artist.recentAlbum}
        placeholder="Album"
        autoComplete="off"
        onChange={handleChange}
      />
      <label className="block text-sm font-bold">Year:</label>
      <input
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
        name="year"
        type="text"
        value={artist.year}
        placeholder="Year"
        autoComplete="off"
        onChange={handleChange}
      />
      <button className="bg-indigo-600 px-2 py-1">Save</button>
    </form>
  );
};

export default ArtistForm;
