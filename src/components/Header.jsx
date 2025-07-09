import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Header = ({ showLogin, onLoginClick, onBackClick }) => {
  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-amber-900/30 backdrop-blur-xl rounded-full px-4 sm:px-6 py-3 shadow-2xl border border-amber-200/20" style={{width: '80vw', maxWidth: '1200px'}}>
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/516516672_17842053153537252_4367564328702039902_n.jpg" 
              alt="Twirl & Tie Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
            />
            <div className="ml-2 sm:ml-3">
              <h1 className="text-sm sm:text-lg font-medium text-amber-900 tracking-wide">
                Twirl & Tie
              </h1>
              <p className="text-xs text-amber-800 uppercase tracking-wider hidden sm:block">
                Paranda
              </p>
            </div>
          </div>

          {/* Login/Back Button */}
          <div>
            {showLogin ? (
              <button
                onClick={onBackClick}
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-full font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Back to Home</span>
                <span className="sm:hidden">Back</span>
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="px-4 sm:px-6 py-2 bg-amber-800 hover:bg-amber-900 text-white rounded-full font-medium transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;