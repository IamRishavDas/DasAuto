import { ChevronRight } from 'lucide-react';

export const HeroSection = ({ heroSection }) => (
  <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white py-24 px-6">
    <div className="absolute inset-0 bg-black opacity-40"></div>
    <div className="container mx-auto text-center relative z-10">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        {heroSection.heading}
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
        {heroSection.subtitle}
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2">
        <span>{heroSection.primaryAction.label}</span>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </section>
);
