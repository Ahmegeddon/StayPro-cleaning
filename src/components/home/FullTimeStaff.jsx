import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { CheckCircle2, ChevronRight, Sparkles, Building2 } from 'lucide-react';

const managementIncludes = [
  'Professional listing creation & optimization',
  'Dynamic pricing & revenue management',
  '24/7 guest communication & support',
  'Seamless check-in / check-out coordination',
  'Hotel-standard turnover cleaning',
  'Linen & towel management',
  'Preventive maintenance & repairs',
  'Monthly financial reporting',
  'Guest review management',
  'Regulatory compliance support',
];

const cleaningIncludes = [
  'Full bedroom & living area cleaning',
  'Bathroom deep sanitization',
  'Kitchen reset & appliance wipe-down',
  'Fresh linen & towel changes',
  'Restocking of guest essentials',
  'Pre-check-in quality inspection',
  'Flexible scheduling around bookings',
  'Same-day availability',
];

export default function FullTimeStaff() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
            Our Core Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
            Choose How We Help You
          </h2>
          <p className="text-lg text-slate-600">
            Whether you need a reliable cleaning partner or want us to manage everything —
            we have the perfect solution for your property.
          </p>
        </motion.div>

        {/* Two Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Cleaning Services Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Cleaning Services</h3>
                <p className="text-slate-500 text-sm">Per-turnover or scheduled</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Professional Airbnb turnover cleaning with hotel-grade standards. Perfect for hosts who manage their own bookings and need a reliable cleaning partner.
            </p>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {cleaningIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link to={createPageUrl('AirbnbCleaning')}>
              <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-5">
                Explore Cleaning Services
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Full Management Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-3xl p-8 lg:p-10 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-6 right-6">
              <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">
                Recommended
              </span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Full Management</h3>
                <p className="text-cyan-200 text-sm">100% hands-free operation</p>
              </div>
            </div>
            <p className="text-cyan-100 mb-6 leading-relaxed">
              We handle everything from A to Z. Your property runs as a fully optimized short-term rental business — you just receive the monthly revenue.
            </p>
            <div className="grid grid-cols-1 gap-3 mb-8">
              {managementIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                  <span className="text-white text-sm">{item}</span>
                </div>
              ))}
            </div>
            <Link to={createPageUrl('AirbnbManagement')}>
              <Button className="w-full bg-white text-cyan-700 hover:bg-cyan-50 rounded-xl py-5 font-semibold">
                Explore Full Management
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-600 mb-4">Not sure which option is right for you?</p>
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" variant="outline" className="border-2 border-cyan-200 text-cyan-700 hover:bg-cyan-50 px-8 rounded-xl">
              Talk to Our Team
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}