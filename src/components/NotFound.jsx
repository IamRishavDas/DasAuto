import { Home, Search, ArrowLeft, Wrench, AlertTriangle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = ({ onGoHome, onGoBack }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    
    // Create sparkle animation
    const createSparkles = () => {
      const newSparkles = [];
      for (let i = 0; i < 12; i++) {
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

  // Animated Broken Car SVG Component
  const BrokenCar = ({ className, style }) => (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 240 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car Body - Damaged */}
      <path 
        d="M20 70 L40 50 L80 50 L100 60 L160 60 L180 70 L180 90 L20 90 Z" 
        fill="url(#brokenCarGradient)" 
        className="animate-pulse"
      />
      {/* Crack in windshield */}
      <path 
        d="M45 50 L75 50 L85 60 L55 60 Z" 
        fill="#3B82F6" 
        opacity="0.3"
      />
      <path 
        d="M50 50 L70 60 M60 50 L80 60" 
        stroke="#EF4444" 
        strokeWidth="1" 
        className="animate-pulse"
      />
      {/* Smoke from engine */}
      <circle cx="180" cy="40" r="3" fill="#6B7280" opacity="0.5" className="animate-ping" />
      <circle cx="185" cy="35" r="4" fill="#6B7280" opacity="0.3" className="animate-ping" style={{ animationDelay: '0.5s' }} />
      <circle cx="175" cy="30" r="2" fill="#6B7280" opacity="0.4" className="animate-ping" style={{ animationDelay: '1s' }} />
      
      {/* Flat Tires */}
      <ellipse cx="50" cy="95" rx="12" ry="8" fill="#374151" />
      <ellipse cx="150" cy="95" rx="12" ry="8" fill="#374151" />
      <circle cx="50" cy="95" r="4" fill="#6B7280" />
      <circle cx="150" cy="95" r="4" fill="#6B7280" />
      
      {/* Broken headlight */}
      <circle cx="175" cy="75" r="4" fill="#FEF3C7" opacity="0.3" />
      <path d="M173 73 L177 77 M177 73 L173 77" stroke="#EF4444" strokeWidth="2" />
      
      <defs>
        <linearGradient id="brokenCarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B7280" />
          <stop offset="100%" stopColor="#374151" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Animated Road Cone SVG
  const RoadCone = ({ className, style }) => (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 60 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M30 10 L45 70 L15 70 Z" 
        fill="url(#coneGradient)" 
        className="animate-bounce"
      />
      <rect x="25" y="65" width="10" height="8" fill="#374151" />
      <rect x="20" y="30" width="20" height="3" fill="white" />
      <rect x="22" y="45" width="16" height="3" fill="white" />
      <defs>
        <linearGradient id="coneGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Animated Warning Sign SVG
  const WarningSign = ({ className, style }) => (
    <svg 
      className={className}
      style={style}
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon 
        points="40,10 70,65 10,65" 
        fill="url(#warningGradient)" 
        className="animate-pulse"
      />
      <rect x="37" y="25" width="6" height="20" fill="white" />
      <circle cx="40" cy="55" r="3" fill="white" />
      <defs>
        <linearGradient id="warningGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24 px-6 overflow-hidden flex items-center justify-center">
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
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BrokenCar 
          className="absolute top-20 right-16 w-48 h-24 opacity-20" 
        />
        
        <RoadCone 
          className="absolute top-32 left-16 w-12 h-16 opacity-30" 
          style={{ animationDelay: '0.5s', animationDuration: '2s' }}
        />
        <RoadCone 
          className="absolute bottom-32 right-32 w-10 h-14 opacity-25" 
          style={{ animationDelay: '1s', animationDuration: '2.5s' }}
        />
        
        <WarningSign 
          className="absolute top-48 right-24 w-16 h-16 opacity-25" 
          style={{ animationDelay: '1.5s' }}
        />
        <WarningSign 
          className="absolute bottom-48 left-32 w-12 h-12 opacity-20" 
          style={{ animationDelay: '0.8s' }}
        />
      </div>
      
      {/* Pulsing Circles */}
      <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full border-2 border-blue-500/30 animate-ping"></div>
      <div className="absolute bottom-1/3 left-10 w-24 h-24 rounded-full border-2 border-red-500/20 animate-ping" style={{ animationDelay: '1s' }}></div>
      
      {/* Speed Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Error Badge */}
          <div className="inline-flex items-center bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm border border-red-400/30 rounded-full px-6 py-2 mb-8 animate-bounce">
            <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
            <span className="text-sm font-medium text-red-200">Service Unavailable</span>
          </div>

          {/* 404 Number */}
          <div className="text-8xl md:text-9xl font-black mb-6 leading-none">
            <span className="bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              404
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Oops! Page Under Maintenance
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Looks like this page took a detour to our garage. Our team is working hard to get it back on the road. 
            Meanwhile, let's get you back to where you need to be.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => navigate("/")}
              className="group relative bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center space-x-2 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
              <Home className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Go Home</span>
            </button>
            
            <button 
              onClick={() => history.back()}
              className="group border-2 border-blue-400/50 hover:border-blue-400 text-blue-200 hover:text-white hover:bg-blue-400/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm inline-flex items-center space-x-2 cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Go Back</span>
            </button>
          </div>
          
          {/* Help Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { 
                icon: Search, 
                title: "Search Services", 
                description: "Find what you're looking for",
                link: "/search"
              },
              { 
                icon: Wrench, 
                title: "Our Services", 
                description: "Explore our offerings",
                link: "/services"
              },
              { 
                icon: Home, 
                title: "Contact Support", 
                description: "Get help from our team",
                link: "/contact"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-black/20 backdrop-blur-sm rounded-xl border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
                <div className="text-xl font-semibold text-white mb-2">{item.title}</div>
                <div className="text-blue-200 text-sm">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};