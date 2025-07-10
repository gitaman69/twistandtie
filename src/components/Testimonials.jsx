import React, { useState, useEffect } from "react";
import { Heart, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Gagan",
    role: "Owner",
    messageEn: "The most beautiful Paranda I've ever owned! The craftsmanship is absolutely stunning and it makes me feel so connected to my roots.",
    messagePunjabi: "ਮੇਰੇ ਕੋਲ ਸਭ ਤੋਂ ਸੁੰਦਰ ਪਰਾਂਦਾ! ਇਸਦੀ ਕਾਰੀਗਰੀ ਬਹੁਤ ਸ਼ਾਨਦਾਰ ਹੈ ਅਤੇ ਇਹ ਮੈਨੂੰ ਆਪਣੀਆਂ ਜੜ੍ਹਾਂ ਨਾਲ ਜੋੜਦਾ ਹੈ।",
    avatar: "G",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 2,
    name: "Mahak",
    role: "Owner",
    messageEn: "Perfect blend of tradition and elegance. I get compliments everywhere I go! It's like wearing a piece of art in my hair.",
    messagePunjabi: "ਪਰੰਪਰਾ ਅਤੇ ਸੁੰਦਰਤਾ ਦਾ ਸੰਪੂਰਨ ਮਿਸ਼ਰਣ। ਹਰ ਜਗ੍ਹਾ ਤਾਰੀਫ਼ ਮਿਲਦੀ ਹੈ! ਇਹ ਮੇਰੇ ਵਾਲਾਂ ਵਿੱਚ ਕਲਾ ਦਾ ਟੁਕੜਾ ਪਹਿਨਣ ਵਰਗਾ ਹੈ।",
    avatar: "M",
    color: "from-rose-400 to-pink-500"
  },
  {
    id: 3,
    name: "Simran",
    role: "Marketing & Product Seller",
    messageEn: "As someone in the business, I can say these are exceptional quality. Proud to represent this brand and see customers' joy!",
    messagePunjabi: "ਇਸ ਕਾਰੋਬਾਰ ਵਿੱਚ ਹੋਣ ਕਰਕੇ, ਮੈਂ ਕਹਿ ਸਕਦੀ ਹਾਂ ਇਹ ਬੇਮਿਸਾਲ ਗੁਣਵੱਤਾ ਹੈ। ਇਸ ਬ੍ਰਾਂਡ ਦੀ ਨੁਮਾਇੰਦਗੀ ਕਰਕੇ ਮਾਣ ਹੈ!",
    avatar: "S",
    color: "from-orange-400 to-amber-500"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPunjabi, setShowPunjabi] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const langInterval = setInterval(() => {
      setShowPunjabi((prev) => !prev);
    }, 4000);

    return () => clearInterval(langInterval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="py-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-light text-amber-900 mb-2">
          What Our Team Say
        </h3>
        <p className="text-amber-800">Voices from our beautiful community</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Main testimonial card */}
        <div className={`bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30 shadow-xl transition-all duration-500 ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}`}>
          <div className="text-center">
            {/* Quote icon */}
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Quote className="w-8 h-8 text-amber-600" />
            </div>

            {/* Message with language toggle animation */}
            <div className="relative min-h-[120px] flex items-center justify-center mb-8">
              <blockquote 
                className={`text-lg md:text-xl text-amber-900 italic leading-relaxed transition-all duration-700 ease-in-out transform absolute inset-0 flex items-center justify-center text-center ${
                  showPunjabi ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
              >
                "{currentTestimonial.messageEn}"
              </blockquote>
              
              <blockquote 
                className={`text-lg md:text-xl text-amber-900 italic leading-relaxed transition-all duration-700 ease-in-out transform absolute inset-0 flex items-center justify-center text-center ${
                  showPunjabi ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  fontFamily: '"Noto Sans Gurmukhi", "Arial Unicode MS", sans-serif'
                }}
              >
                "{currentTestimonial.messagePunjabi}"
              </blockquote>
            </div>

            {/* Author info */}
            <div className="flex items-center justify-center gap-4">
              <div className={`w-12 h-12 bg-gradient-to-br ${currentTestimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {currentTestimonial.avatar}
              </div>
              <div className="text-left">
                <h4 className="text-amber-900 font-semibold text-lg">
                  {currentTestimonial.name}
                </h4>
                <p className="text-amber-700 text-sm">
                  {currentTestimonial.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-amber-600 shadow-lg scale-125' 
                  : 'bg-amber-200 hover:bg-amber-400'
              }`}
            />
          ))}
        </div>

        {/* Language indicator */}
        <div className="text-center mt-4">
          <span className="text-xs text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            {showPunjabi ? 'ਪੰਜਾਬੀ' : 'English'} • Auto-switching
          </span>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;