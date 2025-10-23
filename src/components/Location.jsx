import { MapPin, Phone, Clock, Navigation, Car, Wrench, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Location = ({ locationData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activePin, setActivePin] = useState(0);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Default location data if not provided
  const defaultLocation = {
    name: "Das Auto",
    address: "Taldanga GT Road, near WBSEDCL power house",
    city: "Chandanagar, West Bengal",
    phone: "+91 82400 06392",
    hours: "Mon-Sunday: 10AM-8PM, except Friday",
    coordinates: { lat: 22.9068, lng: 88.3639 },
    rating: 4.8,
    reviews: 245
  };

  const location = locationData || defaultLocation;

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => setMapLoaded(true), 500);
    
    // Animate pin selection
    const interval = setInterval(() => {
      setActivePin(prev => (prev + 1) % 3);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Animated Map Pin Component
  const AnimatedPin = ({ className, style, isActive, delay = 0 }) => (
    <div 
      className={`${className} transform transition-all duration-500 ${isActive ? 'scale-125' : 'scale-100'}`}
      style={{ ...style, animationDelay: `${delay}s` }}
    >
      <svg 
        viewBox="0 0 50 70" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`w-8 h-12 ${isActive ? 'animate-bounce' : 'animate-pulse'}`}
      >
        <path 
          d="M25 5 C35 5 42 12 42 22 C42 35 25 65 25 65 C25 65 8 35 8 22 C8 12 15 5 25 5 Z" 
          fill={isActive ? "#3B82F6" : "#6B7280"}
          className="drop-shadow-lg"
        />
        <circle cx="25" cy="22" r="8" fill="white" />
        <Wrench className="w-3 h-3 text-blue-600" style={{ transform: 'translate(19px, 16px)' }} />
      </svg>
    </div>
  );

  // Animated Road Network
  const RoadNetwork = () => (
    <svg 
      className="absolute inset-0 w-full h-full opacity-20" 
      viewBox="0 0 400 300" 
      fill="none"
    >
      {/* Main Roads */}
      <path 
        d="M0 150 L400 150" 
        stroke="#3B82F6" 
        strokeWidth="3" 
        className="animate-pulse"
        strokeDasharray="10,5"
      />
      <path 
        d="M200 0 L200 300" 
        stroke="#3B82F6" 
        strokeWidth="3" 
        className="animate-pulse"
        strokeDasharray="10,5"
        style={{ animationDelay: '0.5s' }}
      />
      
      {/* Secondary Roads */}
      <path 
        d="M100 0 L300 300" 
        stroke="#6B7280" 
        strokeWidth="2" 
        className="animate-pulse"
        strokeDasharray="5,3"
        style={{ animationDelay: '1s' }}
      />
      <path 
        d="M300 0 L100 300" 
        stroke="#6B7280" 
        strokeWidth="2" 
        className="animate-pulse"
        strokeDasharray="5,3"
        style={{ animationDelay: '1.5s' }}
      />
    </svg>
  );

  // Animated Car on Road
  const AnimatedCarOnRoad = ({ className, style }) => (
    <div className={`${className} animate-bounce`} style={style}>
      <svg viewBox="0 0 80 40" fill="none" className="w-12 h-6">
        <path 
          d="M10 25 L20 15 L35 15 L45 20 L70 20 L75 25 L75 35 L10 35 Z" 
          fill="#3B82F6"
        />
        <circle cx="25" cy="35" r="4" fill="#374151" className="animate-spin" style={{ animationDuration: '1s' }} />
        <circle cx="60" cy="35" r="4" fill="#374151" className="animate-spin" style={{ animationDuration: '1s' }} />
        <circle cx="70" cy="22" r="2" fill="#FEF3C7" className="animate-pulse" />
      </svg>
    </div>
  );

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse"></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600/20 to-blue-800/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6">
            <MapPin className="w-4 h-4 mr-2 text-blue-400 animate-bounce" />
            <span className="text-sm font-medium text-blue-200">Find Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Our Service Center</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Located in the heart of the automotive district with easy access
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map Visualization */}
          <div className={`relative transform transition-all duration-1000 ${mapLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative h-96 bg-gradient-to-br from-blue-900/50 to-gray-800/50 rounded-2xl border border-blue-400/30 backdrop-blur-sm overflow-hidden">
              {/* Map Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
              
              {/* Road Network */}
              <RoadNetwork />
              
              {/* Animated Cars on Roads */}
              <AnimatedCarOnRoad 
                className="absolute top-36 left-4 opacity-60" 
                style={{ animationDelay: '0s', animationDuration: '3s' }}
              />
              <AnimatedCarOnRoad 
                className="absolute top-20 right-8 opacity-40 transform scale-x-[-1]" 
                style={{ animationDelay: '1s', animationDuration: '2.5s' }}
              />
              
              {/* Location Pins */}
              <AnimatedPin 
                className="absolute top-32 left-1/2 transform -translate-x-1/2" 
                isActive={activePin === 0}
                delay={0}
              />
              <AnimatedPin 
                className="absolute top-20 left-1/3 transform -translate-x-1/2" 
                isActive={activePin === 1}
                delay={0.5}
              />
              <AnimatedPin 
                className="absolute bottom-20 right-1/3 transform translate-x-1/2" 
                isActive={activePin === 2}
                delay={1}
              />
              
              {/* Pulsing Location Indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full"></div>
              </div>
              
              {/* Location Info Popup */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-blue-400/30">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate">{location.name}</h3>
                    <p className="text-blue-200 text-sm">{location.address}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white text-sm">{location.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Address Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400 animate-pulse" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Our Location</h3>
                  <p className="text-gray-300 mb-1">{location.address}</p>
                  <p className="text-blue-200 font-medium">{location.city}</p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-400 animate-pulse" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300 mb-2">{location.phone}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                    Call Now →
                  </button>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-400 animate-pulse" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">Business Hours</h3>
                  <p className="text-gray-300">{location.hours}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center space-x-2">
                <Navigation className="w-5 h-5 group-hover:animate-bounce" />
                <span>Get Directions</span>
              </button>
              
              {/* <button className="group flex-1 border-2 border-blue-400/50 hover:border-blue-400 text-blue-200 hover:text-white hover:bg-blue-400/10 px-6 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm inline-flex items-center justify-center space-x-2">
                <Car className="w-5 h-5 group-hover:animate-bounce" />
                <span>Book Visit</span>
              </button> */}
            </div>

            {/* Rating Display */}
            <div className="flex items-center justify-between pt-4 border-t border-blue-400/20">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(location.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'} animate-pulse`}
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">{location.rating}</span>
              </div>
              <span className="text-gray-300 text-sm">{location.reviews} reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};