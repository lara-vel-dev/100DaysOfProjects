import "./App.css";
import { useSelector } from "react-redux";
import ArtistForm from "./components/ArtistForm";
import ArtistsList from "./components/ArtistsList";

function App() {
  const artistState = useSelector((state) => state.artists);
  console.log(artistState);

  return (
    <>
      <h1>hello world!</h1>
      <ArtistForm />
      <ArtistsList />
    </>
  );
}

export default App;
