import { useSelector, useDispatch } from "react-redux";
import { deleteArtist } from "../features/artists/artistSlice";
import { Link } from "react-router-dom";

const ArtistsList = () => {
  const artists = useSelector((state) => state.artists);
  const despatch = useDispatch();

  const handeDelete = (id: string) => {
    despatch(deleteArtist(id));
  };

  return (
    <>
      <header>
        <h1>Artists {artists.length}</h1>
        <Link to="/add-artist">Add Artist</Link>
      </header>

      {artists.map((artist) => (
        <div key={artist.id}>
          <h3>{artist.name}</h3>
          <p>{artist.recentAlbum}</p>
          <p>{artist.year}</p>
          <button onClick={() => handeDelete(artist.id)}>Delete</button>
          <Link to={`/edit-artist/${artist.id}`}>Edit</Link>
        </div>
      ))}
    </>
  );
};

export default ArtistsList;
