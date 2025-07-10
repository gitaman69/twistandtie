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
    const token = localStorage.getItem("token");
    console.log("🔐 Retrieved token from localStorage:", token);

    if (!token) {
      console.warn("⚠️ No token found in localStorage.");
      setUser(null);
      setLoading(false);
      return;
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          console.error("❌ Auth error:", error);
          throw new Error(error.message);
        }
        return res.json();
      })
      .then((data) => {
        console.log("✅ Authenticated user data:", data);
        setUser(data);
      })
      .catch((err) => {
        console.error("🚫 Fetch user failed:", err.message);
        setUser(null);
      })
      .finally(() => setLoading(false));
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
