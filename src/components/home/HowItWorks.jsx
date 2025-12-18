import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, CalendarDays, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request a Quote',
    description: 'Tell us about your property and cleaning needs. We respond within hours.',
  },
  {
    number: '02',
    icon: CalendarDays,
    title: 'Schedule Your Cleaning',
    description: 'Choose a time that fits your check-out/check-in schedule perfectly.',
  },
  {
    number: '03',
    icon: Sparkles,
    title: 'We Handle the Rest',
    description: 'Our team arrives on time and delivers spotless, guest-ready results.',
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
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
            Booking Is Simple
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Three easy steps to a spotlessly clean property
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-teal-100 via-teal-200 to-teal-100" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 text-center relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center mx-auto mt-4 mb-6">
                    <step.icon className="w-10 h-10 text-teal-600" />
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
                  <div className="hidden lg:block absolute top-24 -right-6 z-20">
                    <ArrowRight className="w-8 h-8 text-teal-300" />
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
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-teal-600/20">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}