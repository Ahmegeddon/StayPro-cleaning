import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import {
  CheckCircle2,
  Star,
  Calendar,
  MessageSquare,
  Key,
  Camera,
  FileText,
  DollarSign,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Zap,
  Award,
  ArrowRight,
  Sparkles,
  BarChart3,
  Settings
} from 'lucide-react';

const managementServices = [
  {
    icon: FileText,
    title: 'Listing Optimization',
    description: 'Professional photography, compelling descriptions, competitive pricing strategy, and SEO optimization.',
  },
  {
    icon: Calendar,
    title: 'Booking Management',
    description: 'Calendar synchronization, dynamic pricing, booking confirmations, and revenue optimization.',
  },
  {
    icon: MessageSquare,
    title: 'Guest Communication',
    description: '24/7 guest support, instant responses, pre-arrival instructions, and review management.',
  },
  {
    icon: Key,
    title: 'Check-In/Check-Out',
    description: 'Seamless guest arrivals and departures with keyless entry coordination and welcome packages.',
  },
  {
    icon: Sparkles,
    title: 'Professional Cleaning',
    description: 'Hotel-standard turnover cleaning after every guest with quality inspection and photo documentation.',
  },
  {
    icon: Settings,
    title: 'Maintenance & Repairs',
    description: 'Preventive maintenance, emergency repairs, vendor coordination, and property inspections.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Monthly revenue reports, occupancy tracking, guest insights, and optimization recommendations.',
  },
  {
    icon: Shield,
    title: 'Compliance & Insurance',
    description: 'Regulation compliance, guest screening, damage protection, and insurance coordination.',
  },
];

const benefits = [
  'Zero time investment required',
  'Maximize rental income',
  'Professional guest experience',
  'Consistent 5-star ratings',
  'Reduced vacancy periods',
  'Expert market knowledge',
  'Stress-free ownership',
  'Scalable for multiple properties',
];

const pricingFeatures = [
  'No upfront costs',
  'Commission-based pricing',
  'Transparent monthly reports',
  'All operational costs included',
  'Cancel anytime flexibility',
  'Dedicated account manager',
];

export default function AirbnbManagement() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 bg-cyan-500/20 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Premium Service
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Full Airbnb Management & Concierge
              </h1>

              <p className="mt-6 text-xl text-slate-300 leading-relaxed">
                Sit back and relax while we handle 100% of your Airbnb operations. From guest 
                bookings to cleaning and everything in between — you just collect the profits.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('Contact')}>
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl w-full sm:w-auto shadow-lg shadow-cyan-600/30">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { value: '100%', label: 'Hands-Free' },
                  { value: '30%+', label: 'Revenue Increase' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-cyan-400">{stat.value}</p>
                    <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                  alt="Luxury property management"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">+35%</p>
                    <p className="text-sm text-slate-600">Average Revenue Growth</p>
                  </div>
                </div>
                <p className="text-xs text-slate-500">With professional management</p>
              </motion.div>
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
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Complete Management
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              We Handle Everything
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From listing creation to guest checkout — every aspect managed professionally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-lg transition-all border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gradient-to-br from-cyan-600 to-cyan-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-cyan-200 font-semibold text-sm uppercase tracking-wider">
                Why Choose Full Management
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white leading-tight">
                Passive Income Made Simple
              </h2>
              <p className="mt-5 text-lg text-cyan-100 leading-relaxed">
                Stop spending hours managing your rental. Our full-service management means you 
                truly own an investment property — not a second job. We optimize every aspect 
                while you enjoy the returns.
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
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                    <span className="text-white">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-8 h-8 text-cyan-300" />
                  <h3 className="text-2xl font-bold text-white">Typical Results</h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-cyan-200 text-sm font-medium">Revenue Increase</span>
                      <span className="text-2xl font-bold text-white">30-40%</span>
                    </div>
                    <p className="text-cyan-100 text-sm">Through optimized pricing and occupancy</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-cyan-200 text-sm font-medium">Review Rating</span>
                      <span className="text-2xl font-bold text-white">4.9★</span>
                    </div>
                    <p className="text-cyan-100 text-sm">Average rating across managed properties</p>
                  </div>

                  <div className="bg-white/5 rounded-xl p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-cyan-200 text-sm font-medium">Time Saved</span>
                      <span className="text-2xl font-bold text-white">20+ hrs</span>
                    </div>
                    <p className="text-cyan-100 text-sm">Per month per property</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Model */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Simple Pricing
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Performance-Based Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We only succeed when you succeed. No hidden fees, no upfront costs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border-2 border-cyan-100"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-slate-900">Commission-Based</span>
                </div>
                <p className="text-xl text-slate-600">
                  We take a percentage of your monthly revenue
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  Competitive rates based on property type and location
                </p>
              </div>

              <div className="border-t border-slate-200 pt-8 mb-8">
                <h3 className="text-lg font-semibold text-slate-900 mb-6">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {pricingFeatures.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-cyan-50 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">
                      Why This Model Works
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Our commission-based model aligns our success with yours. We're motivated to 
                      maximize your occupancy, optimize pricing, and deliver exceptional guest experiences 
                      because your revenue growth is our revenue growth.
                    </p>
                  </div>
                </div>
              </div>

              <Link to={createPageUrl('Contact')}>
                <Button size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg rounded-xl">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-cyan-600 font-semibold text-sm uppercase tracking-wider">
              Getting Started
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              From consultation to your first booking in as little as 7 days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: MessageSquare,
                title: 'Consultation',
                description: 'We assess your property and discuss your goals and expectations.',
              },
              {
                step: '02',
                icon: Camera,
                title: 'Setup & Photography',
                description: 'Professional photos, listing creation, and system integration.',
              },
              {
                step: '03',
                icon: Calendar,
                title: 'Go Live',
                description: 'Your property goes live on all major booking platforms.',
              },
              {
                step: '04',
                icon: TrendingUp,
                title: 'You Relax',
                description: 'We manage everything while you receive monthly profit reports.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center mx-auto">
                    <item.icon className="w-8 h-8 text-cyan-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cyan-600 text-white flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              Ready to Turn Your Property into Passive Income?
            </h2>
            <p className="mt-6 text-xl text-slate-300">
              Schedule a free consultation and discover how much more your property could be earning.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg rounded-xl shadow-lg shadow-cyan-600/30">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}