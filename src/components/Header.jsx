import { Car, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = ({ brand }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-4 px-6 z-30">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Car className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold">{brand.name}</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {brand.navigation.map((item, index) => (
              <a key={index} href={item.route} className="hover:text-blue-400 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          

          {/* Mobile menu button */}
          <button
            className="md:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-xs bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 pt-20">
          <nav className="flex flex-col space-y-6">
            {brand.navigation.map((item, index) => (
              <a
                key={index}
                href={item.route}
                className="text-lg hover:text-blue-400 transition-colors py-2 border-b border-gray-700 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
 
        </div>
      </div>
    </>
  );
};