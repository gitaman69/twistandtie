import React, { useEffect } from "react";
import { Clock, Sparkles, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log("Token from URL:", token);

    if (token) {
      localStorage.setItem("token", token);
      console.log("Token saved to localStorage");

      // Clean the URL by removing token param and redirect to /products
      window.history.replaceState({}, document.title, "/products");
      navigate("/products", { replace: true });
    } else {
      console.log("No token found in URL.");
    }

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden pt-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-10 text-amber-200 opacity-30">
          <Sparkles className="w-8 h-8 animate-pulse" />
        </div>
        <div className="absolute top-52 right-20 text-rose-200 opacity-30">
          <Heart className="w-6 h-6 animate-bounce" />
        </div>
        <div className="absolute bottom-32 left-20 text-orange-200 opacity-30">
          <Clock className="w-7 h-7 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-10 text-amber-200 opacity-30">
          <Sparkles className="w-5 h-5 animate-bounce" />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="max-w-md w-full">
          {/* Logo & Heading */}
          <div className="text-center mb-8">
            <img
              src="/516516672_17842053153537252_4367564328702039902_n.jpg"
              alt="Twirl & Tie Logo"
              className="w-24 h-24 object-contain mx-auto mb-4 drop-shadow-lg"
            />
            <h1 className="text-3xl font-light text-amber-900 mb-2 tracking-wide">
              Login
            </h1>
            <p className="text-amber-800 font-light">
              Access your Twirl & Tie account
            </p>
          </div>

          {/* Login with Google */}
          <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg text-center">
            <h2 className="text-xl font-light text-amber-900 mb-4">
              Login with Google
            </h2>
            <button
              onClick={handleGoogleLogin}
              className="bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-3"
            >
              <img
                src="https://img.icons8.com/color/16/google-logo.png"
                alt="Google"
              />
              Sign in with Google
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-amber-800">
            You’ll be redirected to Google for secure authentication.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
