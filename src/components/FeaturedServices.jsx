import React from 'react';
import { Car, Phone, Mail, Twitter, Instagram, Facebook, ChevronRight } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const FeaturedServices = ({ featuredServices }) => (
  <section className="bg-gray-800 py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        {featuredServices.title}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {featuredServices.cards.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  </section>
);