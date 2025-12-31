import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Airbnb Superhost',
    location: 'Dubai Marina',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    content: 'Since partnering with SparkleStay, my reviews consistently mention how clean the apartment is. They understand what Airbnb guests expect.',
    rating: 5,
  },
  {
    name: 'Ahmed K.',
    role: 'Property Manager',
    location: 'Downtown Dubai',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    content: 'Managing 15 short-term rentals requires reliable partners. Their scheduling aligns perfectly with our check-ins, and quality never wavers.',
    rating: 5,
  },
  {
    name: 'Emma L.',
    role: 'Holiday Home Owner',
    location: 'Palm Jumeirah',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    content: 'The attention to detail is incredible. They even coordinate linen changes and restock essentials. It\'s like having a hotel housekeeping team.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Trusted by Hosts Across Abu Dhabi
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Join hundreds of satisfied property owners and managers
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 right-8">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-white fill-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-slate-100 rounded-full px-6 py-3">
            <span className="text-slate-600 font-medium">Proud partner of</span>
            <span className="text-slate-900 font-bold">500+ Airbnb Hosts & Property Managers</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}