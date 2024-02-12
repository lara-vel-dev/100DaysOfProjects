import { useSelector } from "react-redux";

const ArtistsList = () => {
  const artists = useSelector((state) => state.artists);
  console.log(artists)

  return (
    <>
      {artists.map((artist) => (
        <div key={artist.id}>
          <h3>{artist.name}</h3>
          <p>{artist.recentAlbum}</p>
          <p>{artist.year}</p>
        </div>
      ))}
    </>
  );
};

export default ArtistsList;
