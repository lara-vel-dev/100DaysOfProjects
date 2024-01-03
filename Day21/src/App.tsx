import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Unauthorized from "./components/Unauthorized";
import "./App.css";

function App() {
  const [user, setUser] = useState(false);

  //* create Login Funtion
  const login = () => {
    setUser(true);
  };

  //* create logout Funtion
  const logout = () => {
    setUser(false);
  };
  return (
    <>
      <Router>
        <Navbar user={user} login={login} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unauth" element={<Unauthorized />} />
          <Route
            path="/product"
            element={
              <ProtectedRoute user={user}>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      {!user ? (
        <div className="login-form">
          <img
            src="https://images.squarespace-cdn.com/content/v1/548a736be4b04f6e8e823d49/1595820077638-96DRKX9MGL724MH80HT0/Avartar-1-naomi-vandoren-web1920-1-wide.jpg?format=2500w"
            alt=""
          />
          <div className="container">
            <form action="" className="form">
              <h1>LOGIN</h1>
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button onClick={() => login()}>Login</button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;

//* Create Protected Route Function
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export const ProtectedRoute = (props: any) => {
  if (props.user) {
    return props.children;
  } else {
    return <Navigate to="/unauth" replace={true} />;
  }
};
