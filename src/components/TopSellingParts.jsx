import React from 'react';
import { Car, Phone, Mail, Twitter, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { PartsCard } from './PartsCard';

export const TopSellingParts = ({ topSellingParts }) => (
  <section className="bg-gray-900 py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        {topSellingParts.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {topSellingParts.cards.map((part, index) => (
          <PartsCard key={index} part={part} />
        ))}
      </div>
    </div>
  </section>
);