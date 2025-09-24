import React from 'react';
import { Car, Phone, Mail, Twitter, Instagram, Facebook, ChevronRight } from 'lucide-react';

export const ServiceCard = ({ service }) => (
  <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors group">
    <div className="w-16 h-16 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
      <Car className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
    <p className="text-gray-300">{service.description}</p>
  </div>
);