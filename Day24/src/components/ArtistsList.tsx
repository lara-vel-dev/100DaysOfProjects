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
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Artists {artists.length}</h1>
        <Link
          to="/add-artist"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm shadow-sm"
        >
          Add Artist
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-3">
        {artists.map((artist) => (
          <div className="bg-neutral-800 p-4 rounded-md" key={artist.id}>
            <header className="flex justify-between">
              <h3 className="text-lg font-bold">{artist.name}</h3>
              <div className="flex gap-x-2">
                <Link
                  className="bg-zinc-600 px-2 py-1 text-xs rounded-md self-center"
                  to={`/edit-artist/${artist.id}`}
                >
                  Edit
                </Link>
                <button
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                  onClick={() => handeDelete(artist.id)}
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{artist.recentAlbum}</p>
            <p>{artist.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistsList;
