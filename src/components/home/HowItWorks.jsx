import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Camera, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Free Consultation',
    description: 'We assess your property, discuss your goals, and build a tailored management plan.',
  },
  {
    number: '02',
    icon: Camera,
    title: 'Setup & Onboarding',
    description: 'Professional photography, listing creation, and full system integration within days.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'We Handle Everything',
    description: 'Bookings, guest communication, cleaning, maintenance — all managed seamlessly.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'You Earn & Grow',
    description: 'Receive monthly profit reports and watch your revenue grow while you relax.',
  },
];

export default function HowItWorks() {
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
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            From Property to Passive Income
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Four simple steps to a fully managed, high-performing rental
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 text-center relative z-10 border border-slate-100 hover:shadow-lg transition-shadow">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center mx-auto mt-4 mb-6">
                    <step.icon className="w-10 h-10 text-cyan-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-5 z-20 -translate-y-1/2">
                    <ArrowRight className="w-7 h-7 text-cyan-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to={createPageUrl('Contact')}>
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-cyan-600/20">
              Start Your Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}