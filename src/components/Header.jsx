import React from 'react';
import { Link, useLocation } from "react-router-dom";

const Header = ({ user }) => {
  const location = useLocation();

  const handleLogout = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/logout`;
  };

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-amber-900/30 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-amber-200/20 w-[80vw] max-w-[1200px]">
        <div className="flex items-center justify-between">
          {/* Left Section (Logo) */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="516516672_17842053153537252_4367564328702039902_n.jpg"
              className="w-10 h-10 rounded-full"
              alt="Twirl & Tie Logo"
            />
            <span className="text-amber-900 font-semibold">Twirl & Tie</span>
          </Link>

          {/* Right Section (Buttons) */}
          <div className="flex items-center gap-3">
            {/* Show Home button ONLY on products page */}
            {location.pathname === "/products" && (
              <Link
                to="/"
                className="px-4 py-2 bg-white/20 border border-white/30 text-amber-900 hover:bg-white/30 rounded-full font-medium transition-all duration-300 text-sm sm:text-base"
              >
                ← Home
              </Link>
            )}

            {/* Auth Buttons */}
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-full font-medium transition-all duration-300 text-sm sm:text-base"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-full font-medium transition-all duration-300 text-sm sm:text-base"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
