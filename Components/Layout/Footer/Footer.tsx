'use client';

import React, { useState } from 'react';
import { socialLinks, quickLinks, services } from '@/Data/Layout/Footer/FooterMenu';
import Image from 'next/image';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Subscribed:', email);
  };
 
  return (
    <footer className="w-full bg-slate-800 text-gray-300">
      {/* Main Footer Content */}
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-0 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">

            {/* Logo */}
            <div className="w-12 h-12 shrink-0">
                <Image src="/images/logo.jpg" alt="Logo" width={48} height={48} className="w-full h-full object-cover rounded-md" />
            </div>

            {/* Tagline */}
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in land development and real estate investment. Building futures, one plot at a time.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest investment opportunities.
            </p>
            
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-full text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-0 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 SUQOON Real Estate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;