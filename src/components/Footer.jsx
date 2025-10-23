import React from 'react';
import { Car, Phone, Mail, Twitter, Instagram, Facebook, ChevronRight } from 'lucide-react';


export const Footer = ({ footer }) => (
  <footer className="bg-gray-900 text-gray-400 py-12 px-6">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          <Car className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold text-white">Das Auto</span>
        </div>
        
        <div className="flex space-x-8 mb-6 md:mb-0">
          {footer.links.map((link, index) => (
            <a key={index} href={link.route} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
        </div>
      </div>
      
      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>{footer.copyright}</p>
      </div>
    </div>
  </footer>
);