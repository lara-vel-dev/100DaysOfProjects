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
          console.log("oa");
          setArtist({ ...ar[i] });
        }
      }
    }
  }, [params, ar]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        value={artist.name}
        placeholder="Artist"
        onChange={handleChange}
      />
      <input
        name="recentAlbum"
        type="text"
        value={artist.recentAlbum}
        placeholder="Album"
        onChange={handleChange}
      />
      <input
        name="year"
        type="text"
        value={artist.year}
        placeholder="Year"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  );
};

export default ArtistForm;
