import ArtistForm from "./components/ArtistForm";
import ArtistsList from "./components/ArtistsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="h-full items-center justify-center flex">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ArtistsList />}></Route>
            <Route path="/add-artist" element={<ArtistForm />}></Route>
            <Route path="/edit-artist/:id" element={<ArtistForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
