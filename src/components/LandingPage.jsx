import React from "react";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials.jsx";
import { Sparkles, Heart, Star, ShoppingBag } from "lucide-react";

function LandingPage() {
  return (
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
            src="./public/516516672_17842053153537252_4367564328702039902_n.jpg" // <-- update with your actual logo path
            alt="Twirl & Tie Logo"
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full border-4 border-amber-200 drop-shadow-lg"
          />
        </div>

        {/* Main heading */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-amber-900 mb-4 tracking-wide animate-fade-in-up">
            {/* Twirl */}
            <span className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default transition-all duration-300 hover:text-amber-700 mr-3">
              Twirl
            </span>

            {/* & with shimmer */}
            <span className="inline-block mx-1 font-semibold animate-shimmer text-transparent bg-clip-text">
              &
            </span>

            {/* Tie */}
            <span className="inline-block animate-bounce-gentle hover:animate-pulse cursor-default transition-all duration-300 hover:text-amber-700 ml-3">
              Tie
            </span>
          </h1>

          <p
            className="text-2xl md:text-3xl text-amber-800 font-black tracking-widest uppercase"
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

        {/* Launch announcement */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-2 mb-6">
            <Star className="w-5 h-5 text-amber-600" />
            <span className="text-amber-800 font-semibold text-sm uppercase tracking-wider">
              Now Live
            </span>
            <Star className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-2xl md:text-4xl font-light text-amber-900 mb-4">
            Our First Collection is Here!
          </h2>
          <p className="text-base md:text-lg text-amber-800 max-w-2xl mx-auto leading-relaxed mb-8">
            Discover the timeless elegance of traditional Parandas. Handcrafted
            with love, designed to celebrate the beauty of Indian heritage.
          </p>

          {/* Shop Now Button */}
          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
            Shop Our Collection
            <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
          </Link>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center mb-12">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
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

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
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

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105">
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

        {/* Testimonials */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <Testimonials />
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-amber-700 text-sm">
            © 2025 Twirl & Tie. Crafted with love for tradition.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
