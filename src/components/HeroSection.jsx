import { ChevronRight, Wrench, Zap, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

export const HeroSection = ({ heroSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create sparkle animation
    const createSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 2 + Math.random() * 3
        });
      }
      setSparkles(newSparkles);
    };
    
    createSparkles();
  }, []);

  // Animated Car SVG Component
  const AnimatedCar = ({ className, style }) => (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 200 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car Body */}
      <path 
        d="M20 60 L40 40 L80 40 L100 50 L160 50 L180 60 L180 80 L20 80 Z" 
        fill="url(#carGradient)" 
        className="animate-pulse"
      />
      {/* Windows */}
      <path 
        d="M45 40 L75 40 L85 50 L55 50 Z" 
        fill="#3B82F6" 
        opacity="0.7"
      />
      <path 
        d="M105 50 L155 50 L155 60 L105 60 Z" 
        fill="#3B82F6" 
        opacity="0.7"
      />
      {/* Wheels */}
      <circle 
        cx="50" 
        cy="80" 
        r="12" 
        fill="#374151" 
        className="animate-spin"
        style={{ transformOrigin: '50px 80px', animationDuration: '2s' }}
      />
      <circle 
        cx="150" 
        cy="80" 
        r="12" 
        fill="#374151" 
        className="animate-spin"
        style={{ transformOrigin: '150px 80px', animationDuration: '2s' }}
      />
      <circle cx="50" cy="80" r="6" fill="#6B7280" />
      <circle cx="150" cy="80" r="6" fill="#6B7280" />
      {/* Headlights */}
      <circle cx="175" cy="65" r="4" fill="#FEF3C7" className="animate-pulse" />
      <circle cx="175" cy="75" r="4" fill="#FEF3C7" className="animate-pulse" />
      <defs>
        <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Animated Wrench SVG Component
  const AnimatedWrench = ({ className, style }) => (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20 20 L30 10 L90 70 L80 80 Z" 
        fill="url(#wrenchGradient)" 
        className="animate-bounce"
        style={{ transformOrigin: '50px 50px' }}
      />
      <circle cx="25" cy="25" r="8" fill="#3B82F6" className="animate-pulse" />
      <circle cx="75" cy="75" r="6" fill="#3B82F6" className="animate-pulse" />
      <defs>
        <linearGradient id="wrenchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Animated Oil Drop SVG Component
  const AnimatedOilDrop = ({ className, style }) => (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 50 70" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M25 10 Q35 25 35 40 Q35 55 25 60 Q15 55 15 40 Q15 25 25 10 Z" 
        fill="url(#oilGradient)" 
        className="animate-bounce"
        style={{ animationDuration: '2s' }}
      />
      <ellipse cx="25" cy="20" rx="3" ry="6" fill="#60A5FA" opacity="0.7" className="animate-pulse" />
      <defs>
        <linearGradient id="oilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24 px-6 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      {/* Original Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Floating Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`
          }}
        />
      ))}
      
      {/* Animated Car Servicing SVGs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatedCar 
          className="absolute top-16 right-16 w-32 h-16 opacity-20" 
          style={{ animationDelay: '0s' }}
        />
        <AnimatedCar 
          className="absolute bottom-20 left-10 w-24 h-12 opacity-15 transform scale-x-[-1]" 
          style={{ animationDelay: '1s' }}
        />
        
        <AnimatedWrench 
          className="absolute top-32 left-20 w-12 h-12 opacity-25" 
          style={{ animationDelay: '0.5s', animationDuration: '3s' }}
        />
        <AnimatedWrench 
          className="absolute bottom-32 right-32 w-10 h-10 opacity-20 transform rotate-45" 
          style={{ animationDelay: '1.5s', animationDuration: '2.5s' }}
        />
        
        <AnimatedOilDrop 
          className="absolute top-48 right-24 w-8 h-12 opacity-30" 
          style={{ animationDelay: '1s' }}
        />
        <AnimatedOilDrop 
          className="absolute bottom-48 left-32 w-6 h-10 opacity-25" 
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Engine-like Pulsing Circles - Blue Theme */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full border-2 border-blue-500/30 animate-ping"></div>
      <div className="absolute bottom-1/3 left-10 w-24 h-24 rounded-full border-2 border-blue-400/20 animate-ping" style={{ animationDelay: '1s' }}></div>
      
      {/* Speed Lines - Blue Theme */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto text-center relative z-10 flex flex-col items-center justify-center min-h-[80vh]">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Animated Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-8 animate-bounce">
            <Wrench className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm font-medium text-blue-200">Professional Auto Care</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {heroSection?.heading || "Expert Car Servicing"}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
            {heroSection?.subtitle || "Professional automotive services with cutting-edge technology and expert craftsmanship"}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-2 overflow-hidden">
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">{heroSection?.primaryAction?.label || "Book Service Now"}</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            
          </div>
          
          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "10K+", label: "Cars Serviced", icon: Wrench },
              { number: "99%", label: "Satisfaction", icon: Shield },
              { number: "24/7", label: "Support", icon: Zap }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
    </section>
  );
};