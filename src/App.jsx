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
  const [loading, setLoading] = useState(true); // loading UI

  useEffect(() => {
    // First, check if token exists in URL (Google login redirect)
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromURL = urlParams.get("token");

    if (tokenFromURL) {
      console.log("🔐 Found token in URL:", tokenFromURL);
      localStorage.setItem("token", tokenFromURL);
      // Remove token from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const token = localStorage.getItem("token");
    console.log("🔐 Retrieved token from localStorage:", token);

    if (!token) {
      console.warn("⚠️ No token found in localStorage.");
      setUser(null);
      setLoading(false);
      return;
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/user`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.email || data?.emails) {
          console.log("✅ Authenticated user data:", data);
          setUser(data);
        } else {
          console.warn("❌ Invalid user data:", data);
          setUser(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching user:", err);
        setUser(null);
        setLoading(false);
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
