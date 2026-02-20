import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Sparkles, 
  Truck, 
  Building, 
  Hammer,
  Users,
  ArrowRight,
  Building as BuildingIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const services = [
  {
    icon: Home,
    title: 'Airbnb & Short-Term Rentals',
    description: 'Full turnover cleaning between guests with hotel-standard results. Our specialty.',
    highlight: true,
    link: 'AirbnbCleaning',
  },
  {
    icon: Building,
    title: 'Full Property Management',
    description: 'Hands-free Airbnb management. We handle everything — bookings, guests, cleaning, listings — you just collect profits.',
    highlight: true,
    link: 'AirbnbManagement',
  },
  {
    icon: Users,
    title: 'Full-Time Cleaning Staff',
    description: 'Dedicated professional cleaners for your home or office with flexible scheduling.',
    highlight: false,
    link: 'OtherServices',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Thorough top-to-bottom cleaning for properties needing extra attention.',
    highlight: false,
    link: 'OtherServices',
  },
  {
    icon: Building2,
    title: 'Residential Cleaning',
    description: 'Regular home cleaning to keep your living space fresh and welcoming.',
    highlight: false,
    link: 'OtherServices',
  },
  {
    icon: Truck,
    title: 'Move-In / Move-Out',
    description: 'Complete cleaning for smooth property transitions.',
    highlight: false,
    link: 'OtherServices',
  },
  {
    icon: Building,
    title: 'Office & Commercial',
    description: 'Professional cleaning for workspaces and commercial properties.',
    highlight: false,
    link: 'OtherServices',
  },
  {
    icon: Hammer,
    title: 'Post-Renovation',
    description: 'Detailed cleanup after construction or renovation work.',
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
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Cleaning Solutions for Every Need
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From Airbnb turnovers to deep cleaning, we deliver spotless results every time.
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
                    ? 'bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-xl shadow-teal-600/20' 
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
                      : 'bg-teal-50 group-hover:bg-teal-100'
                    }
                  `}>
                    <service.icon className={`w-7 h-7 ${service.highlight ? 'text-white' : 'text-teal-600'}`} />
                  </div>

                  <h3 className={`text-xl font-semibold mb-3 ${service.highlight ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>

                  <p className={`mb-5 ${service.highlight ? 'text-teal-100' : 'text-slate-600'}`}>
                    {service.description}
                  </p>

                  <div className={`
                    inline-flex items-center font-medium transition-transform group-hover:translate-x-1
                    ${service.highlight ? 'text-white' : 'text-teal-600'}
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