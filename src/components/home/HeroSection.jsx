import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Clock, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-cyan-50/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left">

            {/* Large Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8 flex justify-center lg:justify-start">
              <div className="w-40 h-40 rounded-full overflow-hidden bg-white shadow-2xl">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69445f233d75f11624962bb9/90d488d30_StayProLogo.png" 
                  alt="StayPro Cleaning"
                  className="w-full h-full object-contain p-6"
                />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 rounded-full px-4 py-2 mb-6">

              <span className="flex items-center gap-1 text-cyan-700 text-sm font-medium">Trusted by Airbnb Hosts


              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Professional Airbnb Cleaning{' '}
              <span className="text-cyan-600">You Can Trust</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Every stay, every time. Full turnover cleaning designed for short-term rentals — 
              so you maintain 5-star reviews effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-600/20 transition-all hover:shadow-xl hover:shadow-cyan-600/30 w-full sm:w-auto">
                  Get a Free Quote
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-cyan-200 hover:bg-cyan-50 px-8 py-6 text-lg rounded-xl w-full sm:w-auto">
                  Book a Cleaning
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {[
              { icon: Clock, label: 'Same-Day Service' },
              { icon: Shield, label: 'Fully Insured' },
              { icon: Star, label: '5-Star Rated' }].
              map((item, index) =>
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center lg:items-start gap-2">

                  <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block">

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80"
                alt="Clean and organized living space"
                className="w-full h-[600px] object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -left-8 bottom-12 bg-white rounded-2xl shadow-xl p-5 max-w-[240px]">

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center">
                  <Star className="w-6 h-6 text-cyan-600 fill-cyan-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">5-Star Ready</p>
                  <p className="text-sm text-slate-500">Every cleaning</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) =>
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}