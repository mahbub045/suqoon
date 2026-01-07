import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/Data/Home/TestimonialSectionFeatures/TestimonialSectionFeatures';

const TestimonialSection: React.FC = () => {
  return (
    <section className="w-full bg-slate-100 py-16 md:py-20">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-2">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hear from investors who have trusted SUQOON with their real estate journey.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 relative"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200 opacity-50" />

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base text-justify leading-relaxed mb-6 relative z-10">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${testimonial.avatarColor}`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;