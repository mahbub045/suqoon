import React from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '@/Data/Home/ServiceSectionFeatures/ServiceSectionFeatures';
import Image from 'next/image';


const ServicesSection: React.FC = () => {  
  return (
    <section className="py-6 lg:py-30 px-4 bg-slate-100">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            OUR SERVICES
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive <span className="text-primary">Land Solutions</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            From individual land share investments to full-scale development projects, we offer tailored solutions for every investor.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                service.imagePosition === 'left' 
                  ? 'lg:flex-row' 
                  : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-80 lg:h-96">
                  <Image 
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors flex items-center gap-2 group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;