'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { FormData } from '@/Types/Home/ContactUsSectionTypes/ContactUsSectionTypes';

const ContactUsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8 my-auto">
            {/* Header */}
            <div>
              <p className="text-primary text-center lg:text-left text-sm font-semibold tracking-wider uppercase mb-4">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl text-center lg:text-left font-bold text-gray-900 mb-6">
                Let's Start Your{' '} <br />
                <span className="text-primary mt-4">Investment Journey</span>
              </h2>
              <p className="text-gray-600 text-lg text-center lg:text-left">
                Ready to invest in your future? Contact us today and our team will guide you through our land development opportunities.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-900 text-lg font-semibold hover:text-primary transition-colors"
                  >
                    +123 456 7890
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a
                    href="mailto:info@suqoon.com"
                    className="text-gray-900 text-lg font-semibold hover:text-primary transition-colors"
                  >
                    info@suqoon.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Address</p>
                  <p className="text-gray-900 text-lg font-semibold">
                    123 Business Center, City
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-10 shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+123 456 7890"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your investment goals..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-full hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;