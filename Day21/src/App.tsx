import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <main>
      <Navbar />
      <div className="container">
        <div className="text">
          <h1>Welcome to Avatar Routes!</h1>
          <h2>
            A place where you can understand how protected and public 
            routes work.
          </h2>
        </div>
        <img
          src="https://images.squarespace-cdn.com/content/v1/548a736be4b04f6e8e823d49/1595820077638-96DRKX9MGL724MH80HT0/Avartar-1-naomi-vandoren-web1920-1-wide.jpg?format=2500w"
          alt="Avatar background"
        />
      </div>
    </main>
  );
}

export default App;
