import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  CheckCircle2,
  Clock,
  Star,
  Sparkles,
  BedDouble,
  ShowerHead,
  UtensilsCrossed,
  Package,
  ClipboardCheck,
  CalendarClock,
  ArrowRight,
  Shield,
  Award
} from 'lucide-react';

const features = [
  {
    icon: BedDouble,
    title: 'Full Bedroom Cleaning',
    description: 'Fresh linens, made beds, dusted surfaces, vacuumed floors, and spotless mirrors.',
  },
  {
    icon: ShowerHead,
    title: 'Bathroom Deep Clean',
    description: 'Sanitized surfaces, sparkling fixtures, fresh towels, and restocked essentials.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Reset',
    description: 'Clean appliances, wiped counters, empty fridge check, and organized cabinets.',
  },
  {
    icon: Sparkles,
    title: 'Living Areas',
    description: 'Vacuumed carpets, mopped floors, dusted furniture, and arranged cushions.',
  },
  {
    icon: Package,
    title: 'Restocking Services',
    description: 'Optional restocking of toiletries, kitchen supplies, and welcome amenities.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Detailed checklist review before every guest check-in.',
  },
];

const benefits = [
  'Trained specifically for Airbnb standards',
  'Consistent 5-star ready results',
  'Same-day cleaning availability',
  'Flexible scheduling around check-ins',
  'Linen & towel change coordination',
  'Photo documentation available',
  'Quality guarantee on every clean',
  'Dedicated account manager',
];

export default function AirbnbCleaning() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-teal-600 to-teal-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-white/20 text-white rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-white" />
                Our Specialty Service
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Airbnb & Short-Term Rental Cleaning
              </h1>

              <p className="mt-6 text-xl text-teal-100 leading-relaxed">
                Full turnover cleaning designed specifically for vacation rentals and short-term 
                properties. Keep your guests happy and your reviews stellar.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              What's Included
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Complete Turnover Cleaning
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Every area of your property cleaned to hotel standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all border border-slate-100"
              >
                <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center mb-5">
                  <feature.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Why Choose Our Airbnb Cleaning
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Designed for Short-Term Rental Success
              </h2>
              <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                We understand what it takes to maintain a successful rental property. Our cleaning 
                process is built around your needs — from flexible scheduling to detailed inspection 
                checklists.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
                  alt="Clean bedroom"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center">
                    <Award className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900">98%</p>
                    <p className="text-slate-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <CalendarClock className="w-8 h-8 text-teal-400" />
                  <span className="text-teal-400 font-semibold uppercase tracking-wider text-sm">
                    Flexible Scheduling
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Aligned With Your Check-In & Check-Out Times
                </h2>
                <p className="mt-5 text-lg text-slate-300 leading-relaxed">
                  We work around your booking schedule, not the other way around. Same-day 
                  cleaning, tight turnovers, and last-minute requests — we've got you covered.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-5">
                    <Clock className="w-8 h-8 text-teal-400 mb-3" />
                    <p className="text-2xl font-bold text-white">2-4 hrs</p>
                    <p className="text-slate-400">Average turnaround</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-5">
                    <Shield className="w-8 h-8 text-teal-400 mb-3" />
                    <p className="text-2xl font-bold text-white">100%</p>
                    <p className="text-slate-400">Reliability rate</p>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg">
                    Book Your Turnover Cleaning
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}