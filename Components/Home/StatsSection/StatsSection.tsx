'use client';

import React, { useState, useEffect, useRef } from 'react';
import { stats } from '@/Data/Home/StatFeatures/StatFeatures';

const CounterStatsSection = () => {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newValue = Math.min(Math.floor(increment * currentStep), stat.value);
        
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = newValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return (num / 1000).toFixed(0) + ',000';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(0) + '00';
    }
    return num.toString();
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-primary py-16 md:py-20"
    >
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {formatNumber(counts[index])}{stat.suffix}
              </div>
              <p className="text-white/90 text-base md:text-lg font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterStatsSection;