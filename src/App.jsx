import React, { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import LoginPage from "./components/LoginPage.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // <-- loading state

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.emails) {
          setUser(data);
        } else {
          setUser(null);
        }
        setLoading(false); // <-- end loading
      })
      .catch(() => {
        setUser(null);
        setLoading(false); // <-- end loading
      });
  }, []);

  // Show nothing until user fetch is complete
  if (loading) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      <Header user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/products" /> : <LoginPage />}
        />
        <Route
          path="/products"
          element={user ? <Products /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
