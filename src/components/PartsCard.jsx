import React from 'react';
import { Car, Phone, Mail, Twitter, Instagram, Facebook, ChevronRight } from 'lucide-react';

export const PartsCard = ({ part }) => (
  <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
    <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mb-4 flex items-center justify-center">
      <Car className="w-16 h-16 text-white opacity-80" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{part.title}</h3>
    <p className="text-gray-300">{part.description}</p>
    <button className="mt-4 text-blue-400 hover:text-blue-300 font-semibold">
      Shop Now →
    </button>
  </div>
);