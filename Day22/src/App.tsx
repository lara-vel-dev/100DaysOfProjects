import Navbar from "./components/Navbar";
import { auth } from "./services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainter: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
};

function App() {

  const [user] = useAuthState(auth)
  // console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainter}>
        <Navbar />
      </section>
    </div>
  );
}

export default App;
