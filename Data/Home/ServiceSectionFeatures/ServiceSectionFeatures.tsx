import { Service } from "@/Types/Home/ServiceSectionTypes/ServiceSectionTypes";

export const services: Service[] = [
    {
      title: 'Land Share Development',
      description: 'Invest in fractional land ownership with flexible entry points. Pool your resources with other investors to own premium land parcels and enjoy proportional returns on development profits.',
      features: [
        'Affordable entry investment',
        'Shared ownership benefits',
        'Professional management',
        'Transparent profit sharing'
    ],
      image: '/images/land-share.jpg',
      imageAlt: 'Residential development with garden',
      imagePosition: 'left'
    },
    {
      title: 'Land Development',
      description: 'Full-scale land development services from raw land acquisition to finished communities. We handle zoning, infrastructure, and all aspects of creating value from undeveloped land.',
      features: [
        'Complete project management',
        'Infrastructure development',
        'Regulatory compliance',
        'Maximum value creation'
      ],
      image: '/images/land-development.jpg',
      imageAlt: 'Developed land with infrastructure',
      imagePosition: 'right'
    }
  ];