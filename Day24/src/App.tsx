import './App.css'
import { useSelector } from 'react-redux';

function App() {
  const artistState = useSelector(state => state.artists)
  console.log(artistState)

  return (
    <>
      <h1>hello world!</h1>
    </>
  );
}

export default App
