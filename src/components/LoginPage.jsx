import React from 'react';
import { Clock, Heart, Sparkles } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 relative overflow-hidden pt-16">
      {/* Background decorative elements */}
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
        {/* Main Content */}
        <div className="max-w-md w-full">
          {/* Logo */}
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

          {/* Coming Soon Card */}
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg text-center">
            <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-amber-800" />
            </div>
            
            <h2 className="text-2xl font-light text-amber-900 mb-4">
              Login Feature Coming Soon
            </h2>
            
            <p className="text-amber-800 mb-6 leading-relaxed">
              We're crafting a beautiful and secure login experience for our customers. 
              This feature will be available when we officially launch.
            </p>

            <div className="space-y-3 text-sm text-amber-700">
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span>Secure account creation</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span>Order history & tracking</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span>Personalized recommendations</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span>Exclusive member benefits</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-amber-700 text-sm">
              Want to be notified when login is available?
            </p>
            <p className="text-amber-800 text-sm mt-1">
              Sign up for our launch notifications on the home page!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;