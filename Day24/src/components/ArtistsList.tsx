import { useSelector, useDispatch } from "react-redux";
import { deleteArtist } from "../features/artists/artistSlice";

const ArtistsList = () => {
  const artists = useSelector((state) => state.artists);
  const despatch = useDispatch();

  const handeDelete = (id: string) => {
    despatch(deleteArtist(id));
  };

  return (
    <>
      {artists.map((artist) => (
        <div key={artist.id}>
          <h3>{artist.name}</h3>
          <p>{artist.recentAlbum}</p>
          <p>{artist.year}</p>
          <button onClick={() => handeDelete(artist.id)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default ArtistsList;
