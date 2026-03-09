import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  TrendingUp,
  Star,
  Clock,
  Wrench,
  MapPin
} from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Full-Service Management',
    description: 'From listing creation to guest checkout — every aspect of your rental managed professionally under one roof.'
  },
  {
    icon: TrendingUp,
    title: 'Revenue Maximization',
    description: 'Dynamic pricing, occupancy optimization, and market expertise deliver 30-40% more revenue on average.'
  },
  {
    icon: Star,
    title: '5-Star Cleaning Standards',
    description: 'Hotel-grade turnover cleaning after every guest — the foundation of great reviews and repeat bookings.'
  },
  {
    icon: Clock,
    title: '24/7 Guest Support',
    description: 'Round-the-clock guest communication so you never have to answer a late-night message again.'
  },
  {
    icon: Wrench,
    title: 'Maintenance Covered',
    description: 'Proactive property maintenance, emergency repairs, and trusted vendor management included.'
  },
  {
    icon: MapPin,
    title: 'Abu Dhabi Specialists',
    description: 'Deep knowledge of the Abu Dhabi STR market — regulations, pricing, and guest expectations.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose StayPro
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              The Property Management Partner Your Rental Deserves
            </h2>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              We're not just a cleaning company — we're your full-service rental management 
              partner. Our comprehensive approach covers everything from sparkling turnovers 
              to revenue optimization, so your property performs at its peak.
            </p>

            <div className="mt-10 relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80"
                alt="Professional property management team"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/80 to-cyan-600/40 flex items-center justify-center">
                <div className="text-white text-center">
                  <p className="text-5xl font-bold">20+</p>
                  <p className="text-lg mt-2">Properties Managed in Abu Dhabi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) =>
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">

                <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}