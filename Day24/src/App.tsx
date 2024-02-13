import "./App.css";
import ArtistForm from "./components/ArtistForm";
import ArtistsList from "./components/ArtistsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ArtistsList />}></Route>
          <Route path="/add-artist" element={<ArtistForm />}></Route>
          <Route path="/edit-artist/:id" element={<ArtistForm />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


      

export default App;
