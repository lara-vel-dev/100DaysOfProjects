import { useSelector } from "react-redux";

const ArtistForm = () => {
  const stateArtists = useSelector((state) => state.artists);
  
  return (
    <>
      <h1>Form</h1>
    </>
  );
};

export default ArtistForm;
