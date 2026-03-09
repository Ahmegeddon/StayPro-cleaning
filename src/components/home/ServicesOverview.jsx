import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Home,
  TrendingUp,
  MessageSquare,
  Wrench,
  Sparkles,
  Truck,
  Camera,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: Building2,
    title: 'Full Property Management',
    description: 'Completely hands-free Airbnb & STR management. Bookings, guests, cleaning, maintenance — you just collect the profits.',
    highlight: true,
    link: 'AirbnbManagement',
  },
  {
    icon: Home,
    title: 'Airbnb & STR Cleaning',
    description: 'Hotel-standard turnover cleaning between every guest stay. Our specialty — keeping your reviews consistently stellar.',
    highlight: true,
    link: 'AirbnbCleaning',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Optimization',
    description: 'Dynamic pricing strategy, listing SEO, and platform management to maximize your rental income year-round.',
    highlight: false,
    link: 'AirbnbManagement',
  },
  {
    icon: MessageSquare,
    title: 'Guest Experience',
    description: '24/7 guest communication, seamless check-ins, welcome packages, and review management for 5-star stays.',
    highlight: false,
    link: 'AirbnbManagement',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Preventive maintenance, emergency repairs, and trusted vendor coordination to keep your property in top condition.',
    highlight: false,
    link: 'OtherServices',
  },
  {
    icon: Sparkles,
    title: 'Deep & Seasonal Cleaning',
    description: 'Thorough top-to-bottom cleans for seasonal refreshes, post-renovation, or properties that need extra attention.',
    highlight: false,
    link: 'OtherServices',
  },
  {
    icon: Camera,
    title: 'Listing & Photography',
    description: 'Professional photography, compelling listing descriptions, and platform optimization to attract premium guests.',
    highlight: false,
    link: 'AirbnbManagement',
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out',
    description: 'Complete cleaning and property preparation for smooth transitions between long and short-term tenants.',
    highlight: false,
    link: 'OtherServices',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Everything Your Rental Business Needs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From full property management to individual cleaning services — we cover every aspect of your short-term rental.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={createPageUrl(service.link)} className="block h-full">
                <div className={`
                  group relative h-full p-8 rounded-2xl transition-all duration-300
                  ${service.highlight
                    ? 'bg-gradient-to-br from-cyan-600 to-cyan-700 text-white shadow-xl shadow-cyan-600/20'
                    : 'bg-slate-50 hover:bg-white hover:shadow-lg border border-slate-100'
                  }
                `}>
                  {service.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`
                    w-14 h-14 rounded-xl flex items-center justify-center mb-5
                    ${service.highlight
                      ? 'bg-white/20'
                      : 'bg-cyan-50 group-hover:bg-cyan-100'
                    }
                  `}>
                    <service.icon className={`w-7 h-7 ${service.highlight ? 'text-white' : 'text-cyan-600'}`} />
                  </div>

                  <h3 className={`text-xl font-semibold mb-3 ${service.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>

                  <p className={`mb-5 ${service.highlight ? 'text-cyan-100' : 'text-slate-600'}`}>
                    {service.description}
                  </p>

                  <div className={`
                    inline-flex items-center font-medium transition-transform group-hover:translate-x-1
                    ${service.highlight ? 'text-white' : 'text-cyan-600'}
                  `}>
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}