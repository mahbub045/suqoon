import React from 'react';
import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';
import { properties } from '@/Data/Home/ProjectsFeatures/ProjectsFeatures';

const FeatureProjectsSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="w-11/12 mx-auto py-10 lg:py-30">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
              Featured Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore Our{' '}
              <span className="text-primary">Properties</span>
            </h2>
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 font-semibold cursor-pointer">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-fade-in-up animate-delay-${property.id}`}
            >
              {/* Image Container */}
              <div className="relative h-64 w-full">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm ${
                      property.status === 'Now Selling'
                        ? 'bg-primary text-white'
                        : 'bg-primary/20 text-primary'
                    }`}
                  >
                    {property.status}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.name}
                </h3>

                {/* Type and Price */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">
                    {property.type}
                  </span>
                  <span className="text-emerald-600 font-bold text-lg">
                    From {property.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-colors duration-300 font-semibold">
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjectsSection;