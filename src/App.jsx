import React, { useState } from "react";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import CountdownTimer from "./components/CountdownTimer";
import EmailSignup from "./components/EmailSignup";
import { Sparkles, Heart, Star } from "lucide-react";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleBackClick = () => {
    setShowLogin(false);
  };

  if (showLogin) {
    return (
      <>
        <Header showLogin={true} onBackClick={handleBackClick} />
        <LoginPage />
      </>
    );
  }

  return (
    <>
      <Header showLogin={false} onLoginClick={handleLoginClick} />

      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden pt-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-amber-200 opacity-30">
            <Sparkles className="w-8 h-8 animate-pulse" />
          </div>
          <div className="absolute top-40 right-20 text-rose-200 opacity-30">
            <Heart className="w-6 h-6 animate-bounce" />
          </div>
          <div className="absolute bottom-32 left-20 text-orange-200 opacity-30">
            <Star className="w-7 h-7 animate-pulse" />
          </div>
          <div className="absolute bottom-20 right-10 text-amber-200 opacity-30">
            <Sparkles className="w-5 h-5 animate-bounce" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
          {/* Logo */}
          <div className="mb-8 md:mb-12">
            <img
              src="/516516672_17842053153537252_4367564328702039902_n.jpg"
              alt="Twirl & Tie Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg"
            />
          </div>

          {/* Main heading */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-amber-900 mb-4 tracking-wide animate-fade-in-up">
              <span className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default">
                T
              </span>
              <span
                className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default"
                style={{ animationDelay: "0.1s" }}
              >
                w
              </span>
              <span
                className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default"
                style={{ animationDelay: "0.2s" }}
              >
                i
              </span>
              <span
                className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default"
                style={{ animationDelay: "0.3s" }}
              >
                r
              </span>
              <span
                className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default"
                style={{ animationDelay: "0.4s" }}
              >
                l
              </span>
              <span className="inline-block mx-2 md:mx-3">&</span>
              <span
                className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default"
                style={{ animationDelay: "0.5s" }}
              >
                T
              </span>
              <span
                className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default"
                style={{ animationDelay: "0.6s" }}
              >
                i
              </span>
              <span
                className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default"
                style={{ animationDelay: "0.7s" }}
              >
                e
              </span>
            </h1>
            <p
              className="text-2xl md:text-3xl text-amber-800 font-black tracking-widest uppercase animate-slide-in-right"
              style={{
                fontFamily: '"Helvetica Neue", "Arial", "Roboto", sans-serif',
                fontWeight: "900",
                textShadow: "1px 1px 2px rgba(146, 64, 14, 0.2)",
                letterSpacing: "0.25em",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale",
              }}
            >
              Paranda
            </p>
          </div>

          {/* Coming soon message */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-amber-900 mb-4">
              Something Beautiful is Coming Soon
            </h2>
            <p className="text-base md:text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed">
              Discover the timeless elegance of traditional Parandas.
              Handcrafted with love, designed to celebrate the beauty of Indian
              heritage.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="mb-12 md:mb-16">
            <CountdownTimer />
          </div>

          {/* Email signup */}
          <div className="mb-8 md:mb-12 w-full max-w-md">
            <p className="text-center text-amber-800 mb-4 font-medium">
              Be the first to know when we launch
            </p>
            <EmailSignup />
          </div>

          {/* Features preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-amber-800" />
              </div>
              <h3 className="text-lg font-medium text-amber-900 mb-2">
                Handcrafted
              </h3>
              <p className="text-amber-800 text-sm">
                Each Paranda is carefully handmade with traditional techniques
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-rose-800" />
              </div>
              <h3 className="text-lg font-medium text-amber-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-amber-800 text-sm">
                Made with the finest materials for lasting beauty and comfort
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-orange-800" />
              </div>
              <h3 className="text-lg font-medium text-amber-900 mb-2">
                Cultural Heritage
              </h3>
              <p className="text-amber-800 text-sm">
                Celebrating the rich tradition of Indian hair accessories
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <p className="text-amber-700 text-sm">
              © 2025 Twirl & Tie. Crafted with love for tradition.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
