import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "../services/firebase";

const style = {
  wrapper: `flex justify-center`,
};

const googleSignin = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const Signin = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton />
    </div>
  );
};

export default Signin;
