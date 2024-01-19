import { auth } from "../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Signin from "./Signin";

const styles = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.heading}>Chat App</h1>
        <Signin/>
      </nav>
    </>
  );
};

export default Navbar;
