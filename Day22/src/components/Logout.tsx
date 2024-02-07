import { auth } from "../services/firebase";

const style = {
  button: `bg-red-500 text-white px-4 py-2 hover:bg-red-400 `,
};

const Logout = () => {

    const signOut = () => {
        signOut(auth);
    }

  return <button onClick={() => auth.signOut()} className={style.button}>Logout</button>;
};

export default Logout;
